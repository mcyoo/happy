import React from "react";
import SwipeableBottomSheet from "react-swipeable-bottom-sheet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import macgu from './assets/img/macgu.gif'
import happy from './assets/img/happy.gif'

class App extends React.Component {
  state = {
    open: false,
  };

  toggleBottomSheet() {
    this.openBottomSheet(!this.state.open);
  }
  openBottomSheet(open) {
    this.setState({ open });
  }

  componentDidMount() {}

  render() {
    const { open, code } = this.state;
    return (
      <div className="">
          <img className="h-screen w-screen" src={happy} alt="loading..." />
        <div>
          <SwipeableBottomSheet
            overflowHeight={46}
            shadowTip={false}
            topShadow={true}
            open={open}
            onChange={this.openBottomSheet.bind(this)}
            fullScreen
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
            <div className="text-gray-600">
              <p className="break-words text-lg font-semibold text-center mt-64">
               우오아ㅏ아ㅏㅏㅏ아ㅏㅏ아ㅏ아ㅏ아ㅏㅏㅏㅏ
              </p>
            </div>
          </SwipeableBottomSheet>
        </div>
      </div>
    );
  }
}
export default App;
