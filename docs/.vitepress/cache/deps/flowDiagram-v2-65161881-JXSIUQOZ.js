import {
  flowRendererV2,
  flowStyles
} from "./chunk-H4WH6RUZ.js";
import "./chunk-PLIGWGU7.js";
import {
  flowDb,
  parser$1
} from "./chunk-FU3VEHSG.js";
import "./chunk-FVGA36M3.js";
import "./chunk-DNSISDBO.js";
import "./chunk-4E57LY6E.js";
import "./chunk-FB5DLRDY.js";
import "./chunk-ENWUTKDX.js";
import "./chunk-INMXQVBL.js";
import "./chunk-QEODTIMM.js";
import {
  setConfig
} from "./chunk-T7U6YKVC.js";
import "./chunk-UXIASGQL.js";

// node_modules/.pnpm/mermaid@10.3.0/node_modules/mermaid/dist/flowDiagram-v2-65161881.js
var diagram = {
  parser: parser$1,
  db: flowDb,
  renderer: flowRendererV2,
  styles: flowStyles,
  init: (cnf) => {
    if (!cnf.flowchart) {
      cnf.flowchart = {};
    }
    cnf.flowchart.arrowMarkerAbsolute = cnf.arrowMarkerAbsolute;
    setConfig({ flowchart: { arrowMarkerAbsolute: cnf.arrowMarkerAbsolute } });
    flowRendererV2.setConf(cnf.flowchart);
    flowDb.clear();
    flowDb.setGen("gen-2");
  }
};
export {
  diagram
};
//# sourceMappingURL=flowDiagram-v2-65161881-JXSIUQOZ.js.map
