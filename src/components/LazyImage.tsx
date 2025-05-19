import React, { useEffect, useRef, useState } from 'react';

interface LazyImageProps {
    src: string;                    // 图片地址
    alt?: string;                   // 图片描述
    placeholder?: string;           // 占位图
    className?: string;             // 自定义类名
    style?: React.CSSProperties;    // 自定义样式
    onLoad?: () => void;           // 图片加载完成回调
    onError?: () => void;          // 图片加载失败回调
}

const LazyImage: React.FC<LazyImageProps> = (props: any) => {
    const {
        src,
        alt = '',
        placeholder = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7', // 1x1 透明图片
        className = '',
        style = {},
        onLoad,
        onError
    } = props
    const [isLoaded, setIsLoaded] = useState(false);
    const [isInView, setIsInView] = useState(false);
    const [error, setError] = useState(false);
    const imgRef = useRef<HTMLImageElement>(null);
    const observerRef = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        // 创建 Intersection Observer
        observerRef.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsInView(true);
                        // 一旦图片进入视图，就停止观察
                        if (imgRef.current) {
                            observerRef.current?.unobserve(imgRef.current);
                        }
                    }
                });
            },
            {
                root: null, // 使用视口作为根
                rootMargin: '50px', // 提前 50px 加载
                threshold: 0.1 // 当 10% 的图片可见时触发
            }
        );

        // 开始观察图片元素
        if (imgRef.current) {
            observerRef.current.observe(imgRef.current);
        }

        // 清理函数
        return () => {
            if (observerRef.current && imgRef.current) {
                observerRef.current.unobserve(imgRef.current);
            }
        };
    }, []);

    const handleLoad = () => {
        setIsLoaded(true);
        onLoad?.();
    };

    const handleError = () => {
        setError(true);
        onError?.();
    };

    return (
        <div
            className={`lazy-image-container ${className}`}
            style={{
                position: 'relative',
                overflow: 'hidden',
                ...style
            }}
        >
            {/* 占位图 */}
            <img
                src={placeholder}
                alt={alt}
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    opacity: isLoaded ? 0 : 1,
                    transition: 'opacity 0.3s ease-in-out'
                }}
            />

            {/* 实际图片 */}
            {isInView && !error && (
                <img
                    ref={imgRef}
                    src={src}
                    alt={alt}
                    onLoad={handleLoad}
                    onError={handleError}
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        opacity: isLoaded ? 1 : 0,
                        transition: 'opacity 0.3s ease-in-out'
                    }}
                />
            )}

            {/* 加载失败显示 */}
            {error && (
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#f5f5f5',
                        color: '#999',
                        fontSize: '14px'
                    }}
                >
                    图片加载失败
                </div>
            )}
        </div>
    );
};

export default LazyImage; 