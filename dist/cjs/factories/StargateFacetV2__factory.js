"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StargateFacetV2__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        type: "constructor",
        inputs: [
            {
                name: "_tokenMessaging",
                type: "address",
                internalType: "address",
            },
        ],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "startBridgeTokensViaStargate",
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
                name: "_stargateData",
                type: "tuple",
                internalType: "struct StargateFacetV2.StargateData",
                components: [
                    {
                        name: "assetId",
                        type: "uint16",
                        internalType: "uint16",
                    },
                    {
                        name: "sendParams",
                        type: "tuple",
                        internalType: "struct IStargate.SendParam",
                        components: [
                            {
                                name: "dstEid",
                                type: "uint32",
                                internalType: "uint32",
                            },
                            {
                                name: "to",
                                type: "bytes32",
                                internalType: "bytes32",
                            },
                            {
                                name: "amountLD",
                                type: "uint256",
                                internalType: "uint256",
                            },
                            {
                                name: "minAmountLD",
                                type: "uint256",
                                internalType: "uint256",
                            },
                            {
                                name: "extraOptions",
                                type: "bytes",
                                internalType: "bytes",
                            },
                            {
                                name: "composeMsg",
                                type: "bytes",
                                internalType: "bytes",
                            },
                            {
                                name: "oftCmd",
                                type: "bytes",
                                internalType: "bytes",
                            },
                        ],
                    },
                    {
                        name: "fee",
                        type: "tuple",
                        internalType: "struct IStargate.MessagingFee",
                        components: [
                            {
                                name: "nativeFee",
                                type: "uint256",
                                internalType: "uint256",
                            },
                            {
                                name: "lzTokenFee",
                                type: "uint256",
                                internalType: "uint256",
                            },
                        ],
                    },
                    {
                        name: "refundAddress",
                        type: "address",
                        internalType: "address payable",
                    },
                ],
            },
        ],
        outputs: [],
        stateMutability: "payable",
    },
    {
        type: "function",
        name: "swapAndStartBridgeTokensViaStargate",
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
                name: "_stargateData",
                type: "tuple",
                internalType: "struct StargateFacetV2.StargateData",
                components: [
                    {
                        name: "assetId",
                        type: "uint16",
                        internalType: "uint16",
                    },
                    {
                        name: "sendParams",
                        type: "tuple",
                        internalType: "struct IStargate.SendParam",
                        components: [
                            {
                                name: "dstEid",
                                type: "uint32",
                                internalType: "uint32",
                            },
                            {
                                name: "to",
                                type: "bytes32",
                                internalType: "bytes32",
                            },
                            {
                                name: "amountLD",
                                type: "uint256",
                                internalType: "uint256",
                            },
                            {
                                name: "minAmountLD",
                                type: "uint256",
                                internalType: "uint256",
                            },
                            {
                                name: "extraOptions",
                                type: "bytes",
                                internalType: "bytes",
                            },
                            {
                                name: "composeMsg",
                                type: "bytes",
                                internalType: "bytes",
                            },
                            {
                                name: "oftCmd",
                                type: "bytes",
                                internalType: "bytes",
                            },
                        ],
                    },
                    {
                        name: "fee",
                        type: "tuple",
                        internalType: "struct IStargate.MessagingFee",
                        components: [
                            {
                                name: "nativeFee",
                                type: "uint256",
                                internalType: "uint256",
                            },
                            {
                                name: "lzTokenFee",
                                type: "uint256",
                                internalType: "uint256",
                            },
                        ],
                    },
                    {
                        name: "refundAddress",
                        type: "address",
                        internalType: "address payable",
                    },
                ],
            },
        ],
        outputs: [],
        stateMutability: "payable",
    },
    {
        type: "function",
        name: "tokenMessaging",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "address",
                internalType: "contract ITokenMessaging",
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
        name: "InvalidAssetId",
        inputs: [
            {
                name: "invalidAssetId",
                type: "uint16",
                internalType: "uint16",
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
        name: "InvalidReceiver",
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
const _bytecode = "0x60a06040523480156200001157600080fd5b5060405162002ea338038062002ea3833981016040819052620000349162000046565b6001600160a01b031660805262000078565b6000602082840312156200005957600080fd5b81516001600160a01b03811681146200007157600080fd5b9392505050565b608051612e096200009a600039600081816073015261076b0152612e096000f3fe6080604052600436106100345760003560e01c806314d5307714610039578063a6010a661461004e578063fb214c2f14610061575b600080fd5b61004c6100473660046121ed565b6100be565b005b61004c61005c36600461253a565b6102cb565b34801561006d57600080fd5b506100957f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610139576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815533600061014a3447612628565b90506101558561263b565b80610100015115610192576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61019b8661263b565b60a081015173ffffffffffffffffffffffffffffffffffffffff166101ec576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c0015160000361022a576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610267576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61028461027a60a0890160808a01612647565b8860c001356104c0565b61029e6102908861263b565b610299886126af565b610640565b50479050818111156102bf576102bf6000846102ba8585612628565b610ab1565b50506000909155505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610346576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006103573447612628565b905086806101000151610396576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b876103b98160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156103f0576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c0015160000361042e576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361046b576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b885160c08a015161048491908a8a3360408c0135610ae2565b60c08a015261049689610299886126af565b50479050818111156104b2576104b26000846102ba8585612628565b505060009091555050505050565b806000036104fa576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610553578034101561054f576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa1580156105c0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105e491906127db565b90508181101561062f576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044015b60405180910390fd5b61063b83333085610c7d565b505050565b610120820151602082015160a00151511515901515141580610677575081610120015180156106775750602081015160c001515115155b156106ae576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8161012001511580156106fc575080602001516020015160001c73ffffffffffffffffffffffffffffffffffffffff168260a0015173ffffffffffffffffffffffffffffffffffffffff1614155b15610733576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b80516040517f5f6d9ae400000000000000000000000000000000000000000000000000000000815261ffff90911660048201526000907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1690635f6d9ae4906024016020604051808303816000875af11580156107c9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107ed91906127f4565b905073ffffffffffffffffffffffffffffffffffffffff81166108455781516040517f420c482e00000000000000000000000000000000000000000000000000000000815261ffff9091166004820152602401610626565b604082015151608084015173ffffffffffffffffffffffffffffffffffffffff166108805760c08401516108799082612811565b9050610999565b60808401516040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff84811660248301526000919083169063dd62ed3e90604401602060405180830381865afa1580156108fb573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061091f91906127db565b90508560c001518110156109965780156109555761095573ffffffffffffffffffffffffffffffffffffffff8316856000610e97565b61099673ffffffffffffffffffffffffffffffffffffffff8316857fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff610e97565b50505b60c08401516020840180516040908101929092525181850151606086015192517fcbef2aa900000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff86169363cbef2aa9938693610a0c9391929091600401612892565b60006040518083038185885af1158015610a2a573d6000803e3d6000fd5b50505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610a719190810190612a4a565b5050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f184604051610aa39190612b06565b60405180910390a150505050565b73ffffffffffffffffffffffffffffffffffffffff831615610ad85761063b838383610ee6565b61063b8282611068565b600083808203610b1e576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008686610b2d600185612628565b818110610b3c57610b3c612c19565b9050602002810190610b4e9190612c48565b610b5f906080810190606001612647565b90506000610b6c82611192565b905073ffffffffffffffffffffffffffffffffffffffff8216610b9657610b933482612628565b90505b6000610ba2898961124b565b9050610bae8989611357565b604080516060810182528c815273ffffffffffffffffffffffffffffffffffffffff89166020820152908101879052610be9818b8b856113c4565b600083610bf586611192565b610bff9190612628565b905073ffffffffffffffffffffffffffffffffffffffff8516610c2957610c268882612628565b90505b8b811015610c6d576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018d905260248101829052604401610626565b9c9b505050505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8416610cca576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610d17576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015610d88573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610dac91906127db565b9050610dba828686866117b5565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015610e2a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e4e91906127db565b610e589190612628565b14610e8f576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b81601452806034526f095ea7b300000000000000000000000060005260206000604460106000875af13d156001600051141716610edc57633e3f8f736000526004601cfd5b6000603452505050565b73ffffffffffffffffffffffffffffffffffffffff8316610f33576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610f80576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015610fed573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061101191906127db565b905080821115611057576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610626565b611062848484611891565b50505050565b73ffffffffffffffffffffffffffffffffffffffff82166110b5576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b478111156110f8576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101829052476024820152604401610626565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114611152576040519150601f19603f3d011682016040523d82523d6000602084013e611157565b606091505b505090508061063b576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff821615611243576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa15801561121a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061123e91906127db565b611245565b475b92915050565b60608160008167ffffffffffffffff8111156112695761126961225a565b604051908082528060200260200182016040528015611292578160200160208202803683370190505b5090506000805b8381101561134c578686828181106112b3576112b3612c19565b90506020028101906112c59190612c48565b6112d6906080810190606001612647565b91506112e182611192565b8382815181106112f3576112f3612c19565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216611344573483828151811061132c5761132c612c19565b602002602001018181516113409190612628565b9052505b600101611299565b509095945050505050565b60005b8181101561063b573683838381811061137557611375612c19565b90506020028101906113879190612c48565b905061139960e0820160c08301612c86565b156113bb576113bb6113b16060830160408401612647565b82608001356104c0565b5060010161135a565b6020840151604085015184918491849083600181146116ce57600086866113ec600185612628565b8181106113fb576113fb612c19565b905060200281019061140d9190612c48565b61141e906080810190606001612647565b9050600089815b818110156115cb57368d8d8381811061144057611440612c19565b90506020028101906114529190612c48565b90506114816114676060830160408401612647565b73ffffffffffffffffffffffffffffffffffffffff161590565b806114e457506114e461149a6040830160208401612647565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b80156114fb57506114fb61149a6020830183612647565b8015611580575061158061151260a0830183612ca3565b61152191600491600091612d0f565b61152a91612d39565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b6115b6576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8e516115c290826118e7565b50600101611425565b505060005b6115db600185612628565b8110156116c65760008989838181106115f6576115f6612c19565b90506020028101906116089190612c48565b611619906080810190606001612647565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146116bd5786828151811061166057611660612c19565b602002602001015161167182611192565b61167b9190612628565b9250600073ffffffffffffffffffffffffffffffffffffffff8216156116a25760006116a4565b865b905083156116bb576116bb828a6102ba8488612628565b505b506001016115d0565b5050506117a9565b8760005b818110156117a657368b8b838181106116ed576116ed612c19565b90506020028101906116ff9190612c48565b90506117146114676060830160408401612647565b8061172d575061172d61149a6040830160208401612647565b8015611744575061174461149a6020830183612647565b801561175b575061175b61151260a0830183612ca3565b611791576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8c5161179d90826118e7565b506001016116d2565b50505b50505050505050505050565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526110629085907f23b872dd00000000000000000000000000000000000000000000000000000000906084015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611bc5565b60405173ffffffffffffffffffffffffffffffffffffffff831660248201526044810182905261063b9084907fa9059cbb000000000000000000000000000000000000000000000000000000009060640161180f565b6118fd6118f76020830183612647565b3b151590565b611933576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101356000819003611973576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006119886114676060850160408601612647565b611993576000611999565b82608001355b905060006119b56119b06060860160408701612647565b611192565b905060006119cc6119b06080870160608801612647565b905082600003611a0357611a036119e96060870160408801612647565b6119f96040880160208901612647565b8760800135611cd4565b8460800135821015611a4e576040517fcf4791810000000000000000000000000000000000000000000000000000000081526080860135600482015260248101839052604401610626565b600080611a5e6020880188612647565b73ffffffffffffffffffffffffffffffffffffffff1685611a8260a08a018a612ca3565b604051611a90929190612d81565b60006040518083038185875af1925050503d8060008114611acd576040519150601f19603f3d011682016040523d82523d6000602084013e611ad2565b606091505b509150915081611ae557611ae581611e0b565b6000611afa6119b060808a0160608b01612647565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b3889611b2b60208b018b612647565b611b3b60608c0160408d01612647565b611b4b60808d0160608e01612647565b8c60800135898711611b5d5786611b67565b611b678a88612628565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b6000611c27826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611e159092919063ffffffff16565b9050805160001480611c48575080806020019051810190611c489190612d91565b61063b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610626565b73ffffffffffffffffffffffffffffffffffffffff8316611cf457505050565b73ffffffffffffffffffffffffffffffffffffffff8216611d41576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa158015611db6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611dda91906127db565b101561063b5761063b83837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611e2c565b8051602082018181fd5b6060611e248484600085611f1c565b949350505050565b6040805173ffffffffffffffffffffffffffffffffffffffff8416602482015260448082018490528251808303909101815260649091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f095ea7b300000000000000000000000000000000000000000000000000000000179052611eb88482612035565b6110625760405173ffffffffffffffffffffffffffffffffffffffff8416602482015260006044820152611f129085907f095ea7b3000000000000000000000000000000000000000000000000000000009060640161180f565b6110628482611bc5565b606082471015611fae576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610626565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611fd79190612dae565b60006040518083038185875af1925050503d8060008114612014576040519150601f19603f3d011682016040523d82523d6000602084013e612019565b606091505b509150915061202a878383876120f6565b979650505050505050565b60008060008473ffffffffffffffffffffffffffffffffffffffff168460405161205f9190612dae565b6000604051808303816000865af19150503d806000811461209c576040519150601f19603f3d011682016040523d82523d6000602084013e6120a1565b606091505b50915091508180156120cb5750805115806120cb5750808060200190518101906120cb9190612d91565b80156120ed575073ffffffffffffffffffffffffffffffffffffffff85163b15155b95945050505050565b6060831561218c5782516000036121855773ffffffffffffffffffffffffffffffffffffffff85163b612185576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610626565b5081611e24565b611e2483838151156121a15781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106269190612dc0565b600060a082840312156121e757600080fd5b50919050565b6000806040838503121561220057600080fd5b823567ffffffffffffffff8082111561221857600080fd5b90840190610140828703121561222d57600080fd5b9092506020840135908082111561224357600080fd5b50612250858286016121d5565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff811182821017156122ad576122ad61225a565b60405290565b6040805190810167ffffffffffffffff811182821017156122ad576122ad61225a565b6040516080810167ffffffffffffffff811182821017156122ad576122ad61225a565b60405160e0810167ffffffffffffffff811182821017156122ad576122ad61225a565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff811182821017156123635761236361225a565b604052919050565b600067ffffffffffffffff8211156123855761238561225a565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600082601f8301126123c257600080fd5b81356123d56123d08261236b565b61231c565b8181528460208386010111156123ea57600080fd5b816020850160208301376000918101602001919091529392505050565b73ffffffffffffffffffffffffffffffffffffffff8116811461242957600080fd5b50565b803561243781612407565b919050565b801515811461242957600080fd5b80356124378161243c565b6000610140828403121561246857600080fd5b612470612289565b905081358152602082013567ffffffffffffffff8082111561249157600080fd5b61249d858386016123b1565b602084015260408401359150808211156124b657600080fd5b506124c3848285016123b1565b6040830152506124d56060830161242c565b60608201526124e66080830161242c565b60808201526124f760a0830161242c565b60a082015260c082013560c082015260e082013560e082015261010061251e81840161244a565b9082015261012061253083820161244a565b9082015292915050565b6000806000806060858703121561255057600080fd5b843567ffffffffffffffff8082111561256857600080fd5b61257488838901612455565b9550602087013591508082111561258a57600080fd5b818701915087601f83011261259e57600080fd5b8135818111156125ad57600080fd5b8860208260051b85010111156125c257600080fd5b6020830195508094505060408701359150808211156125e057600080fd5b506125ed878288016121d5565b91505092959194509250565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b81810381811115611245576112456125f9565b60006112453683612455565b60006020828403121561265957600080fd5b813561266481612407565b9392505050565b803563ffffffff8116811461243757600080fd5b60006040828403121561269157600080fd5b6126996122b3565b9050813581526020820135602082015292915050565b600060a082360312156126c157600080fd5b6126c96122d6565b823561ffff811681146126db57600080fd5b8152602083013567ffffffffffffffff808211156126f857600080fd5b818501915060e0823603121561270d57600080fd5b6127156122f9565b61271e8361266b565b815260208301356020820152604083013560408201526060830135606082015260808301358281111561275057600080fd5b61275c368286016123b1565b60808301525060a08301358281111561277457600080fd5b612780368286016123b1565b60a08301525060c08301358281111561279857600080fd5b6127a4368286016123b1565b60c0830152506020840152506127bf9050366040850161267f565b60408201526127d06080840161242c565b606082015292915050565b6000602082840312156127ed57600080fd5b5051919050565b60006020828403121561280657600080fd5b815161266481612407565b80820180821115611245576112456125f9565b60005b8381101561283f578181015183820152602001612827565b50506000910152565b60008151808452612860816020860160208601612824565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6080815263ffffffff8451166080820152602084015160a0820152604084015160c0820152606084015160e08201526000608085015160e06101008401526128de610160840182612848565b905060a08601517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff80808584030161012086015261291b8383612848565b925060c0880151915080858403016101408601525061293a8282612848565b92505050612955602083018580518252602090810151910152565b73ffffffffffffffffffffffffffffffffffffffff83166060830152611e24565b60006040828403121561298857600080fd5b6129906122b3565b9050815181526020820151602082015292915050565b6000604082840312156129b857600080fd5b6129c06122b3565b9050815168ffffffffffffffffff811681146129db57600080fd5b8152602082015167ffffffffffffffff8111156129f757600080fd5b8201601f81018413612a0857600080fd5b8051612a166123d08261236b565b818152856020838501011115612a2b57600080fd5b612a3c826020830160208601612824565b602084015250909392505050565b600080600083850360e0811215612a6057600080fd5b6080811215612a6e57600080fd5b506040516060810167ffffffffffffffff8282108183111715612a9357612a9361225a565b8160405286518352602087015191508082168214612ab057600080fd5b816020840152612ac38860408901612976565b6040840152829550612ad88860808901612976565b945060c0870151925080831115612aee57600080fd5b5050612afc868287016129a6565b9150509250925092565b602081528151602082015260006020830151610140806040850152612b2f610160850183612848565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0858403016060860152612b6a8382612848565b9250506060850151612b94608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e0850151610100818187015280870151915050610120612c078187018315159052565b90950151151593019290925250919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112612c7c57600080fd5b9190910192915050565b600060208284031215612c9857600080fd5b81356126648161243c565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112612cd857600080fd5b83018035915067ffffffffffffffff821115612cf357600080fd5b602001915036819003821315612d0857600080fd5b9250929050565b60008085851115612d1f57600080fd5b83861115612d2c57600080fd5b5050820193919092039150565b7fffffffff000000000000000000000000000000000000000000000000000000008135818116916004851015612d795780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b600060208284031215612da357600080fd5b81516126648161243c565b60008251612c7c818460208701612824565b602081526000612664602083018461284856fea2646970667358221220b506172b00cd096298e6fdf6436ca23fbd7bb8f883b6add99c42803fd0a2c47764736f6c63430008110033";
const isSuperArgs = (xs) => xs.length > 1;
class StargateFacetV2__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    deploy(_tokenMessaging, overrides) {
        return super.deploy(_tokenMessaging, overrides || {});
    }
    getDeployTransaction(_tokenMessaging, overrides) {
        return super.getDeployTransaction(_tokenMessaging, overrides || {});
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
exports.StargateFacetV2__factory = StargateFacetV2__factory;
Object.defineProperty(StargateFacetV2__factory, "bytecode", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _bytecode
});
Object.defineProperty(StargateFacetV2__factory, "abi", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _abi
});
//# sourceMappingURL=StargateFacetV2__factory.js.map