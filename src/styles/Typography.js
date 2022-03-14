import { createGlobalStyle } from 'styled-components';
import blackFont from '../assets/fonts/TTNorms-Black.woff';
import blackItalicFont from '../assets/fonts/TTNorms-BlackItalic.woff';
import boldFont from '../assets/fonts/TTNorms-Bold.woff';
import extraBoldFont from '../assets/fonts/TTNorms-ExtraBold.woff';
import extraLightFont from '../assets/fonts/TTNorms-ExtraLight.woff';
import extraLightItalicFont from '../assets/fonts/TTNorms-ExtraLightItalic.woff';
import heavyFont from '../assets/fonts/TTNorms-Heavy.woff';
import lightFont from '../assets/fonts/TTNorms-Light.woff';
import mediumFont from '../assets/fonts/TTNorms-Medium.woff';
import regularFont from '../assets/fonts/TTNorms-Regular.woff';
import thinFont from '../assets/fonts/TTNorms-Thin.woff';



const Typography = createGlobalStyle`

    @font-face {
        font-family: lightFont;
        src: url(${lightFont});
    }
    @font-face {
        font-family: mediumFont;
        src: url(${mediumFont});
    }
    @font-face {
        font-family: regularFont;
        src: url(${regularFont});
    }
    @font-face {
        font-family: blackFont;
        src: url(${blackFont});
    }
    @font-face {
        font-family: blackItalicFont;
        src: url(${blackItalicFont});
    }
    @font-face {
        font-family: boldFont;
        src: url(${boldFont});
    }
    @font-face {
        font-family: extraBoldFont;
        src: url(${extraBoldFont});
    }
    @font-face {
        font-family: extraLightFont;
        src: url(${extraLightFont});
    }
    @font-face {
        font-family: extraLightItalicFont;
        src: url(${extraLightItalicFont});
    }
    @font-face {
        font-family: heavyFont;
        src: url(${heavyFont});
    }
    @font-face {
        font-family: thinFont;
        src: url(${thinFont});
    }

    html {
        font-family: regularFont;
    }
    
`;

export default Typography;
