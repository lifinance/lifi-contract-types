"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.GasZipFacet__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
var ethers_1 = require("ethers");
var _abi = [
    {
        type: "constructor",
        inputs: [
            {
                name: "_gasZipRouter",
                type: "address",
                internalType: "address",
            },
        ],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "depositToGasZipERC20",
        inputs: [
            {
                name: "_swapData",
                type: "tuple",
                internalType: "struct LibSwap.SwapData",
                components: [
                    {
                        name: "callTo",
                        type: "address",
                        internalType: "address",
                    },
                    {
                        name: "approveTo",
                        type: "address",
                        internalType: "address",
                    },
                    {
                        name: "sendingAssetId",
                        type: "address",
                        internalType: "address",
                    },
                    {
                        name: "receivingAssetId",
                        type: "address",
                        internalType: "address",
                    },
                    {
                        name: "fromAmount",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "callData",
                        type: "bytes",
                        internalType: "bytes",
                    },
                    {
                        name: "requiresDeposit",
                        type: "bool",
                        internalType: "bool",
                    },
                ],
            },
            {
                name: "_destinationChainId",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "_recipient",
                type: "address",
                internalType: "address",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "depositToGasZipNative",
        inputs: [
            {
                name: "_amountToZip",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "_destinationChainId",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "_recipient",
                type: "address",
                internalType: "address",
            },
        ],
        outputs: [],
        stateMutability: "payable",
    },
    {
        type: "function",
        name: "gasZipRouter",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "address",
                internalType: "contract IGasZip",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "error",
        name: "InsufficientBalance",
        inputs: [
            {
                name: "required",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "balance",
                type: "uint256",
                internalType: "uint256",
            },
        ],
    },
    {
        type: "error",
        name: "InvalidContract",
        inputs: [],
    },
    {
        type: "error",
        name: "NoSwapFromZeroBalance",
        inputs: [],
    },
    {
        type: "error",
        name: "NullAddrIsNotAValidSpender",
        inputs: [],
    },
];
var _bytecode = "0x60a060405234801561001057600080fd5b50604051610f76380380610f7683398101604081905261002f91610040565b6001600160a01b0316608052610070565b60006020828403121561005257600080fd5b81516001600160a01b038116811461006957600080fd5b9392505050565b608051610ede6100986000396000818160800152818161015a015261020a0152610ede6000f3fe6080604052600436106100345760003560e01c80633d86ea8714610039578063867372e41461005b578063ba956b9a1461006e575b600080fd5b34801561004557600080fd5b50610059610054366004610c7c565b6100cb565b005b610059610069366004610cd8565b6101be565b34801561007a57600080fd5b506100a27f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b610103333060808601356100e56060880160408901610d04565b73ffffffffffffffffffffffffffffffffffffffff1692919061023b565b61010e600084610298565b6040517f6e553f650000000000000000000000000000000000000000000000000000000081526004810183905273ffffffffffffffffffffffffffffffffffffffff82811660248301527f00000000000000000000000000000000000000000000000000000000000000001690636e553f659047906044015b6000604051808303818588803b1580156101a057600080fd5b505af11580156101b4573d6000803e3d6000fd5b5050505050505050565b6040517f6e553f650000000000000000000000000000000000000000000000000000000081526004810183905273ffffffffffffffffffffffffffffffffffffffff82811660248301527f00000000000000000000000000000000000000000000000000000000000000001690636e553f65908590604401610187565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c52602060006064601c6000895af13d15600160005114171661028a57637939f4246000526004601cfd5b600060605260405250505050565b6102ae6102a86020830183610d04565b3b151590565b6102e4576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101356000819003610324576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006103536103396060850160408601610d04565b73ffffffffffffffffffffffffffffffffffffffff161590565b61035e576000610364565b82608001355b9050600061038061037b6060860160408701610d04565b610595565b9050600061039761037b6080870160608801610d04565b9050826000036103ce576103ce6103b46060870160408801610d04565b6103c46040880160208901610d04565b876080013561064e565b846080013582101561041e576040517fcf47918100000000000000000000000000000000000000000000000000000000815260808601356004820152602481018390526044015b60405180910390fd5b60008061042e6020880188610d04565b73ffffffffffffffffffffffffffffffffffffffff168561045260a08a018a610d26565b604051610460929190610d92565b60006040518083038185875af1925050503d806000811461049d576040519150601f19603f3d011682016040523d82523d6000602084013e6104a2565b606091505b5091509150816104b5576104b581610796565b60006104ca61037b60808a0160608b01610d04565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b38896104fb60208b018b610d04565b61050b60608c0160408d01610d04565b61051b60808d0160608e01610d04565b8c6080013589871161052d5786610537565b6105378a88610da2565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b600073ffffffffffffffffffffffffffffffffffffffff821615610646576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa15801561061d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106419190610ddc565b610648565b475b92915050565b73ffffffffffffffffffffffffffffffffffffffff831661066e57505050565b73ffffffffffffffffffffffffffffffffffffffff82166106bb576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa158015610730573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107549190610ddc565b101561079157610766838360006107a0565b61079183837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6107a0565b505050565b8051602082018181fd5b80158061084057506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa15801561081a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061083e9190610ddc565b155b6108cc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e6365000000000000000000006064820152608401610415565b6040805173ffffffffffffffffffffffffffffffffffffffff848116602483015260448083018590528351808403909101815260649092018352602080830180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f095ea7b30000000000000000000000000000000000000000000000000000000017905283518085019094528084527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65649084015261079192869291600091610997918516908490610a44565b90508051600014806109b85750808060200190518101906109b89190610df5565b610791576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610415565b6060610a538484600085610a5b565b949350505050565b606082471015610aed576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610415565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051610b169190610e3b565b60006040518083038185875af1925050503d8060008114610b53576040519150601f19603f3d011682016040523d82523d6000602084013e610b58565b606091505b5091509150610b6987838387610b74565b979650505050505050565b60608315610c0a578251600003610c035773ffffffffffffffffffffffffffffffffffffffff85163b610c03576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610415565b5081610a53565b610a538383815115610c1f5781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104159190610e57565b803573ffffffffffffffffffffffffffffffffffffffff81168114610c7757600080fd5b919050565b600080600060608486031215610c9157600080fd5b833567ffffffffffffffff811115610ca857600080fd5b840160e08187031215610cba57600080fd5b925060208401359150610ccf60408501610c53565b90509250925092565b600080600060608486031215610ced57600080fd5b8335925060208401359150610ccf60408501610c53565b600060208284031215610d1657600080fd5b610d1f82610c53565b9392505050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112610d5b57600080fd5b83018035915067ffffffffffffffff821115610d7657600080fd5b602001915036819003821315610d8b57600080fd5b9250929050565b8183823760009101908152919050565b81810381811115610648577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600060208284031215610dee57600080fd5b5051919050565b600060208284031215610e0757600080fd5b81518015158114610d1f57600080fd5b60005b83811015610e32578181015183820152602001610e1a565b50506000910152565b60008251610e4d818460208701610e17565b9190910192915050565b6020815260008251806020840152610e76816040850160208701610e17565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016919091016040019291505056fea2646970667358221220fc5e92522d59e931d229f84bd4ed51e2a78ef08958fe156e32dba8ca82492b4664736f6c63430008110033";
var isSuperArgs = function (xs) { return xs.length > 1; };
var GasZipFacet__factory = /** @class */ (function (_super) {
    __extends(GasZipFacet__factory, _super);
    function GasZipFacet__factory() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _this = this;
        if (isSuperArgs(args)) {
            _this = _super.apply(this, args) || this;
        }
        else {
            _this = _super.call(this, _abi, _bytecode, args[0]) || this;
        }
        return _this;
    }
    GasZipFacet__factory.prototype.deploy = function (_gasZipRouter, overrides) {
        return _super.prototype.deploy.call(this, _gasZipRouter, overrides || {});
    };
    GasZipFacet__factory.prototype.getDeployTransaction = function (_gasZipRouter, overrides) {
        return _super.prototype.getDeployTransaction.call(this, _gasZipRouter, overrides || {});
    };
    GasZipFacet__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    GasZipFacet__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    GasZipFacet__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    GasZipFacet__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    GasZipFacet__factory.bytecode = _bytecode;
    GasZipFacet__factory.abi = _abi;
    return GasZipFacet__factory;
}(ethers_1.ContractFactory));
exports.GasZipFacet__factory = GasZipFacet__factory;
