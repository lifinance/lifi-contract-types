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
const _bytecode = "0x60c06040523480156200001157600080fd5b5060405162002d1d38038062002d1d833981016040819052620000349162000079565b600080546001600160a01b0319166001600160a01b039283161790559182166080521660a052620000cd565b6001600160a01b03811681146200007657600080fd5b50565b6000806000606084860312156200008f57600080fd5b83516200009c8162000060565b6020850151909350620000af8162000060565b6040850151909250620000c28162000060565b809150509250925092565b60805160a051612c076200011660003960008181610c610152610e4d01526000818161075701528181610a3b01528181610b9c01528181610c1e0152610e1c0152612c076000f3fe6080604052600436106100f35760003560e01c80637200b8291161008a578063b4f3937811610059578063b4f3937814610270578063cf73f711146102b9578063e30c3978146102d9578063f2fde38b1461030657600080fd5b80637200b829146101bc5780638da5cb5b146101d1578063acc53eb814610223578063ae6c70601461025057600080fd5b80634c128e60116100c65780634c128e601461016e5780634c478642146101815780635a39b10a146101a15780635eedcbd6146101a957600080fd5b80631458d7ad146100f85780631cf9fd2f1461011a5780632340ab8f1461015157806323452b9c14610159575b600080fd5b34801561010457600080fd5b506101186101133660046120b4565b610326565b005b34801561012657600080fd5b5061013a610135366004612132565b610460565b604051610148929190612228565b60405180910390f35b6101186106d3565b34801561016557600080fd5b50610118610912565b61011861017c36600461239a565b6109dc565b34801561018d57600080fd5b5061011861019c366004612452565b610b14565b610118610bf8565b6101186101b73660046124c7565b610ddf565b3480156101c857600080fd5b50610118610f1b565b3480156101dd57600080fd5b506000546101fe9073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610148565b34801561022f57600080fd5b5061024361023e366004612557565b611001565b60405161014891906125b1565b34801561025c57600080fd5b5061013a61026b366004612132565b611197565b34801561027c57600080fd5b506102436040518060400160405280600881526020017fd00dfeeddeadbeef00000000000000000000000000000000000000000000000081525081565b3480156102c557600080fd5b506102436102d43660046125cb565b611385565b3480156102e557600080fd5b506001546101fe9073ffffffffffffffffffffffffffffffffffffffff1681565b34801561031257600080fd5b50610118610321366004612664565b611491565b60005473ffffffffffffffffffffffffffffffffffffffff163314610377576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008673ffffffffffffffffffffffffffffffffffffffff1686866040516103a092919061267f565b6000604051808303816000865af19150503d80600081146103dd576040519150601f19603f3d011682016040523d82523d6000602084013e6103e2565b606091505b505090508015610425576103f78484846115ef565b6040517fdfbe65d77c5440a078a2a1d95803d06b4a5f85b26ba3ec87bc9b421781e8dec190600090a1610457565b6040517f750b219c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50505050505050565b6040805161014081018252600080825260606020808401829052838501829052818401839052608080850184905260a0850184905260c0850184905260e085018490526101008501849052610120850184905285519081018652838152908101839052938401819052830152906090831015610563576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f696e76616c69642063616c6c6461746120286d7573742068617665206c656e6760448201527f7468203e2031343429000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b6000610570601c856126be565b9050610580600c600486886126d7565b61058991612701565b7fffffffffffffffff0000000000000000000000000000000000000000000000001683526105bb6020600c86886126d7565b6105c491612749565b60601c60a08401526105da6034602086886126d7565b6105e391612749565b60601c60808401526105f96044603486886126d7565b6106029161278f565b60801c60c08401526106186048604486886126d7565b610621916127d5565b60e090811c908401526106386050604886886126d7565b61064191612701565b60c01d60070b82526106576054605086886126d7565b610660916127d5565b60e01c60208301526106766074605486886126d7565b61067f9161281b565b606083015261069181607486886126d7565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152505050506040830152505b9250929050565b60006106e36034602036846126d7565b6106ec91612749565b60601c905060006107016044603436846126d7565b61070a9161278f565b60801c905061073173ffffffffffffffffffffffffffffffffffffffff8316333084611620565b600061073e601c366126be565b905073ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016631186ec3361078b6020600c3660006126d7565b61079491612749565b60601c6107a6603460203660006126d7565b6107af91612749565b60601c856107c2604860443660006126d7565b6107cb916127d5565b60e01c6107dd605060483660006126d7565b6107e691612701565b60c01c6107f8605460503660006126d7565b610801916127d5565b60e01c6108128960743660006126d7565b610821607460543660006126d7565b61082a9161281b565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e08c901b16815261086b999897969594939291906004016128a0565b600060405180830381600087803b15801561088557600080fd5b505af1158015610899573d6000803e3d6000fd5b507fe11352fef0e24c9902a94910b5ce929151ea227f4c68572aada8f2105c66c13392506108d09150600c905060043660006126d7565b6108d991612701565b6040517fffffffffffffffff000000000000000000000000000000000000000000000000909116815260200160405180910390a1505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610963576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff166109b2576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b6109fe73ffffffffffffffffffffffffffffffffffffffff8a1633308b611620565b6040517f1186ec3300000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001690631186ec3390610a80908a908d908d908c908c908c908c908c908c906004016128a0565b600060405180830381600087803b158015610a9a57600080fd5b505af1158015610aae573d6000803e3d6000fd5b50506040517fffffffffffffffff0000000000000000000000000000000000000000000000008d1681527fe11352fef0e24c9902a94910b5ce929151ea227f4c68572aada8f2105c66c1339250602001905060405180910390a150505050505050505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610b65576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60005b81811015610bf357610be1838383818110610b8557610b8561291d565b9050602002016020810190610b9a9190612664565b7f00000000000000000000000000000000000000000000000000000000000000007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6116e6565b80610beb8161294c565b915050610b68565b505050565b6000610c05601c366126be565b905073ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016631186ec3334610c536020600c3660006126d7565b610c5c91612749565b60601c7f000000000000000000000000000000000000000000000000000000000000000034610c90602460203660006126d7565b610c99916127d5565b60e01c610cab602c60243660006126d7565b610cb491612701565b60c01c610cc66030602c3660006126d7565b610ccf916127d5565b60e01c610ce08a60503660006126d7565b610cef605060303660006126d7565b610cf89161281b565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e08d901b168152610d39999897969594939291906004016128a0565b6000604051808303818588803b158015610d5257600080fd5b505af1158015610d66573d6000803e3d6000fd5b507fe11352fef0e24c9902a94910b5ce929151ea227f4c68572aada8f2105c66c1339350610d9f9250600c9150600490503660006126d7565b610da891612701565b6040517fffffffffffffffff000000000000000000000000000000000000000000000000909116815260200160405180910390a150565b6040517f1186ec3300000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001690631186ec33903490610e83908b907f00000000000000000000000000000000000000000000000000000000000000009084908d908d908d908d908d908d90600401612984565b6000604051808303818588803b158015610e9c57600080fd5b505af1158015610eb0573d6000803e3d6000fd5b50506040517fffffffffffffffff0000000000000000000000000000000000000000000000008c1681527fe11352fef0e24c9902a94910b5ce929151ea227f4c68572aada8f2105c66c13393506020019150610f099050565b60405180910390a15050505050505050565b60015473ffffffffffffffffffffffffffffffffffffffff16338114610f6d576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b606063ffffffff871115611097576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603860248201527f64657374696e6174696f6e436861696e49642076616c7565207061737365642060448201527f746f6f2062696720746f2066697420696e2075696e7433320000000000000000606482015260840161055a565b6fffffffffffffffffffffffffffffffff881115611137576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603060248201527f6d696e416d6f756e742076616c75652070617373656420746f6f20626967207460448201527f6f2066697420696e2075696e7431323800000000000000000000000000000000606482015260840161055a565b632340ab8f60e01b8b8b60601b8b60601b8b60801b8b60e01b8b60c01b8b60e01b8960001b8c8c6040516020016111789b9a999897969594939291906129e0565b60405160208183030381529060405290509a9950505050505050505050565b6040805161014081018252600080825260606020808401829052838501829052818401839052608080850184905260a0850184905260c0850184905260e08501849052610100850184905261012085018490528551908101865283815290810183905293840181905283015290606c831015611295576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f696e76616c69642063616c6c6461746120286d7573742068617665206c656e6760448201527f7468203e20313038290000000000000000000000000000000000000000000000606482015260840161055a565b60006112a2601c856126be565b90506112b2600c600486886126d7565b6112bb91612701565b7fffffffffffffffff0000000000000000000000000000000000000000000000001683526112ed6020600c86886126d7565b6112f691612749565b60601c60a084015261130c6024602086886126d7565b611315916127d5565b60e090811c9084015261132c602c602486886126d7565b61133591612701565b60c01d60070b825261134b6030602c86886126d7565b611354916127d5565b60e01c602083015261136a6050603086886126d7565b6113739161281b565b606083015261069181605086886126d7565b606063ffffffff67ffffffffffffffff88161115611425576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603860248201527f64657374696e6174696f6e436861696e49642076616c7565207061737365642060448201527f746f6f2062696720746f2066697420696e2075696e7433320000000000000000606482015260840161055a565b604051611474907f5a39b10a00000000000000000000000000000000000000000000000000000000908b9060608c901b9060e08c811b9160c08d901b918c901b908b908b908b90602001612ac6565b604051602081830303815290604052905098975050505050505050565b60005473ffffffffffffffffffffffffffffffffffffffff1633146114e2576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff811661152f576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff82160361157e576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae127890600090a350565b73ffffffffffffffffffffffffffffffffffffffff83161561161657610bf3838383611829565b610bf382826119ab565b60006040517f23b872dd0000000000000000000000000000000000000000000000000000000081528460048201528360248201528260448201526020600060648360008a5af13d15601f3d11600160005114161716915050806116df576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f5452414e534645525f46524f4d5f4641494c4544000000000000000000000000604482015260640161055a565b5050505050565b73ffffffffffffffffffffffffffffffffffffffff831661170657505050565b73ffffffffffffffffffffffffffffffffffffffff8216611753576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa1580156117c8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117ec9190612b7a565b1015610bf3576117fe83836000611ad5565b610bf383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611ad5565b73ffffffffffffffffffffffffffffffffffffffff8316611876576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166118c3576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015611930573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119549190612b7a565b90508082111561199a576040517fcf479181000000000000000000000000000000000000000000000000000000008152600481018390526024810182905260440161055a565b6119a5848484611cd5565b50505050565b73ffffffffffffffffffffffffffffffffffffffff82166119f8576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b47811115611a3b576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810182905247602482015260440161055a565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114611a95576040519150601f19603f3d011682016040523d82523d6000602084013e611a9a565b606091505b5050905080610bf3576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b801580611b7557506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa158015611b4f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611b739190612b7a565b155b611c01576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e636500000000000000000000606482015260840161055a565b60405173ffffffffffffffffffffffffffffffffffffffff8316602482015260448101829052610bf39084907f095ea7b300000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611d2b565b60405173ffffffffffffffffffffffffffffffffffffffff8316602482015260448101829052610bf39084907fa9059cbb0000000000000000000000000000000000000000000000000000000090606401611c53565b6000611d8d826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611e3a9092919063ffffffff16565b9050805160001480611dae575080806020019051810190611dae9190612b93565b610bf3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f74207375636365656400000000000000000000000000000000000000000000606482015260840161055a565b6060611e498484600085611e51565b949350505050565b606082471015611ee3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c0000000000000000000000000000000000000000000000000000606482015260840161055a565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611f0c9190612bb5565b60006040518083038185875af1925050503d8060008114611f49576040519150601f19603f3d011682016040523d82523d6000602084013e611f4e565b606091505b5091509150611f5f87838387611f6a565b979650505050505050565b60608315612000578251600003611ff95773ffffffffffffffffffffffffffffffffffffffff85163b611ff9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161055a565b5081611e49565b611e4983838151156120155781518083602001fd5b806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161055a91906125b1565b803573ffffffffffffffffffffffffffffffffffffffff8116811461206d57600080fd5b919050565b60008083601f84011261208457600080fd5b50813567ffffffffffffffff81111561209c57600080fd5b6020830191508360208285010111156106cc57600080fd5b60008060008060008060a087890312156120cd57600080fd5b6120d687612049565b9550602087013567ffffffffffffffff8111156120f257600080fd5b6120fe89828a01612072565b9096509450612111905060408801612049565b925061211f60608801612049565b9150608087013590509295509295509295565b6000806020838503121561214557600080fd5b823567ffffffffffffffff81111561215c57600080fd5b61216885828601612072565b90969095509350505050565b60005b8381101561218f578181015183820152602001612177565b50506000910152565b600081518084526121b0816020860160208601612174565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b805160070b825263ffffffff602082015116602083015260006040820151608060408501526122146080850182612198565b606093840151949093019390935250919050565b604081528251604082015260006020840151610140806060850152612251610180850183612198565b915060408601517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc085840301608086015261228c8382612198565b92505060608601516122b660a086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608086015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060a086015173ffffffffffffffffffffffffffffffffffffffff811660e08601525060c0860151610100818187015260e08801519150610120828188015281890151925061232a8488018415159052565b8801518015156101608801529250612340915050565b50828103602084015261235381856121e2565b95945050505050565b803567ffffffffffffffff8116811461206d57600080fd5b8035600781900b811461206d57600080fd5b803563ffffffff8116811461206d57600080fd5b6000806000806000806000806000806101208b8d0312156123ba57600080fd5b8a3599506123ca60208c01612049565b985060408b013597506123df60608c01612049565b96506123ed60808c0161235c565b95506123fb60a08c01612374565b945061240960c08c01612386565b935060e08b013567ffffffffffffffff81111561242557600080fd5b6124318d828e01612072565b915080945050809250506101008b013590509295989b9194979a5092959850565b6000806020838503121561246557600080fd5b823567ffffffffffffffff8082111561247d57600080fd5b818501915085601f83011261249157600080fd5b8135818111156124a057600080fd5b8660208260051b85010111156124b557600080fd5b60209290920196919550909350505050565b60008060008060008060008060e0898b0312156124e357600080fd5b883597506124f360208a01612049565b96506040890135955061250860608a01612374565b945061251660808a01612386565b935060a089013567ffffffffffffffff81111561253257600080fd5b61253e8b828c01612072565b999c989b50969995989497949560c00135949350505050565b6000806000806000806000806000806101208b8d03121561257757600080fd5b8a35995061258760208c01612049565b985061259560408c01612049565b975060608b0135965060808b013595506123fb60a08c01612374565b6020815260006125c46020830184612198565b9392505050565b60008060008060008060008060e0898b0312156125e757600080fd5b883597506125f760208a01612049565b965061260560408a0161235c565b955061261360608a01612374565b945061262160808a01612386565b935060a0890135925060c089013567ffffffffffffffff81111561264457600080fd5b6126508b828c01612072565b999c989b5096995094979396929594505050565b60006020828403121561267657600080fd5b6125c482612049565b8183823760009101908152919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b818103818111156126d1576126d161268f565b92915050565b600080858511156126e757600080fd5b838611156126f457600080fd5b5050820193919092039150565b7fffffffffffffffff00000000000000000000000000000000000000000000000081358181169160088510156127415780818660080360031b1b83161692505b505092915050565b7fffffffffffffffffffffffffffffffffffffffff00000000000000000000000081358181169160148510156127415760149490940360031b84901b1690921692915050565b7fffffffffffffffffffffffffffffffff0000000000000000000000000000000081358181169160108510156127415760109490940360031b84901b1690921692915050565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156127415760049490940360031b84901b1690921692915050565b803560208310156126d1577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff602084900360031b1b1692915050565b8183528181602085013750600060208284010152600060207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b600061010073ffffffffffffffffffffffffffffffffffffffff808d168452808c1660208501525089604084015267ffffffffffffffff891660608401528760070b608084015263ffffffff871660a08401528060c08401526129068184018688612857565b9150508260e08301529a9950505050505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361297d5761297d61268f565b5060010190565b600061010073ffffffffffffffffffffffffffffffffffffffff808d168452808c166020850152508960408401528860608401528760070b608084015263ffffffff871660a08401528060c08401526129068184018688612857565b7fffffffff000000000000000000000000000000000000000000000000000000008c811682527fffffffffffffffff0000000000000000000000000000000000000000000000008c811660048401527fffffffffffffffffffffffffffffffffffffffff0000000000000000000000008c8116600c8501528b1660208401527fffffffffffffffffffffffffffffffff000000000000000000000000000000008a166034840152888216604484015287166048830152851660508201526054810184905260008284607484013750600091016074019081529a9950505050505050505050565b7fffffffff000000000000000000000000000000000000000000000000000000008a811682527fffffffffffffffff0000000000000000000000000000000000000000000000008a811660048401527fffffffffffffffffffffffffffffffffffffffff0000000000000000000000008a16600c8401528882166020840152871660248301528516602c82015260308101849052600082846050840137506000910160500190815298975050505050505050565b600060208284031215612b8c57600080fd5b5051919050565b600060208284031215612ba557600080fd5b815180151581146125c457600080fd5b60008251612bc7818460208701612174565b919091019291505056fea26469706673582212200ecb69facb955787199e7cf92c0c5f06c8829edec89aab81319fe0d7bdcc442364736f6c63430008110033";
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