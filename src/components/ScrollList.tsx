import React, { Component } from 'react';

interface ScrollListState {
  messages: string[];
}

class ScrollList extends Component<{}, ScrollListState> {
  private listRef: React.RefObject<HTMLDivElement>;

  constructor(props: {}) {
    super(props);
    this.state = {
      messages: []
    };
    this.listRef = React.createRef();
  }

  componentDidMount() {
    // 模拟每2秒添加一条新消息
    // setInterval(() => {
    //   this.setState(prevState => ({
    //     messages: [...prevState.messages, `Message ${prevState.messages.length + 1}`]
    //   }));
    // }, 2000);
  }

  getSnapshotBeforeUpdate(prevProps: {}, prevState: ScrollListState): number | null {
    // 获取更新前的滚动位置
    if (prevState.messages.length < this.state.messages.length) {
      const list = this.listRef.current;
      let res = null;
      if (list) {
        {
          res = list ? list.scrollHeight - list.scrollTop : null;
          console.log('list.scrollHeight', list.scrollHeight)
          // console.log('res', res)
          console.log('list.scrollTop', list.scrollTop)
        }

        return res
      }
    }
    return null;
  }

  componentDidUpdate(prevProps: {}, prevState: ScrollListState, snapshot: number | null) {
    // 如果有快照值，说明添加了新消息，需要调整滚动位置
      if (snapshot !== null) {
        const list = this.listRef.current;
        if (list) {
          list.scrollTop = list.scrollHeight - snapshot;
        }
      }
    }

    render() {
      return (
        <>
          <button onClick={() => this.setState({ messages: [...this.state.messages, `Message ${this.state.messages.length + 1}`] })}>添加消息</button>
          <div style={{ padding: '20px' }}>
            <h2>Scroll List with getSnapshotBeforeUpdate</h2>
            <div
              id='list'
              ref={this.listRef}
              style={{
                height: '200px',
                overflowY: 'auto',
                border: '1px solid #ccc',
                padding: '10px'
              }}
            >
              {this.state.messages.map((message, index) => (
                <div
                  key={index}
                  style={{
                    padding: '10px',
                    margin: '5px 0',
                    backgroundColor: '#f0f0f0',
                    borderRadius: '4px'
                  }}
                >
                  {message}
                </div>
              ))}
            </div>
          </div>
        </>
      );
    }
  }

export default ScrollList; 