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
const _bytecode = "0x60a06040523480156200001157600080fd5b50604051620031a1380380620031a1833981016040819052620000349162000046565b6001600160a01b031660805262000078565b6000602082840312156200005957600080fd5b81516001600160a01b03811681146200007157600080fd5b9392505050565b6080516130f8620000a96000396000818161062101528181610d1901528181610d850152610e8201526130f86000f3fe6080604052600436106100295760003560e01c80633f3138081461002e578063a8f6666614610043575b600080fd5b61004161003c36600461263f565b610056565b005b6100416100513660046126a3565b61024b565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100d1576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006100e23447612791565b90508480610100015115610122576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b856101458160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561017c576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036101ba576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036101f7576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61021461020a60a08801608089016127a4565b8860c0015161043e565b61021e87876105be565b504790508181111561023f5761023f60008461023a8585612791565b61074b565b50506000909155505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016102c6576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006102d73447612791565b905086806101000151610316576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b876103398160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610370576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036103ae576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036103eb576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61040589600001518a60c001518a8a338b60e0013561077c565b60c08a015261041489876105be565b50479050818111156104305761043060008461023a8585612791565b505060009091555050505050565b80600003610478576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166104d157803410156104cd576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa15801561053e573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061056291906127c6565b9050818110156105ad576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044015b60405180910390fd5b6105b983333085610917565b505050565b60006040518060600160405280848152602001836105db9061293d565b81526020016105ea8585610b31565b905260208101516080015190915073ffffffffffffffffffffffffffffffffffffffff161561064e5761064e8160200151608001517f0000000000000000000000000000000000000000000000000000000000000000836000015160c00151610b74565b600061065d6020840184612a7d565b600281111561066e5761066e612a4e565b036106815761067c81610cab565b61070f565b60016106906020840184612a7d565b60028111156106a1576106a1612a4e565b036106af5761067c81610d83565b60026106be6020840184612a7d565b60028111156106cf576106cf612a4e565b036106dd5761067c81610e80565b6040517f9c59c20c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f18360405161073e9190612b06565b60405180910390a1505050565b73ffffffffffffffffffffffffffffffffffffffff831615610772576105b9838383610f85565b6105b98282611107565b6000838082036107b8576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600086866107c7600185612791565b8181106107d6576107d6612c19565b90506020028101906107e89190612c48565b6107f99060808101906060016127a4565b9050600061080682611231565b905073ffffffffffffffffffffffffffffffffffffffff82166108305761082d3482612791565b90505b600061083c89896112e9565b905061084889896113f5565b604080516060810182528c815273ffffffffffffffffffffffffffffffffffffffff89166020820152908101879052610883818b8b85611462565b60008361088f86611231565b6108999190612791565b905073ffffffffffffffffffffffffffffffffffffffff85166108c3576108c08882612791565b90505b8b811015610907576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018d9052602481018290526044016105a4565b9c9b505050505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8416610964576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166109b1576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015610a22573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a4691906127c6565b9050610a5482868686611853565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015610ac4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ae891906127c6565b610af29190612791565b14610b29576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b608082015160009060e08301359073ffffffffffffffffffffffffffffffffffffffff16610b6b5760c0840151610b689082612c86565b90505b90505b92915050565b73ffffffffffffffffffffffffffffffffffffffff8316610b9457505050565b73ffffffffffffffffffffffffffffffffffffffff8216610be1576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa158015610c56573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c7a91906127c6565b10156105b9576105b983837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61192f565b6040808201516020808401516060810151855160c08082015194840151848801519185015160a0909301516101009095015197517f2147796000000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169863214779609897610d5697909593949392909190600401612c99565b6000604051808303818588803b158015610d6f57600080fd5b505af1158015610b29573d6000803e3d6000fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166352c41eb68260400151610dea84602001516080015173ffffffffffffffffffffffffffffffffffffffff161590565b610dfc57836020015160800151610e12565b73eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee5b846000015160c00151856020015160a00151866020015160600151876020015160200151610e5f896000015160a0015173ffffffffffffffffffffffffffffffffffffffff166014611a1f565b6040518863ffffffff1660e01b8152600401610d5696959493929190612e08565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663846a1bc68260400151610ee784602001516080015173ffffffffffffffffffffffffffffffffffffffff161590565b610ef957836020015160800151610f0f565b73eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee5b845160c08082015160208089015160a0808201516060830151938301516040808501519785015193909801516101009094015197517fffffffff0000000000000000000000000000000000000000000000000000000060e08d901b168152610d5699989697929691949293929190600401612e84565b73ffffffffffffffffffffffffffffffffffffffff8316610fd2576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661101f576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa15801561108c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110b091906127c6565b9050808211156110f6576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044016105a4565b611101848484611c62565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8216611154576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b47811115611197576040517fcf479181000000000000000000000000000000000000000000000000000000008152600481018290524760248201526044016105a4565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d80600081146111f1576040519150601f19603f3d011682016040523d82523d6000602084013e6111f6565b606091505b50509050806105b9576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff8216156112e2576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa1580156112b9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112dd91906127c6565b610b6e565b4792915050565b60608160008167ffffffffffffffff8111156113075761130761237f565b604051908082528060200260200182016040528015611330578160200160208202803683370190505b5090506000805b838110156113ea5786868281811061135157611351612c19565b90506020028101906113639190612c48565b6113749060808101906060016127a4565b915061137f82611231565b83828151811061139157611391612c19565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff82166113e257348382815181106113ca576113ca612c19565b602002602001018181516113de9190612791565b9052505b600101611337565b509095945050505050565b60005b818110156105b9573683838381811061141357611413612c19565b90506020028101906114259190612c48565b905061143760e0820160c08301612f29565b156114595761145961144f60608301604084016127a4565b826080013561043e565b506001016113f8565b60208401516040850151849184918490836001811461176c576000868661148a600185612791565b81811061149957611499612c19565b90506020028101906114ab9190612c48565b6114bc9060808101906060016127a4565b9050600089815b8181101561166957368d8d838181106114de576114de612c19565b90506020028101906114f09190612c48565b905061151f61150560608301604084016127a4565b73ffffffffffffffffffffffffffffffffffffffff161590565b80611582575061158261153860408301602084016127a4565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015611599575061159961153860208301836127a4565b801561161e575061161e6115b060a0830183612f46565b6115bf91600491600091612fb2565b6115c891612fdc565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b611654576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8e516116609082611cb8565b506001016114c3565b505060005b611679600185612791565b81101561176457600089898381811061169457611694612c19565b90506020028101906116a69190612c48565b6116b79060808101906060016127a4565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461175b578682815181106116fe576116fe612c19565b602002602001015161170f82611231565b6117199190612791565b9250600073ffffffffffffffffffffffffffffffffffffffff821615611740576000611742565b865b9050831561175957611759828a61023a8488612791565b505b5060010161166e565b505050611847565b8760005b8181101561184457368b8b8381811061178b5761178b612c19565b905060200281019061179d9190612c48565b90506117b261150560608301604084016127a4565b806117cb57506117cb61153860408301602084016127a4565b80156117e257506117e261153860208301836127a4565b80156117f957506117f96115b060a0830183612f46565b61182f576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8c5161183b9082611cb8565b50600101611770565b50505b50505050505050505050565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526111019085907f23b872dd00000000000000000000000000000000000000000000000000000000906084015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611f96565b6040805173ffffffffffffffffffffffffffffffffffffffff8416602482015260448082018490528251808303909101815260649091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f095ea7b3000000000000000000000000000000000000000000000000000000001790526119bb84826120a5565b6111015760405173ffffffffffffffffffffffffffffffffffffffff8416602482015260006044820152611a159085907f095ea7b300000000000000000000000000000000000000000000000000000000906064016118ad565b6111018482611f96565b60606000611a2e836002613024565b611a39906002612c86565b67ffffffffffffffff811115611a5157611a5161237f565b6040519080825280601f01601f191660200182016040528015611a7b576020820181803683370190505b5090507f300000000000000000000000000000000000000000000000000000000000000081600081518110611ab257611ab2612c19565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053507f780000000000000000000000000000000000000000000000000000000000000081600181518110611b1557611b15612c19565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053506000611b51846002613024565b611b5c906001612c86565b90505b6001811115611bf9577f303132333435363738396162636465660000000000000000000000000000000085600f1660108110611b9d57611b9d612c19565b1a60f81b828281518110611bb357611bb3612c19565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535060049490941c93611bf28161303b565b9050611b5f565b508315610b6b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e7460448201526064016105a4565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526105b99084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064016118ad565b611cce611cc860208301836127a4565b3b151590565b611d04576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101356000819003611d44576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000611d5961150560608501604086016127a4565b611d64576000611d6a565b82608001355b90506000611d86611d8160608601604087016127a4565b611231565b90506000611d9d611d8160808701606088016127a4565b905082600003611dd457611dd4611dba60608701604088016127a4565b611dca60408801602089016127a4565b8760800135610b74565b8460800135821015611e1f576040517fcf47918100000000000000000000000000000000000000000000000000000000815260808601356004820152602481018390526044016105a4565b600080611e2f60208801886127a4565b73ffffffffffffffffffffffffffffffffffffffff1685611e5360a08a018a612f46565b604051611e61929190613070565b60006040518083038185875af1925050503d8060008114611e9e576040519150601f19603f3d011682016040523d82523d6000602084013e611ea3565b606091505b509150915081611eb657611eb681612166565b6000611ecb611d8160808a0160608b016127a4565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b3889611efc60208b018b6127a4565b611f0c60608c0160408d016127a4565b611f1c60808d0160608e016127a4565b8c60800135898711611f2e5786611f38565b611f388a88612791565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b6000611ff8826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166121709092919063ffffffff16565b90508051600014806120195750808060200190518101906120199190613080565b6105b9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084016105a4565b60008060008473ffffffffffffffffffffffffffffffffffffffff16846040516120cf919061309d565b6000604051808303816000865af19150503d806000811461210c576040519150601f19603f3d011682016040523d82523d6000602084013e612111565b606091505b509150915081801561213b57508051158061213b57508080602001905181019061213b9190613080565b801561215d575073ffffffffffffffffffffffffffffffffffffffff85163b15155b95945050505050565b8051602082018181fd5b606061217f8484600085612187565b949350505050565b606082471015612219576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c000000000000000000000000000000000000000000000000000060648201526084016105a4565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051612242919061309d565b60006040518083038185875af1925050503d806000811461227f576040519150601f19603f3d011682016040523d82523d6000602084013e612284565b606091505b5091509150612295878383876122a0565b979650505050505050565b6060831561233657825160000361232f5773ffffffffffffffffffffffffffffffffffffffff85163b61232f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016105a4565b508161217f565b61217f838381511561234b5781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105a491906130af565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff811182821017156123d2576123d261237f565b60405290565b60405160a0810167ffffffffffffffff811182821017156123d2576123d261237f565b604051610120810167ffffffffffffffff811182821017156123d2576123d261237f565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff811182821017156124665761246661237f565b604052919050565b600082601f83011261247f57600080fd5b813567ffffffffffffffff8111156124995761249961237f565b6124ca60207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8401160161241f565b8181528460208386010111156124df57600080fd5b816020850160208301376000918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461252057600080fd5b919050565b801515811461253357600080fd5b50565b803561252081612525565b6000610140828403121561255457600080fd5b61255c6123ae565b905081358152602082013567ffffffffffffffff8082111561257d57600080fd5b6125898583860161246e565b602084015260408401359150808211156125a257600080fd5b506125af8482850161246e565b6040830152506125c1606083016124fc565b60608201526125d2608083016124fc565b60808201526125e360a083016124fc565b60a082015260c082013560c082015260e082013560e082015261010061260a818401612536565b9082015261012061261c838201612536565b9082015292915050565b6000610120828403121561263957600080fd5b50919050565b6000806040838503121561265257600080fd5b823567ffffffffffffffff8082111561266a57600080fd5b61267686838701612541565b9350602085013591508082111561268c57600080fd5b5061269985828601612626565b9150509250929050565b600080600080606085870312156126b957600080fd5b843567ffffffffffffffff808211156126d157600080fd5b6126dd88838901612541565b955060208701359150808211156126f357600080fd5b818701915087601f83011261270757600080fd5b81358181111561271657600080fd5b8860208260051b850101111561272b57600080fd5b60208301955080945050604087013591508082111561274957600080fd5b5061275687828801612626565b91505092959194509250565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b81810381811115610b6e57610b6e612762565b6000602082840312156127b657600080fd5b6127bf826124fc565b9392505050565b6000602082840312156127d857600080fd5b5051919050565b80356003811061252057600080fd5b600082601f8301126127ff57600080fd5b8135602067ffffffffffffffff8083111561281c5761281c61237f565b8260051b61282b83820161241f565b938452858101830193838101908886111561284557600080fd5b84880192505b85831015612931578235848111156128635760008081fd5b880160a0818b037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0018113156128995760008081fd5b6128a16123d8565b87830135600481106128b35760008081fd5b815260406128c28482016124fc565b89830152606080850135828401526080915081850135898111156128e65760008081fd5b6128f48f8c8389010161246e565b8285015250508284013592508783111561290e5760008081fd5b61291c8d8a8587010161246e565b9082015284525050918401919084019061284b565b98975050505050505050565b6000610120823603121561295057600080fd5b6129586123fb565b612961836127df565b8152602083013567ffffffffffffffff8082111561297e57600080fd5b61298a3683870161246e565b602084015260408501359150808211156129a357600080fd5b6129af3683870161246e565b604084015260608501359150808211156129c857600080fd5b6129d43683870161246e565b60608401526129e5608086016124fc565b608084015260a08501359150808211156129fe57600080fd5b612a0a368387016127ee565b60a084015260c0850135915080821115612a2357600080fd5b50612a303682860161246e565b60c08301525060e083013560e082015261010061261c818501612536565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b600060208284031215612a8f57600080fd5b6127bf826127df565b60005b83811015612ab3578181015183820152602001612a9b565b50506000910152565b60008151808452612ad4816020860160208601612a98565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b602081528151602082015260006020830151610140806040850152612b2f610160850183612abc565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0858403016060860152612b6a8382612abc565b9250506060850151612b94608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e0850151610100818187015280870151915050610120612c078187018315159052565b90950151151593019290925250919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112612c7c57600080fd5b9190910192915050565b80820180821115610b6e57610b6e612762565b60e081526000612cac60e083018a612abc565b8860208401528281036040840152612cc48189612abc565b90508281036060840152612cd88188612abc565b90508281036080840152612cec8187612abc565b73ffffffffffffffffffffffffffffffffffffffff9590951660a0840152505090151560c09091015295945050505050565b600081518084526020808501808196508360051b810191508286016000805b86811015612dfa578385038a52825160a081516004808210612d85577f4e487b7100000000000000000000000000000000000000000000000000000000865260218152602486fd5b5087528188015173ffffffffffffffffffffffffffffffffffffffff168888015260408083015190880152606080830151818901839052612dc8838a0182612abc565b9250505060808083015192508782038189015250612de68183612abc565b9b88019b9650505091850191600101612d3d565b509298975050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8716815285602082015260c060408201526000612e3d60c0830187612d1e565b8281036060840152612e4f8187612abc565b90508281036080840152612e638186612abc565b905082810360a0840152612e778185612abc565b9998505050505050505050565b600061012073ffffffffffffffffffffffffffffffffffffffff808d1684528b6020850152816040850152612ebb8285018c612d1e565b91508382036060850152612ecf828b612abc565b91508382036080850152612ee3828a612abc565b915083820360a0850152612ef78289612abc565b915083820360c0850152612f0b8288612abc565b951660e0840152505090151561010090910152979650505050505050565b600060208284031215612f3b57600080fd5b8135610b6b81612525565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112612f7b57600080fd5b83018035915067ffffffffffffffff821115612f9657600080fd5b602001915036819003821315612fab57600080fd5b9250929050565b60008085851115612fc257600080fd5b83861115612fcf57600080fd5b5050820193919092039150565b7fffffffff00000000000000000000000000000000000000000000000000000000813581811691600485101561301c5780818660040360031b1b83161692505b505092915050565b8082028115828204841417610b6e57610b6e612762565b60008161304a5761304a612762565b507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0190565b8183823760009101908152919050565b60006020828403121561309257600080fd5b8151610b6b81612525565b60008251612c7c818460208701612a98565b6020815260006127bf6020830184612abc56fea264697066735822122016a3921f97ba7ba3cdc72869404dcd0855a3f18bc55db136365225b5f2ec47ad64736f6c63430008110033";
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