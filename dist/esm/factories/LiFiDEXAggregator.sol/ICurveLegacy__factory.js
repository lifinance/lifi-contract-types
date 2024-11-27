/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Contract, utils } from "ethers";
const _abi = [
    {
        type: "function",
        name: "exchange",
        inputs: [
            {
                name: "i",
                type: "int128",
                internalType: "int128",
            },
            {
                name: "j",
                type: "int128",
                internalType: "int128",
            },
            {
                name: "dx",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "min_dy",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        outputs: [],
        stateMutability: "payable",
    },
];
export class ICurveLegacy__factory {
    static createInterface() {
        return new utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new Contract(address, _abi, signerOrProvider);
    }
}
Object.defineProperty(ICurveLegacy__factory, "abi", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _abi
});
//# sourceMappingURL=ICurveLegacy__factory.js.map