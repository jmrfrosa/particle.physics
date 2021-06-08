import { attractor } from "./attractor.js";
import { repeller } from "./repeller.js";
export var Operation;
(function (Operation) {
    Operation["Attractor"] = "attractor";
    Operation["Repeller"] = "repeller";
})(Operation || (Operation = {}));
export class Rule {
    constructor(particle, operation) {
        this.particle = particle;
        this.operation = this.getOperation(operation);
    }
    getOperation(operation) {
        switch (operation) {
            case Operation.Attractor:
                return attractor;
            case Operation.Repeller:
                return repeller;
        }
    }
    execute(input) {
        this.operation(input, this.particle);
    }
}
//# sourceMappingURL=Rule.js.map