"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ISymbiosisMetaRouter__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        type: "function",
        name: "metaRoute",
        inputs: [
            {
                name: "_metarouteTransaction",
                type: "tuple",
                internalType: "struct ISymbiosisMetaRouter.MetaRouteTransaction",
                components: [
                    {
                        name: "firstSwapCalldata",
                        type: "bytes",
                        internalType: "bytes",
                    },
                    {
                        name: "secondSwapCalldata",
                        type: "bytes",
                        internalType: "bytes",
                    },
                    {
                        name: "approvedTokens",
                        type: "address[]",
                        internalType: "address[]",
                    },
                    {
                        name: "firstDexRouter",
                        type: "address",
                        internalType: "address",
                    },
                    {
                        name: "secondDexRouter",
                        type: "address",
                        internalType: "address",
                    },
                    {
                        name: "amount",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "nativeIn",
                        type: "bool",
                        internalType: "bool",
                    },
                    {
                        name: "relayRecipient",
                        type: "address",
                        internalType: "address",
                    },
                    {
                        name: "otherSideCalldata",
                        type: "bytes",
                        internalType: "bytes",
                    },
                ],
            },
        ],
        outputs: [],
        stateMutability: "payable",
    },
];
class ISymbiosisMetaRouter__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.ISymbiosisMetaRouter__factory = ISymbiosisMetaRouter__factory;
Object.defineProperty(ISymbiosisMetaRouter__factory, "abi", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _abi
});
//# sourceMappingURL=ISymbiosisMetaRouter__factory.js.map