"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcrossFacetPacked__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        type: "constructor",
        inputs: [
            {
                name: "_spokePool",
                type: "address",
                internalType: "contract IAcrossSpokePool",
            },
            {
                name: "_wrappedNative",
                type: "address",
                internalType: "address",
            },
            {
                name: "_owner",
                type: "address",
                internalType: "address",
            },
        ],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "ACROSS_REFERRER_DELIMITER",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "bytes",
                internalType: "bytes",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "cancelOwnershipTransfer",
        inputs: [],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "confirmOwnershipTransfer",
        inputs: [],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "decode_startBridgeTokensViaAcrossERC20Packed",
        inputs: [
            {
                name: "data",
                type: "bytes",
                internalType: "bytes",
            },
        ],
        outputs: [
            {
                name: "bridgeData",
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
                name: "acrossData",
                type: "tuple",
                internalType: "struct AcrossFacet.AcrossData",
                components: [
                    {
                        name: "relayerFeePct",
                        type: "int64",
                        internalType: "int64",
                    },
                    {
                        name: "quoteTimestamp",
                        type: "uint32",
                        internalType: "uint32",
                    },
                    {
                        name: "message",
                        type: "bytes",
                        internalType: "bytes",
                    },
                    {
                        name: "maxCount",
                        type: "uint256",
                        internalType: "uint256",
                    },
                ],
            },
        ],
        stateMutability: "pure",
    },
    {
        type: "function",
        name: "decode_startBridgeTokensViaAcrossNativePacked",
        inputs: [
            {
                name: "data",
                type: "bytes",
                internalType: "bytes",
            },
        ],
        outputs: [
            {
                name: "bridgeData",
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
                name: "acrossData",
                type: "tuple",
                internalType: "struct AcrossFacet.AcrossData",
                components: [
                    {
                        name: "relayerFeePct",
                        type: "int64",
                        internalType: "int64",
                    },
                    {
                        name: "quoteTimestamp",
                        type: "uint32",
                        internalType: "uint32",
                    },
                    {
                        name: "message",
                        type: "bytes",
                        internalType: "bytes",
                    },
                    {
                        name: "maxCount",
                        type: "uint256",
                        internalType: "uint256",
                    },
                ],
            },
        ],
        stateMutability: "pure",
    },
    {
        type: "function",
        name: "encode_startBridgeTokensViaAcrossERC20Packed",
        inputs: [
            {
                name: "transactionId",
                type: "bytes32",
                internalType: "bytes32",
            },
            {
                name: "receiver",
                type: "address",
                internalType: "address",
            },
            {
                name: "sendingAssetId",
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
                name: "relayerFeePct",
                type: "int64",
                internalType: "int64",
            },
            {
                name: "quoteTimestamp",
                type: "uint32",
                internalType: "uint32",
            },
            {
                name: "message",
                type: "bytes",
                internalType: "bytes",
            },
            {
                name: "maxCount",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        outputs: [
            {
                name: "",
                type: "bytes",
                internalType: "bytes",
            },
        ],
        stateMutability: "pure",
    },
    {
        type: "function",
        name: "encode_startBridgeTokensViaAcrossNativePacked",
        inputs: [
            {
                name: "transactionId",
                type: "bytes32",
                internalType: "bytes32",
            },
            {
                name: "receiver",
                type: "address",
                internalType: "address",
            },
            {
                name: "destinationChainId",
                type: "uint64",
                internalType: "uint64",
            },
            {
                name: "relayerFeePct",
                type: "int64",
                internalType: "int64",
            },
            {
                name: "quoteTimestamp",
                type: "uint32",
                internalType: "uint32",
            },
            {
                name: "maxCount",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "message",
                type: "bytes",
                internalType: "bytes",
            },
        ],
        outputs: [
            {
                name: "",
                type: "bytes",
                internalType: "bytes",
            },
        ],
        stateMutability: "pure",
    },
    {
        type: "function",
        name: "executeCallAndWithdraw",
        inputs: [
            {
                name: "_callTo",
                type: "address",
                internalType: "address",
            },
            {
                name: "_callData",
                type: "bytes",
                internalType: "bytes",
            },
            {
                name: "_assetAddress",
                type: "address",
                internalType: "address",
            },
            {
                name: "_to",
                type: "address",
                internalType: "address",
            },
            {
                name: "_amount",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "owner",
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
        type: "function",
        name: "pendingOwner",
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
        type: "function",
        name: "setApprovalForBridge",
        inputs: [
            {
                name: "tokensToApprove",
                type: "address[]",
                internalType: "address[]",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "startBridgeTokensViaAcrossERC20Min",
        inputs: [
            {
                name: "transactionId",
                type: "bytes32",
                internalType: "bytes32",
            },
            {
                name: "sendingAssetId",
                type: "address",
                internalType: "address",
            },
            {
                name: "minAmount",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "receiver",
                type: "address",
                internalType: "address",
            },
            {
                name: "destinationChainId",
                type: "uint64",
                internalType: "uint64",
            },
            {
                name: "relayerFeePct",
                type: "int64",
                internalType: "int64",
            },
            {
                name: "quoteTimestamp",
                type: "uint32",
                internalType: "uint32",
            },
            {
                name: "message",
                type: "bytes",
                internalType: "bytes",
            },
            {
                name: "maxCount",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        outputs: [],
        stateMutability: "payable",
    },
    {
        type: "function",
        name: "startBridgeTokensViaAcrossERC20Packed",
        inputs: [],
        outputs: [],
        stateMutability: "payable",
    },
    {
        type: "function",
        name: "startBridgeTokensViaAcrossNativeMin",
        inputs: [
            {
                name: "transactionId",
                type: "bytes32",
                internalType: "bytes32",
            },
            {
                name: "receiver",
                type: "address",
                internalType: "address",
            },
            {
                name: "destinationChainId",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "relayerFeePct",
                type: "int64",
                internalType: "int64",
            },
            {
                name: "quoteTimestamp",
                type: "uint32",
                internalType: "uint32",
            },
            {
                name: "message",
                type: "bytes",
                internalType: "bytes",
            },
            {
                name: "maxCount",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        outputs: [],
        stateMutability: "payable",
    },
    {
        type: "function",
        name: "startBridgeTokensViaAcrossNativePacked",
        inputs: [],
        outputs: [],
        stateMutability: "payable",
    },
    {
        type: "function",
        name: "transferOwnership",
        inputs: [
            {
                name: "_newOwner",
                type: "address",
                internalType: "address",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "event",
        name: "CallExecutedAndFundsWithdrawn",
        inputs: [],
        anonymous: false,
    },
    {
        type: "event",
        name: "LiFiAcrossTransfer",
        inputs: [
            {
                name: "_transactionId",
                type: "bytes8",
                indexed: false,
                internalType: "bytes8",
            },
        ],
        anonymous: false,
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
        type: "event",
        name: "OwnershipTransferRequested",
        inputs: [
            {
                name: "_from",
                type: "address",
                indexed: true,
                internalType: "address",
            },
            {
                name: "_to",
                type: "address",
                indexed: true,
                internalType: "address",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "OwnershipTransferred",
        inputs: [
            {
                name: "previousOwner",
                type: "address",
                indexed: true,
                internalType: "address",
            },
            {
                name: "newOwner",
                type: "address",
                indexed: true,
                internalType: "address",
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
        name: "NativeAssetTransferFailed",
        inputs: [],
    },
    {
        type: "error",
        name: "NewOwnerMustNotBeSelf",
        inputs: [],
    },
    {
        type: "error",
        name: "NoNullOwner",
        inputs: [],
    },
    {
        type: "error",
        name: "NoPendingOwnershipTransfer",
        inputs: [],
    },
    {
        type: "error",
        name: "NoTransferToNullAddress",
        inputs: [],
    },
    {
        type: "error",
        name: "NotPendingOwner",
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
        name: "UnAuthorized",
        inputs: [],
    },
    {
        type: "error",
        name: "WithdrawFailed",
        inputs: [],
    },
];
const _bytecode = "0x60c06040523480156200001157600080fd5b5060405162002d3c38038062002d3c833981016040819052620000349162000079565b600080546001600160a01b0319166001600160a01b039283161790559182166080521660a052620000cd565b6001600160a01b03811681146200007657600080fd5b50565b6000806000606084860312156200008f57600080fd5b83516200009c8162000060565b6020850151909350620000af8162000060565b6040850151909250620000c28162000060565b809150509250925092565b60805160a051612c266200011660003960008181610c610152610e4d01526000818161075701528181610a3b01528181610b9c01528181610c1e0152610e1c0152612c266000f3fe6080604052600436106100f35760003560e01c80637200b8291161008a578063b4f3937811610059578063b4f3937814610270578063cf73f711146102b9578063e30c3978146102d9578063f2fde38b1461030657600080fd5b80637200b829146101bc5780638da5cb5b146101d1578063acc53eb814610223578063ae6c70601461025057600080fd5b80634c128e60116100c65780634c128e601461016e5780634c478642146101815780635a39b10a146101a15780635eedcbd6146101a957600080fd5b80631458d7ad146100f85780631cf9fd2f1461011a5780632340ab8f1461015157806323452b9c14610159575b600080fd5b34801561010457600080fd5b506101186101133660046120d9565b610326565b005b34801561012657600080fd5b5061013a610135366004612157565b610460565b60405161014892919061224d565b60405180910390f35b6101186106d3565b34801561016557600080fd5b50610118610912565b61011861017c3660046123bf565b6109dc565b34801561018d57600080fd5b5061011861019c366004612477565b610b14565b610118610bf8565b6101186101b73660046124ec565b610ddf565b3480156101c857600080fd5b50610118610f1b565b3480156101dd57600080fd5b506000546101fe9073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610148565b34801561022f57600080fd5b5061024361023e36600461257c565b611001565b60405161014891906125d6565b34801561025c57600080fd5b5061013a61026b366004612157565b611197565b34801561027c57600080fd5b506102436040518060400160405280600881526020017fd00dfeeddeadbeef00000000000000000000000000000000000000000000000081525081565b3480156102c557600080fd5b506102436102d43660046125f0565b611385565b3480156102e557600080fd5b506001546101fe9073ffffffffffffffffffffffffffffffffffffffff1681565b34801561031257600080fd5b50610118610321366004612689565b611491565b60005473ffffffffffffffffffffffffffffffffffffffff163314610377576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008673ffffffffffffffffffffffffffffffffffffffff1686866040516103a09291906126a4565b6000604051808303816000865af19150503d80600081146103dd576040519150601f19603f3d011682016040523d82523d6000602084013e6103e2565b606091505b505090508015610425576103f78484846115ef565b6040517fdfbe65d77c5440a078a2a1d95803d06b4a5f85b26ba3ec87bc9b421781e8dec190600090a1610457565b6040517f750b219c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50505050505050565b6040805161014081018252600080825260606020808401829052838501829052818401839052608080850184905260a0850184905260c0850184905260e085018490526101008501849052610120850184905285519081018652838152908101839052938401819052830152906090831015610563576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f696e76616c69642063616c6c6461746120286d7573742068617665206c656e6760448201527f7468203e2031343429000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b6000610570601c856126e3565b9050610580600c600486886126f6565b61058991612720565b7fffffffffffffffff0000000000000000000000000000000000000000000000001683526105bb6020600c86886126f6565b6105c491612768565b60601c60a08401526105da6034602086886126f6565b6105e391612768565b60601c60808401526105f96044603486886126f6565b610602916127ae565b60801c60c08401526106186048604486886126f6565b610621916127f4565b60e090811c908401526106386050604886886126f6565b61064191612720565b60c01d60070b82526106576054605086886126f6565b610660916127f4565b60e01c60208301526106766074605486886126f6565b61067f9161283a565b606083015261069181607486886126f6565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152505050506040830152505b9250929050565b60006106e36034602036846126f6565b6106ec91612768565b60601c905060006107016044603436846126f6565b61070a916127ae565b60801c905061073173ffffffffffffffffffffffffffffffffffffffff8316333084611620565b600061073e601c366126e3565b905073ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016631186ec3361078b6020600c3660006126f6565b61079491612768565b60601c6107a6603460203660006126f6565b6107af91612768565b60601c856107c2604860443660006126f6565b6107cb916127f4565b60e01c6107dd605060483660006126f6565b6107e691612720565b60c01c6107f8605460503660006126f6565b610801916127f4565b60e01c6108128960743660006126f6565b610821607460543660006126f6565b61082a9161283a565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e08c901b16815261086b999897969594939291906004016128bf565b600060405180830381600087803b15801561088557600080fd5b505af1158015610899573d6000803e3d6000fd5b507fe11352fef0e24c9902a94910b5ce929151ea227f4c68572aada8f2105c66c13392506108d09150600c905060043660006126f6565b6108d991612720565b6040517fffffffffffffffff000000000000000000000000000000000000000000000000909116815260200160405180910390a1505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610963576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff166109b2576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b6109fe73ffffffffffffffffffffffffffffffffffffffff8a1633308b611620565b6040517f1186ec3300000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001690631186ec3390610a80908a908d908d908c908c908c908c908c908c906004016128bf565b600060405180830381600087803b158015610a9a57600080fd5b505af1158015610aae573d6000803e3d6000fd5b50506040517fffffffffffffffff0000000000000000000000000000000000000000000000008d1681527fe11352fef0e24c9902a94910b5ce929151ea227f4c68572aada8f2105c66c1339250602001905060405180910390a150505050505050505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610b65576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60005b81811015610bf357610be1838383818110610b8557610b8561293c565b9050602002016020810190610b9a9190612689565b7f00000000000000000000000000000000000000000000000000000000000000007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6116e6565b80610beb8161296b565b915050610b68565b505050565b6000610c05601c366126e3565b905073ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016631186ec3334610c536020600c3660006126f6565b610c5c91612768565b60601c7f000000000000000000000000000000000000000000000000000000000000000034610c90602460203660006126f6565b610c99916127f4565b60e01c610cab602c60243660006126f6565b610cb491612720565b60c01c610cc66030602c3660006126f6565b610ccf916127f4565b60e01c610ce08a60503660006126f6565b610cef605060303660006126f6565b610cf89161283a565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e08d901b168152610d39999897969594939291906004016128bf565b6000604051808303818588803b158015610d5257600080fd5b505af1158015610d66573d6000803e3d6000fd5b507fe11352fef0e24c9902a94910b5ce929151ea227f4c68572aada8f2105c66c1339350610d9f9250600c9150600490503660006126f6565b610da891612720565b6040517fffffffffffffffff000000000000000000000000000000000000000000000000909116815260200160405180910390a150565b6040517f1186ec3300000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001690631186ec33903490610e83908b907f00000000000000000000000000000000000000000000000000000000000000009084908d908d908d908d908d908d906004016129a3565b6000604051808303818588803b158015610e9c57600080fd5b505af1158015610eb0573d6000803e3d6000fd5b50506040517fffffffffffffffff0000000000000000000000000000000000000000000000008c1681527fe11352fef0e24c9902a94910b5ce929151ea227f4c68572aada8f2105c66c13393506020019150610f099050565b60405180910390a15050505050505050565b60015473ffffffffffffffffffffffffffffffffffffffff16338114610f6d576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b606063ffffffff871115611097576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603860248201527f64657374696e6174696f6e436861696e49642076616c7565207061737365642060448201527f746f6f2062696720746f2066697420696e2075696e7433320000000000000000606482015260840161055a565b6fffffffffffffffffffffffffffffffff881115611137576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603060248201527f6d696e416d6f756e742076616c75652070617373656420746f6f20626967207460448201527f6f2066697420696e2075696e7431323800000000000000000000000000000000606482015260840161055a565b632340ab8f60e01b8b8b60601b8b60601b8b60801b8b60e01b8b60c01b8b60e01b8960001b8c8c6040516020016111789b9a999897969594939291906129ff565b60405160208183030381529060405290509a9950505050505050505050565b6040805161014081018252600080825260606020808401829052838501829052818401839052608080850184905260a0850184905260c0850184905260e08501849052610100850184905261012085018490528551908101865283815290810183905293840181905283015290606c831015611295576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f696e76616c69642063616c6c6461746120286d7573742068617665206c656e6760448201527f7468203e20313038290000000000000000000000000000000000000000000000606482015260840161055a565b60006112a2601c856126e3565b90506112b2600c600486886126f6565b6112bb91612720565b7fffffffffffffffff0000000000000000000000000000000000000000000000001683526112ed6020600c86886126f6565b6112f691612768565b60601c60a084015261130c6024602086886126f6565b611315916127f4565b60e090811c9084015261132c602c602486886126f6565b61133591612720565b60c01d60070b825261134b6030602c86886126f6565b611354916127f4565b60e01c602083015261136a6050603086886126f6565b6113739161283a565b606083015261069181605086886126f6565b606063ffffffff67ffffffffffffffff88161115611425576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603860248201527f64657374696e6174696f6e436861696e49642076616c7565207061737365642060448201527f746f6f2062696720746f2066697420696e2075696e7433320000000000000000606482015260840161055a565b604051611474907f5a39b10a00000000000000000000000000000000000000000000000000000000908b9060608c901b9060e08c811b9160c08d901b918c901b908b908b908b90602001612ae5565b604051602081830303815290604052905098975050505050505050565b60005473ffffffffffffffffffffffffffffffffffffffff1633146114e2576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff811661152f576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff82160361157e576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae127890600090a350565b73ffffffffffffffffffffffffffffffffffffffff83161561161657610bf383838361181d565b610bf3828261199f565b60006040517f23b872dd0000000000000000000000000000000000000000000000000000000081528460048201528360248201528260448201526020600060648360008a5af13d15601f3d11600160005114161716915050806116df576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f5452414e534645525f46524f4d5f4641494c4544000000000000000000000000604482015260640161055a565b5050505050565b73ffffffffffffffffffffffffffffffffffffffff831661170657505050565b73ffffffffffffffffffffffffffffffffffffffff8216611753576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa1580156117c8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117ec9190612b99565b1015610bf357610bf383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611ac9565b73ffffffffffffffffffffffffffffffffffffffff831661186a576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166118b7576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015611924573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119489190612b99565b90508082111561198e576040517fcf479181000000000000000000000000000000000000000000000000000000008152600481018390526024810182905260440161055a565b611999848484611c37565b50505050565b73ffffffffffffffffffffffffffffffffffffffff82166119ec576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b47811115611a2f576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810182905247602482015260440161055a565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114611a89576040519150601f19603f3d011682016040523d82523d6000602084013e611a8e565b606091505b5050905080610bf3576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040805173ffffffffffffffffffffffffffffffffffffffff8416602482015260448082018490528251808303909101815260649091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f095ea7b300000000000000000000000000000000000000000000000000000000179052611b558482611c8d565b6119995760405173ffffffffffffffffffffffffffffffffffffffff8416602482015260006044820152611c2d9085907f095ea7b300000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611d50565b6119998482611d50565b60405173ffffffffffffffffffffffffffffffffffffffff8316602482015260448101829052610bf39084907fa9059cbb0000000000000000000000000000000000000000000000000000000090606401611bab565b60008060008473ffffffffffffffffffffffffffffffffffffffff1684604051611cb79190612bb2565b6000604051808303816000865af19150503d8060008114611cf4576040519150601f19603f3d011682016040523d82523d6000602084013e611cf9565b606091505b5091509150818015611d23575080511580611d23575080806020019051810190611d239190612bce565b8015611d45575073ffffffffffffffffffffffffffffffffffffffff85163b15155b925050505b92915050565b6000611db2826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611e5f9092919063ffffffff16565b9050805160001480611dd3575080806020019051810190611dd39190612bce565b610bf3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f74207375636365656400000000000000000000000000000000000000000000606482015260840161055a565b6060611e6e8484600085611e76565b949350505050565b606082471015611f08576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c0000000000000000000000000000000000000000000000000000606482015260840161055a565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611f319190612bb2565b60006040518083038185875af1925050503d8060008114611f6e576040519150601f19603f3d011682016040523d82523d6000602084013e611f73565b606091505b5091509150611f8487838387611f8f565b979650505050505050565b6060831561202557825160000361201e5773ffffffffffffffffffffffffffffffffffffffff85163b61201e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161055a565b5081611e6e565b611e6e838381511561203a5781518083602001fd5b806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161055a91906125d6565b803573ffffffffffffffffffffffffffffffffffffffff8116811461209257600080fd5b919050565b60008083601f8401126120a957600080fd5b50813567ffffffffffffffff8111156120c157600080fd5b6020830191508360208285010111156106cc57600080fd5b60008060008060008060a087890312156120f257600080fd5b6120fb8761206e565b9550602087013567ffffffffffffffff81111561211757600080fd5b61212389828a01612097565b909650945061213690506040880161206e565b92506121446060880161206e565b9150608087013590509295509295509295565b6000806020838503121561216a57600080fd5b823567ffffffffffffffff81111561218157600080fd5b61218d85828601612097565b90969095509350505050565b60005b838110156121b457818101518382015260200161219c565b50506000910152565b600081518084526121d5816020860160208601612199565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b805160070b825263ffffffff6020820151166020830152600060408201516080604085015261223960808501826121bd565b606093840151949093019390935250919050565b6040815282516040820152600060208401516101408060608501526122766101808501836121bd565b915060408601517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc08584030160808601526122b183826121bd565b92505060608601516122db60a086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608086015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060a086015173ffffffffffffffffffffffffffffffffffffffff811660e08601525060c0860151610100818187015260e08801519150610120828188015281890151925061234f8488018415159052565b8801518015156101608801529250612365915050565b5082810360208401526123788185612207565b95945050505050565b803567ffffffffffffffff8116811461209257600080fd5b8035600781900b811461209257600080fd5b803563ffffffff8116811461209257600080fd5b6000806000806000806000806000806101208b8d0312156123df57600080fd5b8a3599506123ef60208c0161206e565b985060408b0135975061240460608c0161206e565b965061241260808c01612381565b955061242060a08c01612399565b945061242e60c08c016123ab565b935060e08b013567ffffffffffffffff81111561244a57600080fd5b6124568d828e01612097565b915080945050809250506101008b013590509295989b9194979a5092959850565b6000806020838503121561248a57600080fd5b823567ffffffffffffffff808211156124a257600080fd5b818501915085601f8301126124b657600080fd5b8135818111156124c557600080fd5b8660208260051b85010111156124da57600080fd5b60209290920196919550909350505050565b60008060008060008060008060e0898b03121561250857600080fd5b8835975061251860208a0161206e565b96506040890135955061252d60608a01612399565b945061253b60808a016123ab565b935060a089013567ffffffffffffffff81111561255757600080fd5b6125638b828c01612097565b999c989b50969995989497949560c00135949350505050565b6000806000806000806000806000806101208b8d03121561259c57600080fd5b8a3599506125ac60208c0161206e565b98506125ba60408c0161206e565b975060608b0135965060808b0135955061242060a08c01612399565b6020815260006125e960208301846121bd565b9392505050565b60008060008060008060008060e0898b03121561260c57600080fd5b8835975061261c60208a0161206e565b965061262a60408a01612381565b955061263860608a01612399565b945061264660808a016123ab565b935060a0890135925060c089013567ffffffffffffffff81111561266957600080fd5b6126758b828c01612097565b999c989b5096995094979396929594505050565b60006020828403121561269b57600080fd5b6125e98261206e565b8183823760009101908152919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b81810381811115611d4a57611d4a6126b4565b6000808585111561270657600080fd5b8386111561271357600080fd5b5050820193919092039150565b7fffffffffffffffff00000000000000000000000000000000000000000000000081358181169160088510156127605780818660080360031b1b83161692505b505092915050565b7fffffffffffffffffffffffffffffffffffffffff00000000000000000000000081358181169160148510156127605760149490940360031b84901b1690921692915050565b7fffffffffffffffffffffffffffffffff0000000000000000000000000000000081358181169160108510156127605760109490940360031b84901b1690921692915050565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156127605760049490940360031b84901b1690921692915050565b80356020831015611d4a577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff602084900360031b1b1692915050565b8183528181602085013750600060208284010152600060207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b600061010073ffffffffffffffffffffffffffffffffffffffff808d168452808c1660208501525089604084015267ffffffffffffffff891660608401528760070b608084015263ffffffff871660a08401528060c08401526129258184018688612876565b9150508260e08301529a9950505050505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361299c5761299c6126b4565b5060010190565b600061010073ffffffffffffffffffffffffffffffffffffffff808d168452808c166020850152508960408401528860608401528760070b608084015263ffffffff871660a08401528060c08401526129258184018688612876565b7fffffffff000000000000000000000000000000000000000000000000000000008c811682527fffffffffffffffff0000000000000000000000000000000000000000000000008c811660048401527fffffffffffffffffffffffffffffffffffffffff0000000000000000000000008c8116600c8501528b1660208401527fffffffffffffffffffffffffffffffff000000000000000000000000000000008a166034840152888216604484015287166048830152851660508201526054810184905260008284607484013750600091016074019081529a9950505050505050505050565b7fffffffff000000000000000000000000000000000000000000000000000000008a811682527fffffffffffffffff0000000000000000000000000000000000000000000000008a811660048401527fffffffffffffffffffffffffffffffffffffffff0000000000000000000000008a16600c8401528882166020840152871660248301528516602c82015260308101849052600082846050840137506000910160500190815298975050505050505050565b600060208284031215612bab57600080fd5b5051919050565b60008251612bc4818460208701612199565b9190910192915050565b600060208284031215612be057600080fd5b815180151581146125e957600080fdfea26469706673582212207c21a61da9d796cbfd9a750375a8595da9740776c3059bd9e47ee7aa6ec3329964736f6c63430008110033";
const isSuperArgs = (xs) => xs.length > 1;
class AcrossFacetPacked__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    deploy(_spokePool, _wrappedNative, _owner, overrides) {
        return super.deploy(_spokePool, _wrappedNative, _owner, overrides || {});
    }
    getDeployTransaction(_spokePool, _wrappedNative, _owner, overrides) {
        return super.getDeployTransaction(_spokePool, _wrappedNative, _owner, overrides || {});
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
exports.AcrossFacetPacked__factory = AcrossFacetPacked__factory;
Object.defineProperty(AcrossFacetPacked__factory, "bytecode", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _bytecode
});
Object.defineProperty(AcrossFacetPacked__factory, "abi", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _abi
});
//# sourceMappingURL=AcrossFacetPacked__factory.js.map