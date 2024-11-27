"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SquidFacet__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        type: "constructor",
        inputs: [
            {
                name: "_squidRouter",
                type: "address",
                internalType: "contract ISquidRouter",
            },
        ],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "startBridgeTokensViaSquid",
        inputs: [
            {
                name: "_bridgeData",
                type: "tuple",
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
            {
                name: "_squidData",
                type: "tuple",
                internalType: "struct SquidFacet.SquidData",
                components: [
                    {
                        name: "routeType",
                        type: "uint8",
                        internalType: "enum SquidFacet.RouteType",
                    },
                    {
                        name: "destinationChain",
                        type: "string",
                        internalType: "string",
                    },
                    {
                        name: "destinationAddress",
                        type: "string",
                        internalType: "string",
                    },
                    {
                        name: "bridgedTokenSymbol",
                        type: "string",
                        internalType: "string",
                    },
                    {
                        name: "depositAssetId",
                        type: "address",
                        internalType: "address",
                    },
                    {
                        name: "sourceCalls",
                        type: "tuple[]",
                        internalType: "struct ISquidMulticall.Call[]",
                        components: [
                            {
                                name: "callType",
                                type: "uint8",
                                internalType: "enum ISquidMulticall.CallType",
                            },
                            {
                                name: "target",
                                type: "address",
                                internalType: "address",
                            },
                            {
                                name: "value",
                                type: "uint256",
                                internalType: "uint256",
                            },
                            {
                                name: "callData",
                                type: "bytes",
                                internalType: "bytes",
                            },
                            {
                                name: "payload",
                                type: "bytes",
                                internalType: "bytes",
                            },
                        ],
                    },
                    {
                        name: "payload",
                        type: "bytes",
                        internalType: "bytes",
                    },
                    {
                        name: "fee",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "enableExpress",
                        type: "bool",
                        internalType: "bool",
                    },
                ],
            },
        ],
        outputs: [],
        stateMutability: "payable",
    },
    {
        type: "function",
        name: "swapAndStartBridgeTokensViaSquid",
        inputs: [
            {
                name: "_bridgeData",
                type: "tuple",
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
            {
                name: "_swapData",
                type: "tuple[]",
                internalType: "struct LibSwap.SwapData[]",
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
                name: "_squidData",
                type: "tuple",
                internalType: "struct SquidFacet.SquidData",
                components: [
                    {
                        name: "routeType",
                        type: "uint8",
                        internalType: "enum SquidFacet.RouteType",
                    },
                    {
                        name: "destinationChain",
                        type: "string",
                        internalType: "string",
                    },
                    {
                        name: "destinationAddress",
                        type: "string",
                        internalType: "string",
                    },
                    {
                        name: "bridgedTokenSymbol",
                        type: "string",
                        internalType: "string",
                    },
                    {
                        name: "depositAssetId",
                        type: "address",
                        internalType: "address",
                    },
                    {
                        name: "sourceCalls",
                        type: "tuple[]",
                        internalType: "struct ISquidMulticall.Call[]",
                        components: [
                            {
                                name: "callType",
                                type: "uint8",
                                internalType: "enum ISquidMulticall.CallType",
                            },
                            {
                                name: "target",
                                type: "address",
                                internalType: "address",
                            },
                            {
                                name: "value",
                                type: "uint256",
                                internalType: "uint256",
                            },
                            {
                                name: "callData",
                                type: "bytes",
                                internalType: "bytes",
                            },
                            {
                                name: "payload",
                                type: "bytes",
                                internalType: "bytes",
                            },
                        ],
                    },
                    {
                        name: "payload",
                        type: "bytes",
                        internalType: "bytes",
                    },
                    {
                        name: "fee",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "enableExpress",
                        type: "bool",
                        internalType: "bool",
                    },
                ],
            },
        ],
        outputs: [],
        stateMutability: "payable",
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
        name: "CannotBridgeToSameNetwork",
        inputs: [],
    },
    {
        type: "error",
        name: "ContractCallNotAllowed",
        inputs: [],
    },
    {
        type: "error",
        name: "CumulativeSlippageTooHigh",
        inputs: [
            {
                name: "minAmount",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "receivedAmount",
                type: "uint256",
                internalType: "uint256",
            },
        ],
    },
    {
        type: "error",
        name: "InformationMismatch",
        inputs: [],
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
        name: "InvalidContract",
        inputs: [],
    },
    {
        type: "error",
        name: "InvalidReceiver",
        inputs: [],
    },
    {
        type: "error",
        name: "InvalidRouteType",
        inputs: [],
    },
    {
        type: "error",
        name: "NativeAssetTransferFailed",
        inputs: [],
    },
    {
        type: "error",
        name: "NoSwapDataProvided",
        inputs: [],
    },
    {
        type: "error",
        name: "NoSwapFromZeroBalance",
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
const _bytecode = "0x60a06040523480156200001157600080fd5b506040516200317e3803806200317e833981016040819052620000349162000046565b6001600160a01b031660805262000078565b6000602082840312156200005957600080fd5b81516001600160a01b03811681146200007157600080fd5b9392505050565b6080516130d5620000a96000396000818161062101528181610d2501528181610d910152610e8e01526130d56000f3fe6080604052600436106100295760003560e01c80633f3138081461002e578063a8f6666614610043575b600080fd5b61004161003c36600461261c565b610056565b005b610041610051366004612680565b61024b565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100d1576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006100e2344761276e565b90508480610100015115610122576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b856101458160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561017c576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036101ba576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036101f7576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61021461020a60a0880160808901612781565b8860c0015161043e565b61021e87876105be565b504790508181111561023f5761023f60008461023a858561276e565b61074b565b50506000909155505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016102c6576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006102d7344761276e565b905086806101000151610316576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b876103398160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610370576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036103ae576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036103eb576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61040589600001518a60c001518a8a338b60e0013561077c565b60c08a015261041489876105be565b50479050818111156104305761043060008461023a858561276e565b505060009091555050505050565b80600003610478576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166104d157803410156104cd576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa15801561053e573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061056291906127a3565b9050818110156105ad576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044015b60405180910390fd5b6105b983333085610917565b505050565b60006040518060600160405280848152602001836105db9061291a565b81526020016105ea8585610b31565b905260208101516080015190915073ffffffffffffffffffffffffffffffffffffffff161561064e5761064e8160200151608001517f0000000000000000000000000000000000000000000000000000000000000000836000015160c00151610b74565b600061065d6020840184612a5a565b600281111561066e5761066e612a2b565b036106815761067c81610cb7565b61070f565b60016106906020840184612a5a565b60028111156106a1576106a1612a2b565b036106af5761067c81610d8f565b60026106be6020840184612a5a565b60028111156106cf576106cf612a2b565b036106dd5761067c81610e8c565b6040517f9c59c20c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f18360405161073e9190612ae3565b60405180910390a1505050565b73ffffffffffffffffffffffffffffffffffffffff831615610772576105b9838383610f91565b6105b98282611113565b6000838082036107b8576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600086866107c760018561276e565b8181106107d6576107d6612bf6565b90506020028101906107e89190612c25565b6107f9906080810190606001612781565b905060006108068261123d565b905073ffffffffffffffffffffffffffffffffffffffff82166108305761082d348261276e565b90505b600061083c89896112f5565b90506108488989611401565b604080516060810182528c815273ffffffffffffffffffffffffffffffffffffffff89166020820152908101879052610883818b8b8561146e565b60008361088f8661123d565b610899919061276e565b905073ffffffffffffffffffffffffffffffffffffffff85166108c3576108c0888261276e565b90505b8b811015610907576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018d9052602481018290526044016105a4565b9c9b505050505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8416610964576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166109b1576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015610a22573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a4691906127a3565b9050610a548286868661185f565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015610ac4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ae891906127a3565b610af2919061276e565b14610b29576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b608082015160009060e08301359073ffffffffffffffffffffffffffffffffffffffff16610b6b5760c0840151610b689082612c63565b90505b90505b92915050565b73ffffffffffffffffffffffffffffffffffffffff8316610b9457505050565b73ffffffffffffffffffffffffffffffffffffffff8216610be1576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa158015610c56573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c7a91906127a3565b10156105b957610c8c8383600061193b565b6105b983837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61193b565b6040808201516020808401516060810151855160c08082015194840151848801519185015160a0909301516101009095015197517f2147796000000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169863214779609897610d6297909593949392909190600401612c76565b6000604051808303818588803b158015610d7b57600080fd5b505af1158015610b29573d6000803e3d6000fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166352c41eb68260400151610df684602001516080015173ffffffffffffffffffffffffffffffffffffffff161590565b610e0857836020015160800151610e1e565b73eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee5b846000015160c00151856020015160a00151866020015160600151876020015160200151610e6b896000015160a0015173ffffffffffffffffffffffffffffffffffffffff166014611abd565b6040518863ffffffff1660e01b8152600401610d6296959493929190612de5565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663846a1bc68260400151610ef384602001516080015173ffffffffffffffffffffffffffffffffffffffff161590565b610f0557836020015160800151610f1b565b73eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee5b845160c08082015160208089015160a0808201516060830151938301516040808501519785015193909801516101009094015197517fffffffff0000000000000000000000000000000000000000000000000000000060e08d901b168152610d6299989697929691949293929190600401612e61565b73ffffffffffffffffffffffffffffffffffffffff8316610fde576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661102b576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015611098573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110bc91906127a3565b905080821115611102576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044016105a4565b61110d848484611d00565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8216611160576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b478111156111a3576040517fcf479181000000000000000000000000000000000000000000000000000000008152600481018290524760248201526044016105a4565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d80600081146111fd576040519150601f19603f3d011682016040523d82523d6000602084013e611202565b606091505b50509050806105b9576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff8216156112ee576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa1580156112c5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112e991906127a3565b610b6e565b4792915050565b60608160008167ffffffffffffffff8111156113135761131361235c565b60405190808252806020026020018201604052801561133c578160200160208202803683370190505b5090506000805b838110156113f65786868281811061135d5761135d612bf6565b905060200281019061136f9190612c25565b611380906080810190606001612781565b915061138b8261123d565b83828151811061139d5761139d612bf6565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff82166113ee57348382815181106113d6576113d6612bf6565b602002602001018181516113ea919061276e565b9052505b600101611343565b509095945050505050565b60005b818110156105b9573683838381811061141f5761141f612bf6565b90506020028101906114319190612c25565b905061144360e0820160c08301612f06565b156114655761146561145b6060830160408401612781565b826080013561043e565b50600101611404565b602084015160408501518491849184908360018114611778576000868661149660018561276e565b8181106114a5576114a5612bf6565b90506020028101906114b79190612c25565b6114c8906080810190606001612781565b9050600089815b8181101561167557368d8d838181106114ea576114ea612bf6565b90506020028101906114fc9190612c25565b905061152b6115116060830160408401612781565b73ffffffffffffffffffffffffffffffffffffffff161590565b8061158e575061158e6115446040830160208401612781565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b80156115a557506115a56115446020830183612781565b801561162a575061162a6115bc60a0830183612f23565b6115cb91600491600091612f8f565b6115d491612fb9565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b611660576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8e5161166c9082611d56565b506001016114cf565b505060005b61168560018561276e565b8110156117705760008989838181106116a0576116a0612bf6565b90506020028101906116b29190612c25565b6116c3906080810190606001612781565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146117675786828151811061170a5761170a612bf6565b602002602001015161171b8261123d565b611725919061276e565b9250600073ffffffffffffffffffffffffffffffffffffffff82161561174c57600061174e565b865b9050831561176557611765828a61023a848861276e565b505b5060010161167a565b505050611853565b8760005b8181101561185057368b8b8381811061179757611797612bf6565b90506020028101906117a99190612c25565b90506117be6115116060830160408401612781565b806117d757506117d76115446040830160208401612781565b80156117ee57506117ee6115446020830183612781565b801561180557506118056115bc60a0830183612f23565b61183b576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8c516118479082611d56565b5060010161177c565b50505b50505050505050505050565b60405173ffffffffffffffffffffffffffffffffffffffff8085166024830152831660448201526064810182905261110d9085907f23b872dd00000000000000000000000000000000000000000000000000000000906084015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152612034565b8015806119db57506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa1580156119b5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119d991906127a3565b155b611a67576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e63650000000000000000000060648201526084016105a4565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526105b99084907f095ea7b300000000000000000000000000000000000000000000000000000000906064016118b9565b60606000611acc836002613001565b611ad7906002612c63565b67ffffffffffffffff811115611aef57611aef61235c565b6040519080825280601f01601f191660200182016040528015611b19576020820181803683370190505b5090507f300000000000000000000000000000000000000000000000000000000000000081600081518110611b5057611b50612bf6565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053507f780000000000000000000000000000000000000000000000000000000000000081600181518110611bb357611bb3612bf6565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053506000611bef846002613001565b611bfa906001612c63565b90505b6001811115611c97577f303132333435363738396162636465660000000000000000000000000000000085600f1660108110611c3b57611c3b612bf6565b1a60f81b828281518110611c5157611c51612bf6565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535060049490941c93611c9081613018565b9050611bfd565b508315610b6b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e7460448201526064016105a4565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526105b99084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064016118b9565b611d6c611d666020830183612781565b3b151590565b611da2576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101356000819003611de2576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000611df76115116060850160408601612781565b611e02576000611e08565b82608001355b90506000611e24611e1f6060860160408701612781565b61123d565b90506000611e3b611e1f6080870160608801612781565b905082600003611e7257611e72611e586060870160408801612781565b611e686040880160208901612781565b8760800135610b74565b8460800135821015611ebd576040517fcf47918100000000000000000000000000000000000000000000000000000000815260808601356004820152602481018390526044016105a4565b600080611ecd6020880188612781565b73ffffffffffffffffffffffffffffffffffffffff1685611ef160a08a018a612f23565b604051611eff92919061304d565b60006040518083038185875af1925050503d8060008114611f3c576040519150601f19603f3d011682016040523d82523d6000602084013e611f41565b606091505b509150915081611f5457611f5481612143565b6000611f69611e1f60808a0160608b01612781565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b3889611f9a60208b018b612781565b611faa60608c0160408d01612781565b611fba60808d0160608e01612781565b8c60800135898711611fcc5786611fd6565b611fd68a8861276e565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b6000612096826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff1661214d9092919063ffffffff16565b90508051600014806120b75750808060200190518101906120b7919061305d565b6105b9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084016105a4565b8051602082018181fd5b606061215c8484600085612164565b949350505050565b6060824710156121f6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c000000000000000000000000000000000000000000000000000060648201526084016105a4565b6000808673ffffffffffffffffffffffffffffffffffffffff16858760405161221f919061307a565b60006040518083038185875af1925050503d806000811461225c576040519150601f19603f3d011682016040523d82523d6000602084013e612261565b606091505b50915091506122728783838761227d565b979650505050505050565b6060831561231357825160000361230c5773ffffffffffffffffffffffffffffffffffffffff85163b61230c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016105a4565b508161215c565b61215c83838151156123285781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105a4919061308c565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff811182821017156123af576123af61235c565b60405290565b60405160a0810167ffffffffffffffff811182821017156123af576123af61235c565b604051610120810167ffffffffffffffff811182821017156123af576123af61235c565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff811182821017156124435761244361235c565b604052919050565b600082601f83011261245c57600080fd5b813567ffffffffffffffff8111156124765761247661235c565b6124a760207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116016123fc565b8181528460208386010111156124bc57600080fd5b816020850160208301376000918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff811681146124fd57600080fd5b919050565b801515811461251057600080fd5b50565b80356124fd81612502565b6000610140828403121561253157600080fd5b61253961238b565b905081358152602082013567ffffffffffffffff8082111561255a57600080fd5b6125668583860161244b565b6020840152604084013591508082111561257f57600080fd5b5061258c8482850161244b565b60408301525061259e606083016124d9565b60608201526125af608083016124d9565b60808201526125c060a083016124d9565b60a082015260c082013560c082015260e082013560e08201526101006125e7818401612513565b908201526101206125f9838201612513565b9082015292915050565b6000610120828403121561261657600080fd5b50919050565b6000806040838503121561262f57600080fd5b823567ffffffffffffffff8082111561264757600080fd5b6126538683870161251e565b9350602085013591508082111561266957600080fd5b5061267685828601612603565b9150509250929050565b6000806000806060858703121561269657600080fd5b843567ffffffffffffffff808211156126ae57600080fd5b6126ba8883890161251e565b955060208701359150808211156126d057600080fd5b818701915087601f8301126126e457600080fd5b8135818111156126f357600080fd5b8860208260051b850101111561270857600080fd5b60208301955080945050604087013591508082111561272657600080fd5b5061273387828801612603565b91505092959194509250565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b81810381811115610b6e57610b6e61273f565b60006020828403121561279357600080fd5b61279c826124d9565b9392505050565b6000602082840312156127b557600080fd5b5051919050565b8035600381106124fd57600080fd5b600082601f8301126127dc57600080fd5b8135602067ffffffffffffffff808311156127f9576127f961235c565b8260051b6128088382016123fc565b938452858101830193838101908886111561282257600080fd5b84880192505b8583101561290e578235848111156128405760008081fd5b880160a0818b037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0018113156128765760008081fd5b61287e6123b5565b87830135600481106128905760008081fd5b8152604061289f8482016124d9565b89830152606080850135828401526080915081850135898111156128c35760008081fd5b6128d18f8c8389010161244b565b828501525050828401359250878311156128eb5760008081fd5b6128f98d8a8587010161244b565b90820152845250509184019190840190612828565b98975050505050505050565b6000610120823603121561292d57600080fd5b6129356123d8565b61293e836127bc565b8152602083013567ffffffffffffffff8082111561295b57600080fd5b6129673683870161244b565b6020840152604085013591508082111561298057600080fd5b61298c3683870161244b565b604084015260608501359150808211156129a557600080fd5b6129b13683870161244b565b60608401526129c2608086016124d9565b608084015260a08501359150808211156129db57600080fd5b6129e7368387016127cb565b60a084015260c0850135915080821115612a0057600080fd5b50612a0d3682860161244b565b60c08301525060e083013560e08201526101006125f9818501612513565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b600060208284031215612a6c57600080fd5b61279c826127bc565b60005b83811015612a90578181015183820152602001612a78565b50506000910152565b60008151808452612ab1816020860160208601612a75565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b602081528151602082015260006020830151610140806040850152612b0c610160850183612a99565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0858403016060860152612b478382612a99565b9250506060850151612b71608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e0850151610100818187015280870151915050610120612be48187018315159052565b90950151151593019290925250919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112612c5957600080fd5b9190910192915050565b80820180821115610b6e57610b6e61273f565b60e081526000612c8960e083018a612a99565b8860208401528281036040840152612ca18189612a99565b90508281036060840152612cb58188612a99565b90508281036080840152612cc98187612a99565b73ffffffffffffffffffffffffffffffffffffffff9590951660a0840152505090151560c09091015295945050505050565b600081518084526020808501808196508360051b810191508286016000805b86811015612dd7578385038a52825160a081516004808210612d62577f4e487b7100000000000000000000000000000000000000000000000000000000865260218152602486fd5b5087528188015173ffffffffffffffffffffffffffffffffffffffff168888015260408083015190880152606080830151818901839052612da5838a0182612a99565b9250505060808083015192508782038189015250612dc38183612a99565b9b88019b9650505091850191600101612d1a565b509298975050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8716815285602082015260c060408201526000612e1a60c0830187612cfb565b8281036060840152612e2c8187612a99565b90508281036080840152612e408186612a99565b905082810360a0840152612e548185612a99565b9998505050505050505050565b600061012073ffffffffffffffffffffffffffffffffffffffff808d1684528b6020850152816040850152612e988285018c612cfb565b91508382036060850152612eac828b612a99565b91508382036080850152612ec0828a612a99565b915083820360a0850152612ed48289612a99565b915083820360c0850152612ee88288612a99565b951660e0840152505090151561010090910152979650505050505050565b600060208284031215612f1857600080fd5b8135610b6b81612502565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112612f5857600080fd5b83018035915067ffffffffffffffff821115612f7357600080fd5b602001915036819003821315612f8857600080fd5b9250929050565b60008085851115612f9f57600080fd5b83861115612fac57600080fd5b5050820193919092039150565b7fffffffff000000000000000000000000000000000000000000000000000000008135818116916004851015612ff95780818660040360031b1b83161692505b505092915050565b8082028115828204841417610b6e57610b6e61273f565b6000816130275761302761273f565b507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0190565b8183823760009101908152919050565b60006020828403121561306f57600080fd5b8151610b6b81612502565b60008251612c59818460208701612a75565b60208152600061279c6020830184612a9956fea2646970667358221220ad965383016fa8913cff468b4f4017ad3e131db5d90cebd9ee5242c52904907f64736f6c63430008110033";
const isSuperArgs = (xs) => xs.length > 1;
class SquidFacet__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    deploy(_squidRouter, overrides) {
        return super.deploy(_squidRouter, overrides || {});
    }
    getDeployTransaction(_squidRouter, overrides) {
        return super.getDeployTransaction(_squidRouter, overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.SquidFacet__factory = SquidFacet__factory;
Object.defineProperty(SquidFacet__factory, "bytecode", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _bytecode
});
Object.defineProperty(SquidFacet__factory, "abi", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _abi
});
//# sourceMappingURL=SquidFacet__factory.js.map