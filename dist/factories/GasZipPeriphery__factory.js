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
exports.GasZipPeriphery__factory = void 0;
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
            {
                name: "_liFiDEXAggregator",
                type: "address",
                internalType: "address",
            },
        ],
        stateMutability: "nonpayable",
    },
    {
        type: "receive",
        stateMutability: "payable",
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
                name: "_gasZipData",
                type: "tuple",
                internalType: "struct IGasZip.GasZipData",
                components: [
                    {
                        name: "destinationChains",
                        type: "uint256",
                        internalType: "uint256",
                    },
                ],
            },
            {
                name: "_receiver",
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
                name: "_gasZipData",
                type: "tuple",
                internalType: "struct IGasZip.GasZipData",
                components: [
                    {
                        name: "destinationChains",
                        type: "uint256",
                        internalType: "uint256",
                    },
                ],
            },
            {
                name: "_receiver",
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
        type: "function",
        name: "getDestinationChainsValue",
        inputs: [
            {
                name: "_chainIds",
                type: "uint8[]",
                internalType: "uint8[]",
            },
        ],
        outputs: [
            {
                name: "destinationChains",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        stateMutability: "pure",
    },
    {
        type: "function",
        name: "liFiDEXAggregator",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "address",
                internalType: "address",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "event",
        name: "LiFiGenericSwapCompleted",
        inputs: [
            {
                name: "transactionId",
                type: "bytes32",
                indexed: true,
                internalType: "bytes32",
            },
            {
                name: "integrator",
                type: "string",
                indexed: false,
                internalType: "string",
            },
            {
                name: "referrer",
                type: "string",
                indexed: false,
                internalType: "string",
            },
            {
                name: "receiver",
                type: "address",
                indexed: false,
                internalType: "address",
            },
            {
                name: "fromAssetId",
                type: "address",
                indexed: false,
                internalType: "address",
            },
            {
                name: "toAssetId",
                type: "address",
                indexed: false,
                internalType: "address",
            },
            {
                name: "fromAmount",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
            {
                name: "toAmount",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "LiFiSwappedGeneric",
        inputs: [
            {
                name: "transactionId",
                type: "bytes32",
                indexed: true,
                internalType: "bytes32",
            },
            {
                name: "integrator",
                type: "string",
                indexed: false,
                internalType: "string",
            },
            {
                name: "referrer",
                type: "string",
                indexed: false,
                internalType: "string",
            },
            {
                name: "fromAssetId",
                type: "address",
                indexed: false,
                internalType: "address",
            },
            {
                name: "toAssetId",
                type: "address",
                indexed: false,
                internalType: "address",
            },
            {
                name: "fromAmount",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
            {
                name: "toAmount",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "LiFiTransferCompleted",
        inputs: [
            {
                name: "transactionId",
                type: "bytes32",
                indexed: true,
                internalType: "bytes32",
            },
            {
                name: "receivingAssetId",
                type: "address",
                indexed: false,
                internalType: "address",
            },
            {
                name: "receiver",
                type: "address",
                indexed: false,
                internalType: "address",
            },
            {
                name: "amount",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
            {
                name: "timestamp",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "LiFiTransferRecovered",
        inputs: [
            {
                name: "transactionId",
                type: "bytes32",
                indexed: true,
                internalType: "bytes32",
            },
            {
                name: "receivingAssetId",
                type: "address",
                indexed: false,
                internalType: "address",
            },
            {
                name: "receiver",
                type: "address",
                indexed: false,
                internalType: "address",
            },
            {
                name: "amount",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
            {
                name: "timestamp",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "LiFiTransferStarted",
        inputs: [
            {
                name: "bridgeData",
                type: "tuple",
                indexed: false,
                internalType: "struct ILiFi.BridgeData",
                components: [
                    {
                        name: "transactionId",
                        type: "bytes32",
                        internalType: "bytes32",
                    },
                    {
                        name: "bridge",
                        type: "string",
                        internalType: "string",
                    },
                    {
                        name: "integrator",
                        type: "string",
                        internalType: "string",
                    },
                    {
                        name: "referrer",
                        type: "address",
                        internalType: "address",
                    },
                    {
                        name: "sendingAssetId",
                        type: "address",
                        internalType: "address",
                    },
                    {
                        name: "receiver",
                        type: "address",
                        internalType: "address",
                    },
                    {
                        name: "minAmount",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "destinationChainId",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "hasSourceSwaps",
                        type: "bool",
                        internalType: "bool",
                    },
                    {
                        name: "hasDestinationCall",
                        type: "bool",
                        internalType: "bool",
                    },
                ],
            },
        ],
        anonymous: false,
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
        name: "InvalidAmount",
        inputs: [],
    },
    {
        type: "error",
        name: "NoTransferToNullAddress",
        inputs: [],
    },
    {
        type: "error",
        name: "NullAddrIsNotAValidSpender",
        inputs: [],
    },
    {
        type: "error",
        name: "NullAddrIsNotAnERC20Token",
        inputs: [],
    },
    {
        type: "error",
        name: "ReentrancyError",
        inputs: [],
    },
];
var _bytecode = "0x60c060405234801561001057600080fd5b5060405161140b38038061140b83398101604081905261002f91610062565b6001600160a01b039182166080521660a052610095565b80516001600160a01b038116811461005d57600080fd5b919050565b6000806040838503121561007557600080fd5b61007e83610046565b915061008c60208401610046565b90509250929050565b60805160a05161133d6100ce6000396000818160af0152818161024e01526102ad01526000818161013d0152610432015261133d6000f3fe60806040526004361061005e5760003560e01c80638afbe557116100435780638afbe557146100f6578063b8b86f0614610118578063ba956b9a1461012b57600080fd5b806346fd98e21461006a5780638672976d1461009d57600080fd5b3661006557005b600080fd5b34801561007657600080fd5b5061008a610085366004610f3d565b61015f565b6040519081526020015b60405180910390f35b3480156100a957600080fd5b506100d17f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610094565b34801561010257600080fd5b50610116610111366004611056565b61021c565b005b6101166101263660046110ba565b6103e6565b34801561013757600080fd5b506100d17f000000000000000000000000000000000000000000000000000000000000000081565b60006020825111156101d2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f546f6f206d616e7920636861696e20494473000000000000000000000000000060448201526064015b60405180910390fd5b60005b8251811015610216578281815181106101f0576101f06110ee565b602002602001015160ff16600883901b179150808061020e9061114c565b9150506101d5565b50919050565b61023961022f6060850160408601611184565b8460800135610494565b61029361024c6060850160408601611184565b7f00000000000000000000000000000000000000000000000000000000000000007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61060f565b60008073ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000166102da60a08701876111a6565b6040516102e8929190611212565b6000604051808303816000865af19150503d8060008114610325576040519150601f19603f3d011682016040523d82523d6000602084013e61032a565b606091505b50915091508161033d5761033d81610752565b6000818060200190518101906103539190611222565b6040517fb8b86f060000000000000000000000000000000000000000000000000000000081528635600482015273ffffffffffffffffffffffffffffffffffffffff86166024820152909150309063b8b86f069083906044016000604051808303818588803b1580156103c557600080fd5b505af11580156103d9573d6000803e3d6000fd5b5050505050505050505050565b6040517f6e553f650000000000000000000000000000000000000000000000000000000081528235600482015273ffffffffffffffffffffffffffffffffffffffff82811660248301527f00000000000000000000000000000000000000000000000000000000000000001690636e553f659034906044016000604051808303818588803b15801561047757600080fd5b505af115801561048b573d6000803e3d6000fd5b50505050505050565b806000036104ce576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166105275780341015610523576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa158015610594573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105b89190611222565b9050818110156105fe576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044016101c9565b61060a8333308561075c565b505050565b73ffffffffffffffffffffffffffffffffffffffff831661062f57505050565b73ffffffffffffffffffffffffffffffffffffffff821661067c576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa1580156106f1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107159190611222565b101561060a5761072783836000610976565b61060a83837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff610976565b8051602082018181fd5b73ffffffffffffffffffffffffffffffffffffffff84166107a9576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166107f6576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015610867573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061088b9190611222565b905061089982868686610b76565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015610909573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061092d9190611222565b610937919061123b565b1461096e576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b801580610a1657506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa1580156109f0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a149190611222565b155b610aa2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e63650000000000000000000060648201526084016101c9565b60405173ffffffffffffffffffffffffffffffffffffffff831660248201526044810182905261060a9084907f095ea7b300000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152610bda565b60405173ffffffffffffffffffffffffffffffffffffffff80851660248301528316604482015260648101829052610bd49085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401610af4565b50505050565b6000610c3c826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16610ce99092919063ffffffff16565b9050805160001480610c5d575080806020019051810190610c5d9190611254565b61060a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084016101c9565b6060610cf88484600085610d00565b949350505050565b606082471015610d92576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c000000000000000000000000000000000000000000000000000060648201526084016101c9565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051610dbb919061129a565b60006040518083038185875af1925050503d8060008114610df8576040519150601f19603f3d011682016040523d82523d6000602084013e610dfd565b606091505b5091509150610e0e87838387610e19565b979650505050505050565b60608315610eaf578251600003610ea85773ffffffffffffffffffffffffffffffffffffffff85163b610ea8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016101c9565b5081610cf8565b610cf88383815115610ec45781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101c991906112b6565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b803560ff81168114610f3857600080fd5b919050565b60006020808385031215610f5057600080fd5b823567ffffffffffffffff80821115610f6857600080fd5b818501915085601f830112610f7c57600080fd5b813581811115610f8e57610f8e610ef8565b8060051b6040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0603f83011681018181108582111715610fd157610fd1610ef8565b604052918252848201925083810185019188831115610fef57600080fd5b938501935b828510156110145761100585610f27565b84529385019392850192610ff4565b98975050505050505050565b60006020828403121561021657600080fd5b803573ffffffffffffffffffffffffffffffffffffffff81168114610f3857600080fd5b60008060006060848603121561106b57600080fd5b833567ffffffffffffffff81111561108257600080fd5b840160e0818703121561109457600080fd5b92506110a38560208601611020565b91506110b160408501611032565b90509250925092565b600080604083850312156110cd57600080fd5b6110d78484611020565b91506110e560208401611032565b90509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361117d5761117d61111d565b5060010190565b60006020828403121561119657600080fd5b61119f82611032565b9392505050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126111db57600080fd5b83018035915067ffffffffffffffff8211156111f657600080fd5b60200191503681900382131561120b57600080fd5b9250929050565b8183823760009101908152919050565b60006020828403121561123457600080fd5b5051919050565b8181038181111561124e5761124e61111d565b92915050565b60006020828403121561126657600080fd5b8151801515811461119f57600080fd5b60005b83811015611291578181015183820152602001611279565b50506000910152565b600082516112ac818460208701611276565b9190910192915050565b60208152600082518060208401526112d5816040850160208701611276565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016919091016040019291505056fea2646970667358221220785b6e2b9eeb7fa75120c2dd299e634cf95e4d9393914d3f22eb66ed2da0744564736f6c63430008110033";
var isSuperArgs = function (xs) { return xs.length > 1; };
var GasZipPeriphery__factory = /** @class */ (function (_super) {
    __extends(GasZipPeriphery__factory, _super);
    function GasZipPeriphery__factory() {
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
    GasZipPeriphery__factory.prototype.deploy = function (_gasZipRouter, _liFiDEXAggregator, overrides) {
        return _super.prototype.deploy.call(this, _gasZipRouter, _liFiDEXAggregator, overrides || {});
    };
    GasZipPeriphery__factory.prototype.getDeployTransaction = function (_gasZipRouter, _liFiDEXAggregator, overrides) {
        return _super.prototype.getDeployTransaction.call(this, _gasZipRouter, _liFiDEXAggregator, overrides || {});
    };
    GasZipPeriphery__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    GasZipPeriphery__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    GasZipPeriphery__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    GasZipPeriphery__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    GasZipPeriphery__factory.bytecode = _bytecode;
    GasZipPeriphery__factory.abi = _abi;
    return GasZipPeriphery__factory;
}(ethers_1.ContractFactory));
exports.GasZipPeriphery__factory = GasZipPeriphery__factory;
