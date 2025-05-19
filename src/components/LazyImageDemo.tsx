import React from 'react';
import LazyImage from './LazyImage';

const LazyImageDemo: React.FC = () => {
    const images = [
        {
            src: 'https://picsum.photos/800/600?random=1',
            alt: 'Random image 1'
        },
        {
            src: 'https://picsum.photos/800/600?random=2',
            alt: 'Random image 2'
        },
        {
            src: 'https://picsum.photos/800/600?random=3',
            alt: 'Random image 3'
        },
        {
            src: 'https://picsum.photos/800/600?random=4',
            alt: 'Random image 4'
        },
        {
            src: 'https://picsum.photos/800/600?random=5',
            alt: 'Random image 5'
        }
    ];

    return (
        <div style={{ padding: '20px' }}>
            <h2>图片懒加载示例</h2>
            <p>滚动页面查看图片加载效果</p>
            
            <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: '20px',
                marginTop: '20px'
            }}>
                {images.map((image, index) => (
                    <div key={index} style={{ height: '300px' }}>
                        <LazyImage
                            src={image.src}
                            alt={image.alt}
                            style={{ height: '100%' }}
                            onLoad={() => console.log(`图片 ${index + 1} 加载完成`)}
                            onError={() => console.log(`图片 ${index + 1} 加载失败`)}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LazyImageDemo; 