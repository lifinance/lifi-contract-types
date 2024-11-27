"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcrossFacetV3__factory = void 0;
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
        ],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "spokePool",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "address",
                internalType: "contract IAcrossSpokePool",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "startBridgeTokensViaAcrossV3",
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
                name: "_acrossData",
                type: "tuple",
                internalType: "struct AcrossFacetV3.AcrossV3Data",
                components: [
                    {
                        name: "receiverAddress",
                        type: "address",
                        internalType: "address",
                    },
                    {
                        name: "refundAddress",
                        type: "address",
                        internalType: "address",
                    },
                    {
                        name: "receivingAssetId",
                        type: "address",
                        internalType: "address",
                    },
                    {
                        name: "outputAmount",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "exclusiveRelayer",
                        type: "address",
                        internalType: "address",
                    },
                    {
                        name: "quoteTimestamp",
                        type: "uint32",
                        internalType: "uint32",
                    },
                    {
                        name: "fillDeadline",
                        type: "uint32",
                        internalType: "uint32",
                    },
                    {
                        name: "exclusivityDeadline",
                        type: "uint32",
                        internalType: "uint32",
                    },
                    {
                        name: "message",
                        type: "bytes",
                        internalType: "bytes",
                    },
                ],
            },
        ],
        outputs: [],
        stateMutability: "payable",
    },
    {
        type: "function",
        name: "swapAndStartBridgeTokensViaAcrossV3",
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
                name: "_acrossData",
                type: "tuple",
                internalType: "struct AcrossFacetV3.AcrossV3Data",
                components: [
                    {
                        name: "receiverAddress",
                        type: "address",
                        internalType: "address",
                    },
                    {
                        name: "refundAddress",
                        type: "address",
                        internalType: "address",
                    },
                    {
                        name: "receivingAssetId",
                        type: "address",
                        internalType: "address",
                    },
                    {
                        name: "outputAmount",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "exclusiveRelayer",
                        type: "address",
                        internalType: "address",
                    },
                    {
                        name: "quoteTimestamp",
                        type: "uint32",
                        internalType: "uint32",
                    },
                    {
                        name: "fillDeadline",
                        type: "uint32",
                        internalType: "uint32",
                    },
                    {
                        name: "exclusivityDeadline",
                        type: "uint32",
                        internalType: "uint32",
                    },
                    {
                        name: "message",
                        type: "bytes",
                        internalType: "bytes",
                    },
                ],
            },
        ],
        outputs: [],
        stateMutability: "payable",
    },
    {
        type: "function",
        name: "wrappedNative",
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
const _bytecode = "0x60c06040523480156200001157600080fd5b50604051620029eb380380620029eb833981016040819052620000349162000065565b6001600160a01b039182166080521660a052620000a4565b6001600160a01b03811681146200006257600080fd5b50565b600080604083850312156200007957600080fd5b825162000086816200004c565b602084015190925062000099816200004c565b809150509250929050565b60805160a051612907620000e46000396000818160db01526107b0015260008181607e0152818161076a015281816108ac01526108ec01526129076000f3fe60806040526004361061003f5760003560e01c8063315ea70f1461004457806334a3e4a014610059578063afdac3d61461006c578063eb6d3a11146100c9575b600080fd5b61005761005236600461229a565b6100fd565b005b6100576100673660046122fe565b6102e7565b34801561007857600080fd5b506100a07f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b3480156100d557600080fd5b506100a07f000000000000000000000000000000000000000000000000000000000000000081565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610178576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815533600061018934476123bd565b9050846101ae8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156101e5576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c00151600003610223576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610260576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b858061010001511561029e576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102b087608001518860c001516104d5565b6102ba8787610655565b50479050818111156102db576102db6000846102d685856123bd565b610a38565b50506000909155505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610362576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815533600061037334476123bd565b9050868061010001516103b2576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b876103d58160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561040c576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c0015160000361044a576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610487576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61049c89600001518a60c001518a8a33610a69565b60c08a01526104ab8987610655565b50479050818111156104c7576104c76000846102d685856123bd565b505060009091555050505050565b8060000361050f576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166105685780341015610564576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa1580156105d5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105f991906123f7565b905081811015610644576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044015b60405180910390fd5b61065083333085610bac565b505050565b6101208201511515600061066d610100840184612410565b9050111515146106a9576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8161012001511580156106f857506106c4602082018261247c565b73ffffffffffffffffffffffffffffffffffffffff168260a0015173ffffffffffffffffffffffffffffffffffffffff1614155b1561072f576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608082015173ffffffffffffffffffffffffffffffffffffffff166108a25760c082015173ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001690637b939232906107a1604085016020860161247c565b6107ae602086018661247c565b7f00000000000000000000000000000000000000000000000000000000000000006107df606088016040890161247c565b60c089015160e08a015160608a0135906107ff60a08c0160808d0161247c565b61080f60c08d0160a08e0161249e565b61081f60e08e0160c08f0161249e565b8d60e0016020810190610832919061249e565b8e8061010001906108439190612410565b6040518f63ffffffff1660e01b815260040161086b9d9c9b9a9998979695949392919061250d565b6000604051808303818588803b15801561088457600080fd5b505af1158015610898573d6000803e3d6000fd5b50505050506109fd565b6108d582608001517f00000000000000000000000000000000000000000000000000000000000000008460c00151610dc6565b73ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016637b939232610921604084016020850161247c565b61092e602085018561247c565b6080860151610943606087016040880161247c565b60c088015160e089015160608901359061096360a08b0160808c0161247c565b61097360c08c0160a08d0161249e565b61098360e08d0160c08e0161249e565b6109946101008e0160e08f0161249e565b6109a26101008f018f612410565b6040518e63ffffffff1660e01b81526004016109ca9d9c9b9a9998979695949392919061250d565b600060405180830381600087803b1580156109e457600080fd5b505af11580156109f8573d6000803e3d6000fd5b505050505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f182604051610a2c9190612670565b60405180910390a15050565b73ffffffffffffffffffffffffffffffffffffffff831615610a5f57610650838383610f09565b610650828261108b565b600082808203610aa5576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008585610ab46001856123bd565b818110610ac357610ac3612783565b9050602002810190610ad591906127b2565b610ae690608081019060600161247c565b90506000610af3826111b5565b905073ffffffffffffffffffffffffffffffffffffffff8216610b1d57610b1a34826123bd565b90505b6000610b29888861126e565b9050610b35888861137a565b610b428a898989856113e7565b600082610b4e856111b5565b610b5891906123bd565b905089811015610b9e576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b90526024810182905260440161063b565b9a9950505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8416610bf9576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610c46576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015610cb7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cdb91906123f7565b9050610ce982868686611799565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015610d59573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d7d91906123f7565b610d8791906123bd565b14610dbe576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610de657505050565b73ffffffffffffffffffffffffffffffffffffffff8216610e33576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa158015610ea8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ecc91906123f7565b101561065057610ede83836000611875565b61065083837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611875565b73ffffffffffffffffffffffffffffffffffffffff8316610f56576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610fa3576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015611010573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061103491906123f7565b90508082111561107a576040517fcf479181000000000000000000000000000000000000000000000000000000008152600481018390526024810182905260440161063b565b6110858484846119f7565b50505050565b73ffffffffffffffffffffffffffffffffffffffff82166110d8576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b4781111561111b576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810182905247602482015260440161063b565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114611175576040519150601f19603f3d011682016040523d82523d6000602084013e61117a565b606091505b5050905080610650576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff821615611266576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa15801561123d573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061126191906123f7565b611268565b475b92915050565b60608160008167ffffffffffffffff81111561128c5761128c612053565b6040519080825280602002602001820160405280156112b5578160200160208202803683370190505b5090506000805b8381101561136f578686828181106112d6576112d6612783565b90506020028101906112e891906127b2565b6112f990608081019060600161247c565b9150611304826111b5565b83828151811061131657611316612783565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216611367573483828151811061134f5761134f612783565b6020026020010181815161136391906123bd565b9052505b6001016112bc565b509095945050505050565b60005b81811015610650573683838381811061139857611398612783565b90506020028101906113aa91906127b2565b90506113bc60e0820160c083016127f0565b156113de576113de6113d4606083016040840161247c565b82608001356104d5565b5060010161137d565b8383838382600181146116b457600085856114036001856123bd565b81811061141257611412612783565b905060200281019061142491906127b2565b61143590608081019060600161247c565b9050600089815b818110156115e057368d8d8381811061145757611457612783565b905060200281019061146991906127b2565b905061149861147e606083016040840161247c565b73ffffffffffffffffffffffffffffffffffffffff161590565b806114fb57506114fb6114b1604083016020840161247c565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b801561151257506115126114b1602083018361247c565b8015611597575061159761152960a0830183612410565b6115389160049160009161280d565b61154191612837565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b6115cd576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6115d78f82611a4d565b5060010161143c565b505060005b6115f06001856123bd565b8110156116ac57600088888381811061160b5761160b612783565b905060200281019061161d91906127b2565b61162e90608081019060600161247c565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146116a35785828151811061167557611675612783565b6020026020010151611686826111b5565b61169091906123bd565b925082156116a3576116a3818885610a38565b506001016115e5565b50505061178d565b8760005b8181101561178a57368b8b838181106116d3576116d3612783565b90506020028101906116e591906127b2565b90506116fa61147e606083016040840161247c565b8061171357506117136114b1604083016020840161247c565b801561172a575061172a6114b1602083018361247c565b8015611741575061174161152960a0830183612410565b611777576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6117818d82611a4d565b506001016116b8565b50505b50505050505050505050565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526110859085907f23b872dd00000000000000000000000000000000000000000000000000000000906084015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611d2b565b80158061191557506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa1580156118ef573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061191391906123f7565b155b6119a1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e636500000000000000000000606482015260840161063b565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526106509084907f095ea7b300000000000000000000000000000000000000000000000000000000906064016117f3565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526106509084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064016117f3565b611a63611a5d602083018361247c565b3b151590565b611a99576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101356000819003611ad9576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000611aee61147e606085016040860161247c565b611af9576000611aff565b82608001355b90506000611b1b611b16606086016040870161247c565b6111b5565b90506000611b32611b16608087016060880161247c565b905082600003611b6957611b69611b4f606087016040880161247c565b611b5f604088016020890161247c565b8760800135610dc6565b8460800135821015611bb4576040517fcf479181000000000000000000000000000000000000000000000000000000008152608086013560048201526024810183905260440161063b565b600080611bc4602088018861247c565b73ffffffffffffffffffffffffffffffffffffffff1685611be860a08a018a612410565b604051611bf692919061287f565b60006040518083038185875af1925050503d8060008114611c33576040519150601f19603f3d011682016040523d82523d6000602084013e611c38565b606091505b509150915081611c4b57611c4b81611e3a565b6000611c60611b1660808a0160608b0161247c565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b3889611c9160208b018b61247c565b611ca160608c0160408d0161247c565b611cb160808d0160608e0161247c565b8c60800135898711611cc35786611ccd565b611ccd8a886123bd565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b6000611d8d826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611e449092919063ffffffff16565b9050805160001480611dae575080806020019051810190611dae919061288f565b610650576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f74207375636365656400000000000000000000000000000000000000000000606482015260840161063b565b8051602082018181fd5b6060611e538484600085611e5b565b949350505050565b606082471015611eed576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c0000000000000000000000000000000000000000000000000000606482015260840161063b565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611f1691906128ac565b60006040518083038185875af1925050503d8060008114611f53576040519150601f19603f3d011682016040523d82523d6000602084013e611f58565b606091505b5091509150611f6987838387611f74565b979650505050505050565b6060831561200a5782516000036120035773ffffffffffffffffffffffffffffffffffffffff85163b612003576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161063b565b5081611e53565b611e53838381511561201f5781518083602001fd5b806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161063b91906128be565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff811182821017156120a6576120a6612053565b60405290565b600082601f8301126120bd57600080fd5b813567ffffffffffffffff808211156120d8576120d8612053565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810190828211818310171561211e5761211e612053565b8160405283815286602085880101111561213757600080fd5b836020870160208301376000602085830101528094505050505092915050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461217b57600080fd5b919050565b801515811461218e57600080fd5b50565b803561217b81612180565b600061014082840312156121af57600080fd5b6121b7612082565b905081358152602082013567ffffffffffffffff808211156121d857600080fd5b6121e4858386016120ac565b602084015260408401359150808211156121fd57600080fd5b5061220a848285016120ac565b60408301525061221c60608301612157565b606082015261222d60808301612157565b608082015261223e60a08301612157565b60a082015260c082013560c082015260e082013560e0820152610100612265818401612191565b90820152610120612277838201612191565b9082015292915050565b6000610120828403121561229457600080fd5b50919050565b600080604083850312156122ad57600080fd5b823567ffffffffffffffff808211156122c557600080fd5b6122d18683870161219c565b935060208501359150808211156122e757600080fd5b506122f485828601612281565b9150509250929050565b6000806000806060858703121561231457600080fd5b843567ffffffffffffffff8082111561232c57600080fd5b6123388883890161219c565b9550602087013591508082111561234e57600080fd5b818701915087601f83011261236257600080fd5b81358181111561237157600080fd5b8860208260051b850101111561238657600080fd5b6020830195508094505060408701359150808211156123a457600080fd5b506123b187828801612281565b91505092959194509250565b81810381811115611268577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006020828403121561240957600080fd5b5051919050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261244557600080fd5b83018035915067ffffffffffffffff82111561246057600080fd5b60200191503681900382131561247557600080fd5b9250929050565b60006020828403121561248e57600080fd5b61249782612157565b9392505050565b6000602082840312156124b057600080fd5b813563ffffffff8116811461249757600080fd5b8183528181602085013750600060208284010152600060207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b73ffffffffffffffffffffffffffffffffffffffff8e16815273ffffffffffffffffffffffffffffffffffffffff8d16602082015273ffffffffffffffffffffffffffffffffffffffff8c16604082015273ffffffffffffffffffffffffffffffffffffffff8b1660608201528960808201528860a08201528760c082015273ffffffffffffffffffffffffffffffffffffffff871660e082015263ffffffff861661010082015263ffffffff85166101208201526125d561014082018563ffffffff169052565b61018061016082015260006125ef610180830184866124c4565b9f9e505050505050505050505050505050565b60005b8381101561261d578181015183820152602001612605565b50506000910152565b6000815180845261263e816020860160208601612602565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b602081528151602082015260006020830151610140806040850152612699610160850183612626565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08584030160608601526126d48382612626565b92505060608501516126fe608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206127718187018315159052565b90950151151593019290925250919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff218336030181126127e657600080fd5b9190910192915050565b60006020828403121561280257600080fd5b813561249781612180565b6000808585111561281d57600080fd5b8386111561282a57600080fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156128775780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b6000602082840312156128a157600080fd5b815161249781612180565b600082516127e6818460208701612602565b602081526000612497602083018461262656fea26469706673582212203000f79a33b2e6a7a15a0bcffdeff0ef4d4b456ec85deb85473a580d40275a8f64736f6c63430008110033";
const isSuperArgs = (xs) => xs.length > 1;
class AcrossFacetV3__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    deploy(_spokePool, _wrappedNative, overrides) {
        return super.deploy(_spokePool, _wrappedNative, overrides || {});
    }
    getDeployTransaction(_spokePool, _wrappedNative, overrides) {
        return super.getDeployTransaction(_spokePool, _wrappedNative, overrides || {});
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
exports.AcrossFacetV3__factory = AcrossFacetV3__factory;
Object.defineProperty(AcrossFacetV3__factory, "bytecode", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _bytecode
});
Object.defineProperty(AcrossFacetV3__factory, "abi", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _abi
});
//# sourceMappingURL=AcrossFacetV3__factory.js.map