import * as constants from '../../../shared/constants';

class Messenger {
  static postWindowMessage(data) {
    try {
      window.postMessage(data, '*');
    } catch (err) {
      console.log(
        '%c metal-devtools extension:\n',
        'background: #222; color: #BADA55',
        err
      );
      console.log('%c Args:', 'background: #222; color: #BADA55', data);
    }
  }

  static informDetached(data) {
    this.postWindowMessage({
      from: constants.METAL_DEVTOOLS_BACKEND,
      message: {
        data,
        type: constants.DETACHED
      }
    });
  }

  static informMetalDetected() {
    this.postWindowMessage({
      from: constants.METAL_DEVTOOLS_BACKEND,
      message: {
        type: constants.METAL_DETECTED
      }
    });
  }

  static informNewRoot(data) {
    this.postWindowMessage({
      from: constants.METAL_DEVTOOLS_BACKEND,
      message: {
        data,
        type: constants.NEW_ROOT
      }
    });
  }

  static informRendered(data) {
    this.postWindowMessage({
      from: constants.METAL_DEVTOOLS_BACKEND,
      message: {
        data,
        type: constants.RENDERED
      }
    });
  }

  static informSelected(data) {
    this.postWindowMessage({
      from: constants.METAL_DEVTOOLS_BACKEND,
      message: {
        data,
        type: constants.SELECTED
      }
    });
  }

  static informUpdate(data) {
    this.postWindowMessage({
      from: constants.METAL_DEVTOOLS_BACKEND,
      message: {
        data,
        type: constants.UPDATE
      }
    });
  }
}

export default Messenger;
