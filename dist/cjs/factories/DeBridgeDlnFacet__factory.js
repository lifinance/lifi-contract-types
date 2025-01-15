"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeBridgeDlnFacet__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        type: "constructor",
        inputs: [
            {
                name: "_dlnSource",
                type: "address",
                internalType: "contract IDlnSource",
            },
        ],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "dlnSource",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "address",
                internalType: "contract IDlnSource",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "getDeBridgeChainId",
        inputs: [
            {
                name: "_chainId",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        outputs: [
            {
                name: "",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "initDeBridgeDln",
        inputs: [
            {
                name: "chainIdConfigs",
                type: "tuple[]",
                internalType: "struct DeBridgeDlnFacet.ChainIdConfig[]",
                components: [
                    {
                        name: "chainId",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "deBridgeChainId",
                        type: "uint256",
                        internalType: "uint256",
                    },
                ],
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "setDeBridgeChainId",
        inputs: [
            {
                name: "_chainId",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "_deBridgeChainId",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "startBridgeTokensViaDeBridgeDln",
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
                name: "_deBridgeData",
                type: "tuple",
                internalType: "struct DeBridgeDlnFacet.DeBridgeDlnData",
                components: [
                    {
                        name: "receivingAssetId",
                        type: "bytes",
                        internalType: "bytes",
                    },
                    {
                        name: "receiver",
                        type: "bytes",
                        internalType: "bytes",
                    },
                    {
                        name: "orderAuthorityDst",
                        type: "bytes",
                        internalType: "bytes",
                    },
                    {
                        name: "minAmountOut",
                        type: "uint256",
                        internalType: "uint256",
                    },
                ],
            },
        ],
        outputs: [],
        stateMutability: "payable",
    },
    {
        type: "function",
        name: "swapAndStartBridgeTokensViaDeBridgeDln",
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
                name: "_deBridgeData",
                type: "tuple",
                internalType: "struct DeBridgeDlnFacet.DeBridgeDlnData",
                components: [
                    {
                        name: "receivingAssetId",
                        type: "bytes",
                        internalType: "bytes",
                    },
                    {
                        name: "receiver",
                        type: "bytes",
                        internalType: "bytes",
                    },
                    {
                        name: "orderAuthorityDst",
                        type: "bytes",
                        internalType: "bytes",
                    },
                    {
                        name: "minAmountOut",
                        type: "uint256",
                        internalType: "uint256",
                    },
                ],
            },
        ],
        outputs: [],
        stateMutability: "payable",
    },
    {
        type: "event",
        name: "BridgeToNonEVMChain",
        inputs: [
            {
                name: "transactionId",
                type: "bytes32",
                indexed: true,
                internalType: "bytes32",
            },
            {
                name: "destinationChainId",
                type: "uint256",
                indexed: true,
                internalType: "uint256",
            },
            {
                name: "receiver",
                type: "bytes",
                indexed: false,
                internalType: "bytes",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "DeBridgeChainIdSet",
        inputs: [
            {
                name: "chainId",
                type: "uint256",
                indexed: true,
                internalType: "uint256",
            },
            {
                name: "deBridgeChainId",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "DeBridgeInitialized",
        inputs: [
            {
                name: "chainIdConfigs",
                type: "tuple[]",
                indexed: false,
                internalType: "struct DeBridgeDlnFacet.ChainIdConfig[]",
                components: [
                    {
                        name: "chainId",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "deBridgeChainId",
                        type: "uint256",
                        internalType: "uint256",
                    },
                ],
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "DlnOrderCreated",
        inputs: [
            {
                name: "orderId",
                type: "bytes32",
                indexed: true,
                internalType: "bytes32",
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
        name: "EmptyNonEVMAddress",
        inputs: [],
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
        name: "InvalidConfig",
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
        name: "NotInitialized",
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
        name: "OnlyContractOwner",
        inputs: [],
    },
    {
        type: "error",
        name: "ReentrancyError",
        inputs: [],
    },
    {
        type: "error",
        name: "UnknownDeBridgeChain",
        inputs: [],
    },
];
const _bytecode = "0x60a06040523480156200001157600080fd5b506040516200328738038062003287833981016040819052620000349162000046565b6001600160a01b031660805262000078565b6000602082840312156200005957600080fd5b81516001600160a01b03811681146200007157600080fd5b9392505050565b6080516131d1620000b66000396000818160d701528181610389015281816106df01528181610d9301528181610df90152610ed501526131d16000f3fe6080604052600436106100655760003560e01c80638f4bef1c116100435780638f4bef1c146100c55780639f5e58f51461011e578063f2455b711461013e57600080fd5b80632c7d2db01461006a5780634004633e1461007f5780635df39dde14610092575b600080fd5b61007d6100783660046129c4565b61015e565b005b61007d61008d366004612a83565b61049e565b34801561009e57600080fd5b506100b26100ad366004612ae7565b61079d565b6040519081526020015b60405180910390f35b3480156100d157600080fd5b506100f97f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100bc565b34801561012a57600080fd5b5061007d610139366004612b00565b61080d565b34801561014a57600080fd5b5061007d610159366004612b75565b61094a565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016101d9576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006101ea3447612bc6565b905086806101000151610229576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8780610120015115610267576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8861028a8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156102c1576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036102ff576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361033c576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8661034a6020820182612bd9565b9050600003610385576040517f7a7ed98f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166335087f0a6040518163ffffffff1660e01b81526004016020604051808303816000875af11580156103f4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104189190612c45565b60808d01518d5160c08f0151929350909161045a91908e8e3373ffffffffffffffffffffffffffffffffffffffff8716156104535787610a19565b6000610a19565b60c08e015261046a8d8b84610bb9565b504794505050508282111590506104905761049060008461048b8585612bc6565b611054565b505060009091555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610519576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815533600061052a3447612bc6565b90508461054f8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610586576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036105c4576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610601576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8461060f6020820182612bd9565b905060000361064a576040517f7a7ed98f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8680610100015115610688576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b87806101200151156106c6576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6106d889608001518a60c0015161108a565b61077389897f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166335087f0a6040518163ffffffff1660e01b81526004016020604051808303816000875af115801561074a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061076e9190612c45565b610bb9565b504792505050818111156107915761079160008461048b8585612bc6565b50506000909155505050565b60008181527fddf87bcc92bf634bfc8852f5a61f9209ce340952b463e87b4242394f116ee96b60208190526040822054808303610806576040517f9322741e00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b9392505050565b6000819003610848576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610850611200565b7fddf87bcc92bf634bfc8852f5a61f9209ce340952b463e87b4242394f116ee96b60005b828110156108dc5783838281811061088e5761088e612c5e565b905060400201602001358260000160008686858181106108b0576108b0612c5e565b6040908102929092013583525060208201929092520160002055806108d481612c8d565b915050610874565b50600181810180547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001690911790556040517f0cd20b776bdd48fad561fb65af5b002cf62ca0e0d5e89f165a9364d9da52a21b9061093d9085908590612cc5565b60405180910390a1505050565b610952611200565b7fddf87bcc92bf634bfc8852f5a61f9209ce340952b463e87b4242394f116ee96c547fddf87bcc92bf634bfc8852f5a61f9209ce340952b463e87b4242394f116ee96b9060ff166109cf576040517f87138d5c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008381526020828152604091829020849055905183815284917fdc55a9203281afff9f6c3a20ab84a4858a398d4b5050c87a02ca78e573d8b34b910160405180910390a2505050565b600083808203610a55576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008686610a64600185612bc6565b818110610a7357610a73612c5e565b9050602002810190610a859190612d0c565b610a96906080810190606001612d4a565b90506000610aa382611275565b905073ffffffffffffffffffffffffffffffffffffffff8216610acd57610aca3482612bc6565b90505b6000610ad9898961132e565b9050610ae5898961143a565b604080516060810182528c815273ffffffffffffffffffffffffffffffffffffffff89166020820152908101879052610b20818b8b856114a7565b600083610b2c86611275565b610b369190612bc6565b905073ffffffffffffffffffffffffffffffffffffffff8516610b6057610b5d8882612bc6565b90505b8b811015610ba9576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018d9052602481018290526044015b60405180910390fd5b9c9b505050505050505050505050565b6040805161016081018252608085015173ffffffffffffffffffffffffffffffffffffffff16815260c085015160208201526000918101610bfa8580612bd9565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152505050908252506060850135602082015260e0860151604090910190610c4f9061079d565b8152602001848060200190610c649190612bd9565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250505090825250336020820152604090810190610cb390860186612bd9565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201829052509385525050604080516020818101835284825280860191909152815180820183529384528185019390935251606090930192610d4d923392500160609190911b7fffffffffffffffffffffffffffffffffffffffff00000000000000000000000016815260140190565b60405160208183030381529060405281525090506000610d85856080015173ffffffffffffffffffffffffffffffffffffffff161590565b610e7e57610dbc85608001517f00000000000000000000000000000000000000000000000000000000000000008760c00151611898565b6040517ffbe16ca700000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169063fbe16ca7908590610e3490869061780990600401612dd3565b60206040518083038185885af1158015610e52573d6000803e3d6000fd5b50505050506040513d601f19601f82011682018060405250810190610e779190612c45565b9050610f54565b828260200151610e8e9190612bc6565b602083015260c08501516040517ffbe16ca700000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169163fbe16ca791610f0e90869061780990600401612dd3565b60206040518083038185885af1158015610f2c573d6000803e3d6000fd5b50505050506040513d601f19601f82011682018060405250810190610f519190612c45565b90505b60405181907ff19318a6980c94fb206f1e506fa7017ed9dd61959634e8fa128a38df4e527db790600090a27311f111f111f111f111f111f111f111f111f111f173ffffffffffffffffffffffffffffffffffffffff168560a0015173ffffffffffffffffffffffffffffffffffffffff16036110165760e085015185517ff9b69f466270c99522169d563c0a430e88c52865ec33b1cc36ee2a4a6ea5170b610fff6020880188612bd9565b60405161100d929190612f5a565b60405180910390a35b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1856040516110459190612fa7565b60405180910390a15050505050565b73ffffffffffffffffffffffffffffffffffffffff8316156110805761107b8383836119cf565b505050565b61107b8282611b51565b806000036110c4576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661111d5780341015611119576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa15801561118a573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111ae9190612c45565b9050818110156111f4576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610ba0565b61107b83333085611c7b565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c6004015473ffffffffffffffffffffffffffffffffffffffff163314611273576040517f277d76f800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b600073ffffffffffffffffffffffffffffffffffffffff821615611326576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa1580156112fd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113219190612c45565b611328565b475b92915050565b60608160008167ffffffffffffffff81111561134c5761134c61277e565b604051908082528060200260200182016040528015611375578160200160208202803683370190505b5090506000805b8381101561142f5786868281811061139657611396612c5e565b90506020028101906113a89190612d0c565b6113b9906080810190606001612d4a565b91506113c482611275565b8382815181106113d6576113d6612c5e565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216611427573483828151811061140f5761140f612c5e565b602002602001018181516114239190612bc6565b9052505b60010161137c565b509095945050505050565b60005b8181101561107b573683838381811061145857611458612c5e565b905060200281019061146a9190612d0c565b905061147c60e0820160c083016130ba565b1561149e5761149e6114946060830160408401612d4a565b826080013561108a565b5060010161143d565b6020840151604085015184918491849083600181146117b157600086866114cf600185612bc6565b8181106114de576114de612c5e565b90506020028101906114f09190612d0c565b611501906080810190606001612d4a565b9050600089815b818110156116ae57368d8d8381811061152357611523612c5e565b90506020028101906115359190612d0c565b905061156461154a6060830160408401612d4a565b73ffffffffffffffffffffffffffffffffffffffff161590565b806115c757506115c761157d6040830160208401612d4a565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b80156115de57506115de61157d6020830183612d4a565b801561166357506116636115f560a0830183612bd9565b611604916004916000916130d7565b61160d91613101565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b611699576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8e516116a59082611e95565b50600101611508565b505060005b6116be600185612bc6565b8110156117a95760008989838181106116d9576116d9612c5e565b90506020028101906116eb9190612d0c565b6116fc906080810190606001612d4a565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146117a05786828151811061174357611743612c5e565b602002602001015161175482611275565b61175e9190612bc6565b9250600073ffffffffffffffffffffffffffffffffffffffff821615611785576000611787565b865b9050831561179e5761179e828a61048b8488612bc6565b505b506001016116b3565b50505061188c565b8760005b8181101561188957368b8b838181106117d0576117d0612c5e565b90506020028101906117e29190612d0c565b90506117f761154a6060830160408401612d4a565b80611810575061181061157d6040830160208401612d4a565b8015611827575061182761157d6020830183612d4a565b801561183e575061183e6115f560a0830183612bd9565b611874576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8c516118809082611e95565b506001016117b5565b50505b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff83166118b857505050565b73ffffffffffffffffffffffffffffffffffffffff8216611905576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa15801561197a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061199e9190612c45565b101561107b5761107b83837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff612173565b73ffffffffffffffffffffffffffffffffffffffff8316611a1c576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216611a69576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015611ad6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611afa9190612c45565b905080821115611b40576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610ba0565b611b4b8484846122e1565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8216611b9e576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b47811115611be1576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101829052476024820152604401610ba0565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114611c3b576040519150601f19603f3d011682016040523d82523d6000602084013e611c40565b606091505b505090508061107b576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8416611cc8576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216611d15576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015611d86573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611daa9190612c45565b9050611db882868686612337565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015611e28573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611e4c9190612c45565b611e569190612bc6565b14611e8d576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b611eab611ea56020830183612d4a565b3b151590565b611ee1576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101356000819003611f21576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000611f3661154a6060850160408601612d4a565b611f41576000611f47565b82608001355b90506000611f63611f5e6060860160408701612d4a565b611275565b90506000611f7a611f5e6080870160608801612d4a565b905082600003611fb157611fb1611f976060870160408801612d4a565b611fa76040880160208901612d4a565b8760800135611898565b8460800135821015611ffc576040517fcf4791810000000000000000000000000000000000000000000000000000000081526080860135600482015260248101839052604401610ba0565b60008061200c6020880188612d4a565b73ffffffffffffffffffffffffffffffffffffffff168561203060a08a018a612bd9565b60405161203e929190613149565b60006040518083038185875af1925050503d806000811461207b576040519150601f19603f3d011682016040523d82523d6000602084013e612080565b606091505b5091509150816120935761209381612395565b60006120a8611f5e60808a0160608b01612d4a565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b38896120d960208b018b612d4a565b6120e960608c0160408d01612d4a565b6120f960808d0160608e01612d4a565b8c6080013589871161210b5786612115565b6121158a88612bc6565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b6040805173ffffffffffffffffffffffffffffffffffffffff8416602482015260448082018490528251808303909101815260649091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f095ea7b3000000000000000000000000000000000000000000000000000000001790526121ff848261239f565b611b4b5760405173ffffffffffffffffffffffffffffffffffffffff84166024820152600060448201526122d79085907f095ea7b300000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152612460565b611b4b8482612460565b60405173ffffffffffffffffffffffffffffffffffffffff831660248201526044810182905261107b9084907fa9059cbb0000000000000000000000000000000000000000000000000000000090606401612255565b60405173ffffffffffffffffffffffffffffffffffffffff80851660248301528316604482015260648101829052611b4b9085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401612255565b8051602082018181fd5b60008060008473ffffffffffffffffffffffffffffffffffffffff16846040516123c99190613159565b6000604051808303816000865af19150503d8060008114612406576040519150601f19603f3d011682016040523d82523d6000602084013e61240b565b606091505b5091509150818015612435575080511580612435575080806020019051810190612435919061316b565b8015612457575073ffffffffffffffffffffffffffffffffffffffff85163b15155b95945050505050565b60006124c2826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff1661256f9092919063ffffffff16565b90508051600014806124e35750808060200190518101906124e3919061316b565b61107b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610ba0565b606061257e8484600085612586565b949350505050565b606082471015612618576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610ba0565b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516126419190613159565b60006040518083038185875af1925050503d806000811461267e576040519150601f19603f3d011682016040523d82523d6000602084013e612683565b606091505b50915091506126948783838761269f565b979650505050505050565b6060831561273557825160000361272e5773ffffffffffffffffffffffffffffffffffffffff85163b61272e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610ba0565b508161257e565b61257e838381511561274a5781518083602001fd5b806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ba09190613188565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff811182821017156127d1576127d161277e565b60405290565b600082601f8301126127e857600080fd5b813567ffffffffffffffff808211156128035761280361277e565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f011681019082821181831017156128495761284961277e565b8160405283815286602085880101111561286257600080fd5b836020870160208301376000602085830101528094505050505092915050565b803573ffffffffffffffffffffffffffffffffffffffff811681146128a657600080fd5b919050565b80151581146128b957600080fd5b50565b80356128a6816128ab565b600061014082840312156128da57600080fd5b6128e26127ad565b905081358152602082013567ffffffffffffffff8082111561290357600080fd5b61290f858386016127d7565b6020840152604084013591508082111561292857600080fd5b50612935848285016127d7565b60408301525061294760608301612882565b606082015261295860808301612882565b608082015261296960a08301612882565b60a082015260c082013560c082015260e082013560e08201526101006129908184016128bc565b908201526101206129a28382016128bc565b9082015292915050565b6000608082840312156129be57600080fd5b50919050565b600080600080606085870312156129da57600080fd5b843567ffffffffffffffff808211156129f257600080fd5b6129fe888389016128c7565b95506020870135915080821115612a1457600080fd5b818701915087601f830112612a2857600080fd5b813581811115612a3757600080fd5b8860208260051b8501011115612a4c57600080fd5b602083019550809450506040870135915080821115612a6a57600080fd5b50612a77878288016129ac565b91505092959194509250565b60008060408385031215612a9657600080fd5b823567ffffffffffffffff80821115612aae57600080fd5b612aba868387016128c7565b93506020850135915080821115612ad057600080fd5b50612add858286016129ac565b9150509250929050565b600060208284031215612af957600080fd5b5035919050565b60008060208385031215612b1357600080fd5b823567ffffffffffffffff80821115612b2b57600080fd5b818501915085601f830112612b3f57600080fd5b813581811115612b4e57600080fd5b8660208260061b8501011115612b6357600080fd5b60209290920196919550909350505050565b60008060408385031215612b8857600080fd5b50508035926020909101359150565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b8181038181111561132857611328612b97565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112612c0e57600080fd5b83018035915067ffffffffffffffff821115612c2957600080fd5b602001915036819003821315612c3e57600080fd5b9250929050565b600060208284031215612c5757600080fd5b5051919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203612cbe57612cbe612b97565b5060010190565b6020808252818101839052600090604080840186845b87811015612cff578135835284820135858401529183019190830190600101612cdb565b5090979650505050505050565b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112612d4057600080fd5b9190910192915050565b600060208284031215612d5c57600080fd5b61080682612882565b60005b83811015612d80578181015183820152602001612d68565b50506000910152565b60008151808452612da1816020860160208601612d65565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b60808152612dfa60808201845173ffffffffffffffffffffffffffffffffffffffff169052565b602083015160a0820152600060408401516101608060c0850152612e226101e0850183612d89565b9150606086015160e08501526080860151610100818187015260a088015191507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff80610120818887030181890152612e798685612d89565b955060c08a01519350610140612ea6818a018673ffffffffffffffffffffffffffffffffffffffff169052565b60e08b015194508289880301868a0152612ec08786612d89565b9650838b0151955082898803016101808a0152612edd8787612d89565b9650818b0151955082898803016101a08a0152612efa8787612d89565b9650808b01519550505080878603016101c0880152505050612f1c8282612d89565b9150508281036020840152612f35816000815260200190565b63ffffffff949094166040840152505080820360609091015260008152602001919050565b60208152816020820152818360408301376000818301604090810191909152601f9092017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0160101919050565b602081528151602082015260006020830151610140806040850152612fd0610160850183612d89565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe085840301606086015261300b8382612d89565b9250506060850151613035608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206130a88187018315159052565b90950151151593019290925250919050565b6000602082840312156130cc57600080fd5b8135610806816128ab565b600080858511156130e757600080fd5b838611156130f457600080fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156131415780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b60008251612d40818460208701612d65565b60006020828403121561317d57600080fd5b8151610806816128ab565b6020815260006108066020830184612d8956fea26469706673582212201ce7830d5829dc2b45d77254aa02ff3cfe3e490170e63e60ca0d028c9c9a652c64736f6c63430008110033";
const isSuperArgs = (xs) => xs.length > 1;
class DeBridgeDlnFacet__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    deploy(_dlnSource, overrides) {
        return super.deploy(_dlnSource, overrides || {});
    }
    getDeployTransaction(_dlnSource, overrides) {
        return super.getDeployTransaction(_dlnSource, overrides || {});
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
exports.DeBridgeDlnFacet__factory = DeBridgeDlnFacet__factory;
Object.defineProperty(DeBridgeDlnFacet__factory, "bytecode", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _bytecode
});
Object.defineProperty(DeBridgeDlnFacet__factory, "abi", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _abi
});
//# sourceMappingURL=DeBridgeDlnFacet__factory.js.map