import Core from '@wiris/mathtype-integration-js-dev/src/core.src.js';
import Parser from '@wiris/mathtype-integration-js-dev/src/parser.js';
import Util from '@wiris/mathtype-integration-js-dev/src/util.js';
import Image from '@wiris/mathtype-integration-js-dev/src/image.js';
import Configuration from '@wiris/mathtype-integration-js-dev/src/configuration.js';
import Listeners from '@wiris/mathtype-integration-js-dev/src/listeners';
import IntegrationModel from '@wiris/mathtype-integration-js-dev/src/integrationmodel.js';
import { TinyMceIntegration, currentInstance, instances } from './editor_plugin.src.js';
import Latex from '@wiris/mathtype-integration-js-dev/src/latex';
import backwardsLib from '@wiris/mathtype-integration-js-dev/src/backwardslib';
import Test from '@wiris/mathtype-integration-js-dev/src/test';

// Expose WirisPlugin variable to the window.
window.WirisPlugin = {
    Core: Core,
    Parser: Parser,
    Image: Image,
    Util: Util,
    Configuration: Configuration,
    Listeners: Listeners,
    IntegrationModel: IntegrationModel,
    currentInstance: currentInstance,
    instances: instances,
    TinyMceIntegration: TinyMceIntegration,
    Latex: Latex,
    Test : Test
}