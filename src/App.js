import React from "react";
import SwipeableBottomSheet from "react-swipeable-bottom-sheet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";

class App extends React.Component {
  state = {
    message: [],
    open: false,
    intervalID: 0,
  };

  toggleBottomSheet() {
    this.openBottomSheet(!this.state.open);
  }
  openBottomSheet(open) {
    this.setState({ open, message: [] });
    clearInterval(this.state.intervalID);
    this.setIntervel_func("희망");
  }

  setIntervel_func(word) {
    const timeoutID = setTimeout(() => {
      const intervalID = setInterval(() => {
        var message = this.state.message;
        message.push(word);
        this.setState({ message, intervalID });
      }, 1000);
    }, 1000);
  }

  componentDidMount() {
    this.setIntervel_func("불안");
  }

  render() {
    const { message, open } = this.state;
    return (
      <div className="container mx-auto">
        {message[0] === "희망" ? (
          <div className="text-right mr-24 text-lg text-blue-700">
            {message.map((message) => (
              <div>{message}</div>
            ))}
          </div>
        ) : (
          <div className="ml-24 text-lg">
            {message.map((message) => (
              <div>{message}</div>
            ))}
          </div>
        )}
        <SwipeableBottomSheet
          overflowHeight={46}
          shadowTip={false}
          topShadow={false}
          open={open}
          onChange={this.openBottomSheet.bind(this)}
          bodyStyle={{}}
        >
          <div className="text-center">
            {open ? (
              <FontAwesomeIcon
                icon={faAngleDown}
                className="mt-1 text-3xl md:text-4xl opacity-50 mb-2"
                onClick={this.toggleBottomSheet.bind(this)}
              />
            ) : (
              <FontAwesomeIcon
                icon={faAngleUp}
                className="mt-1 text-3xl md:text-4xl opacity-50 mb-2"
                onClick={this.toggleBottomSheet.bind(this)}
              />
            )}
          </div>
          <div className="h-screen w-screen break-words p-10 text-gray-800 text-sm">
            누나는 초단위로 불안을 느꼈다고 했다. 같이 힘든 시기를 견뎠던
            동료들이 코로나 때문에 뿔뿔히 흩어졌다. 누나가 일해왔던 서비스직은
            더 이상 사람을 뽑지 않았다. 코로나로 인해 기쁨과 희망이 무너져
            내렸다. 과거 현재 미래는 초 단위로 오는 불안함으로 채워진다.
            이야기를 듣는 나는 어제의 나 와 마찬가지로 할 수 있는게 없었다. 감히
            공감 조차 할 수 없었다. 다만 절망의 늪에 빠져있지 말고, 밖에 좋은 곳
            있으니 우리 손잡고 같이 가보자 라는 기대를 심어주고 싶었다. 빛과
            어둠이 공존하듯, 슬픔,절망 도 기쁨과 희망이 같이 있는거라고, 한쪽에
            너무 빠져 있지말고 외면하고 당위로 다가오는 습관에 굴레에서 벗어나
            반대쪽도 있다고 나는 그저 말해주고 싶었다. 누나에게 이 작품을
            바친다.
          </div>
        </SwipeableBottomSheet>
      </div>
    );
  }
}
export default App;
