"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CelerIMFacetMutable__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        type: "constructor",
        inputs: [
            {
                name: "_messageBus",
                type: "address",
                internalType: "contract IMessageBus",
            },
            {
                name: "_relayerOwner",
                type: "address",
                internalType: "address",
            },
            {
                name: "_diamondAddress",
                type: "address",
                internalType: "address",
            },
            {
                name: "_cfUSDC",
                type: "address",
                internalType: "address",
            },
        ],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "relayer",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "address",
                internalType: "contract RelayerCelerIM",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "startBridgeTokensViaCelerIM",
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
                name: "_celerIMData",
                type: "tuple",
                internalType: "struct CelerIM.CelerIMData",
                components: [
                    {
                        name: "maxSlippage",
                        type: "uint32",
                        internalType: "uint32",
                    },
                    {
                        name: "nonce",
                        type: "uint64",
                        internalType: "uint64",
                    },
                    {
                        name: "callTo",
                        type: "bytes",
                        internalType: "bytes",
                    },
                    {
                        name: "callData",
                        type: "bytes",
                        internalType: "bytes",
                    },
                    {
                        name: "messageBusFee",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "bridgeType",
                        type: "uint8",
                        internalType: "enum MsgDataTypes.BridgeSendType",
                    },
                ],
            },
        ],
        outputs: [],
        stateMutability: "payable",
    },
    {
        type: "function",
        name: "swapAndStartBridgeTokensViaCelerIM",
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
                name: "_celerIMData",
                type: "tuple",
                internalType: "struct CelerIM.CelerIMData",
                components: [
                    {
                        name: "maxSlippage",
                        type: "uint32",
                        internalType: "uint32",
                    },
                    {
                        name: "nonce",
                        type: "uint64",
                        internalType: "uint64",
                    },
                    {
                        name: "callTo",
                        type: "bytes",
                        internalType: "bytes",
                    },
                    {
                        name: "callData",
                        type: "bytes",
                        internalType: "bytes",
                    },
                    {
                        name: "messageBusFee",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "bridgeType",
                        type: "uint8",
                        internalType: "enum MsgDataTypes.BridgeSendType",
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
const _bytecode = "0x60e06040523480156200001157600080fd5b50604051620067e7380380620067e78339810160408190526200003491620000d5565b838383838383836040516200004990620000ae565b6001600160a01b03938416815291831660208301529091166040820152606001604051809103906000f08015801562000086573d6000803e3d6000fd5b506001600160a01b0390811660a05293841660805290921660c052506200013d945050505050565b61378a806200305d83390190565b6001600160a01b0381168114620000d257600080fd5b50565b60008060008060808587031215620000ec57600080fd5b8451620000f981620000bc565b60208601519094506200010c81620000bc565b60408601519093506200011f81620000bc565b60608601519092506200013281620000bc565b939692955090935050565b60805160a05160c051612eb5620001a8600039600061091d0152600081816060015281816102d501528181610357015281816103c2015281816106e801528181610769015281816107d401528181610b4d01528181610bec0152610c9e015260005050612eb56000f3fe6080604052600436106100345760003560e01c806305095ded146100395780638406c0791461004e578063b06c52da146100ab575b600080fd5b61004c610047366004612742565b6100be565b005b34801561005a57600080fd5b506100827f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b61004c6100b93660046127a6565b6104b3565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610139576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815533600061014a3447612865565b9050848061010001511561018a576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b856101ad8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156101e4576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c00151600003610222576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361025f576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61026987876108c2565b608087015173ffffffffffffffffffffffffffffffffffffffff161561047c5760006102988860800151610919565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000811660048301529192506000918316906370a0823190602401602060405180830381865afa15801561032a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061034e919061289f565b905061038082337f00000000000000000000000000000000000000000000000000000000000000008c60c001516109ed565b60c08901516040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000811660048301528391908516906370a0823190602401602060405180830381865afa158015610414573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610438919061289f565b6104429190612865565b14610479576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50505b6104868787610acf565b50479050818111156104a7576104a76000846104a28585612865565b610da8565b50506000909155505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0161052e576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815533600061053f3447612865565b90508680610100015161057e576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b876105a18160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156105d8576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c00151600003610616576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610653576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61065d89876108c2565b61067789600001518a60c001518a8a338b60800135610dde565b60c08a0152608089015173ffffffffffffffffffffffffffffffffffffffff161561088e5760006106ab8a60800151610919565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000811660048301529192506000918316906370a0823190602401602060405180830381865afa15801561073d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610761919061289f565b9050610792827f00000000000000000000000000000000000000000000000000000000000000008d60c00151610f7e565b60c08b01516040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000811660048301528391908516906370a0823190602401602060405180830381865afa158015610826573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061084a919061289f565b6108549190612865565b1461088b576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50505b6108988987610acf565b50479050818111156108b4576108b46000846104a28585612865565b505060009091555050505050565b610120820151151560006108d960608401846128b8565b905011151514610915576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036109e5578173ffffffffffffffffffffffffffffffffffffffff166326afaadd6040518163ffffffff1660e01b81526004016020604051808303816000875af11580156109bb573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109df9190612924565b92915050565b50805b919050565b60405173ffffffffffffffffffffffffffffffffffffffff80851660248301528316604482015260648101829052610ac99085907f23b872dd00000000000000000000000000000000000000000000000000000000906084015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152610fd4565b50505050565b6000610af3836080015173ffffffffffffffffffffffffffffffffffffffff161590565b610afe576000610b04565b8260c001515b9050826101200151610bcf576040517f75b4c00500000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016906375b4c005908390610b869087908790600401612ba2565b604080518083038185885af1158015610ba3573d6000803e3d6000fd5b50505050506040513d601f19601f82011682018060405250810190610bc89190612c75565b5050610d6c565b60a08301805173ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016918290526040517f75b4c00500000000000000000000000000000000000000000000000000000000815290916000918291906375b4c005908690610c56908a908a90600401612ba2565b604080518083038185885af1158015610c73573d6000803e3d6000fd5b50505050506040513d601f19601f82011682018060405250810190610c989190612c75565b915091507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663c2aad68f86608001358860a001518960e0015185878b8060600190610cf991906128b8565b6040518863ffffffff1660e01b8152600401610d1a96959493929190612ca5565b6000604051808303818588803b158015610d3357600080fd5b505af1158015610d47573d6000803e3d6000fd5b50505073ffffffffffffffffffffffffffffffffffffffff90941660a0880152505050505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f183604051610d9b9190612d01565b60405180910390a1505050565b73ffffffffffffffffffffffffffffffffffffffff831615610dd457610dcf8383836110e3565b505050565b610dcf828261125f565b600083808203610e1a576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008686610e29600185612865565b818110610e3857610e38612d14565b9050602002810190610e4a9190612d43565b610e5b906080810190606001612d81565b90506000610e6882611389565b905073ffffffffffffffffffffffffffffffffffffffff8216610e9257610e8f3482612865565b90505b6000610e9e8989611441565b9050610eaa898961154d565b604080516060810182528c815273ffffffffffffffffffffffffffffffffffffffff89166020820152908101879052610ee5818b8b856115ba565b600083610ef186611389565b610efb9190612865565b905073ffffffffffffffffffffffffffffffffffffffff8516610f2557610f228882612865565b90505b8b811015610f6e576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018d9052602481018290526044015b60405180910390fd5b9c9b505050505050505050505050565b60405173ffffffffffffffffffffffffffffffffffffffff8316602482015260448101829052610dcf9084907fa9059cbb0000000000000000000000000000000000000000000000000000000090606401610a47565b6000611036826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166119ab9092919063ffffffff16565b90508051600014806110575750808060200190518101906110579190612d9e565b610dcf576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610f65565b73ffffffffffffffffffffffffffffffffffffffff8316611130576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661117d576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa1580156111ea573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061120e919061289f565b905080821115611254576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610f65565b610ac9848484610f7e565b73ffffffffffffffffffffffffffffffffffffffff82166112ac576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b478111156112ef576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101829052476024820152604401610f65565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114611349576040519150601f19603f3d011682016040523d82523d6000602084013e61134e565b606091505b5050905080610dcf576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff82161561143a576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015611411573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611435919061289f565b6109df565b4792915050565b60608160008167ffffffffffffffff81111561145f5761145f6124f8565b604051908082528060200260200182016040528015611488578160200160208202803683370190505b5090506000805b83811015611542578686828181106114a9576114a9612d14565b90506020028101906114bb9190612d43565b6114cc906080810190606001612d81565b91506114d782611389565b8382815181106114e9576114e9612d14565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff821661153a573483828151811061152257611522612d14565b602002602001018181516115369190612865565b9052505b60010161148f565b509095945050505050565b60005b81811015610dcf573683838381811061156b5761156b612d14565b905060200281019061157d9190612d43565b905061158f60e0820160c08301612dbb565b156115b1576115b16115a76060830160408401612d81565b82608001356119c2565b50600101611550565b6020840151604085015184918491849083600181146118c457600086866115e2600185612865565b8181106115f1576115f1612d14565b90506020028101906116039190612d43565b611614906080810190606001612d81565b9050600089815b818110156117c157368d8d8381811061163657611636612d14565b90506020028101906116489190612d43565b905061167761165d6060830160408401612d81565b73ffffffffffffffffffffffffffffffffffffffff161590565b806116da57506116da6116906040830160208401612d81565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b80156116f157506116f16116906020830183612d81565b8015611776575061177661170860a08301836128b8565b61171791600491600091612dd8565b61172091612e02565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b6117ac576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8e516117b89082611b34565b5060010161161b565b505060005b6117d1600185612865565b8110156118bc5760008989838181106117ec576117ec612d14565b90506020028101906117fe9190612d43565b61180f906080810190606001612d81565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146118b35786828151811061185657611856612d14565b602002602001015161186782611389565b6118719190612865565b9250600073ffffffffffffffffffffffffffffffffffffffff82161561189857600061189a565b865b905083156118b1576118b1828a6104a28488612865565b505b506001016117c6565b50505061199f565b8760005b8181101561199c57368b8b838181106118e3576118e3612d14565b90506020028101906118f59190612d43565b905061190a61165d6060830160408401612d81565b8061192357506119236116906040830160208401612d81565b801561193a575061193a6116906020830183612d81565b8015611951575061195161170860a08301836128b8565b611987576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8c516119939082611b34565b506001016118c8565b50505b50505050505050505050565b60606119ba8484600085611e12565b949350505050565b806000036119fc576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216611a515780341015610915576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa158015611abe573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611ae2919061289f565b905081811015611b28576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610f65565b610dcf83333085611f2b565b611b4a611b446020830183612d81565b3b151590565b611b80576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101356000819003611bc0576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000611bd561165d6060850160408601612d81565b611be0576000611be6565b82608001355b90506000611c02611bfd6060860160408701612d81565b611389565b90506000611c19611bfd6080870160608801612d81565b905082600003611c5057611c50611c366060870160408801612d81565b611c466040880160208901612d81565b8760800135612145565b8460800135821015611c9b576040517fcf4791810000000000000000000000000000000000000000000000000000000081526080860135600482015260248101839052604401610f65565b600080611cab6020880188612d81565b73ffffffffffffffffffffffffffffffffffffffff1685611ccf60a08a018a6128b8565b604051611cdd929190612e4a565b60006040518083038185875af1925050503d8060008114611d1a576040519150601f19603f3d011682016040523d82523d6000602084013e611d1f565b606091505b509150915081611d3257611d3281612288565b6000611d47611bfd60808a0160608b01612d81565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b3889611d7860208b018b612d81565b611d8860608c0160408d01612d81565b611d9860808d0160608e01612d81565b8c60800135898711611daa5786611db4565b611db48a88612865565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b606082471015611ea4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610f65565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611ecd9190612e5a565b60006040518083038185875af1925050503d8060008114611f0a576040519150601f19603f3d011682016040523d82523d6000602084013e611f0f565b606091505b5091509150611f2087838387612292565b979650505050505050565b73ffffffffffffffffffffffffffffffffffffffff8416611f78576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216611fc5576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015612036573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061205a919061289f565b9050612068828686866109ed565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa1580156120d8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906120fc919061289f565b6121069190612865565b1461213d576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b73ffffffffffffffffffffffffffffffffffffffff831661216557505050565b73ffffffffffffffffffffffffffffffffffffffff82166121b2576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa158015612227573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061224b919061289f565b1015610dcf5761225d83836000612332565b610dcf83837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff612332565b8051602082018181fd5b606083156123285782516000036123215773ffffffffffffffffffffffffffffffffffffffff85163b612321576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610f65565b50816119ba565b6119ba83836124b4565b8015806123d257506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa1580156123ac573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906123d0919061289f565b155b61245e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e6365000000000000000000006064820152608401610f65565b60405173ffffffffffffffffffffffffffffffffffffffff8316602482015260448101829052610dcf9084907f095ea7b30000000000000000000000000000000000000000000000000000000090606401610a47565b8151156124c45781518083602001fd5b806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f659190612e6c565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff8111828210171561254b5761254b6124f8565b60405290565b600082601f83011261256257600080fd5b813567ffffffffffffffff8082111561257d5761257d6124f8565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f011681019082821181831017156125c3576125c36124f8565b816040528381528660208588010111156125dc57600080fd5b836020870160208301376000602085830101528094505050505092915050565b73ffffffffffffffffffffffffffffffffffffffff8116811461261e57600080fd5b50565b80356109e8816125fc565b801515811461261e57600080fd5b80356109e88161262c565b6000610140828403121561265857600080fd5b612660612527565b905081358152602082013567ffffffffffffffff8082111561268157600080fd5b61268d85838601612551565b602084015260408401359150808211156126a657600080fd5b506126b384828501612551565b6040830152506126c560608301612621565b60608201526126d660808301612621565b60808201526126e760a08301612621565b60a082015260c082013560c082015260e082013560e082015261010061270e81840161263a565b9082015261012061272083820161263a565b9082015292915050565b600060c0828403121561273c57600080fd5b50919050565b6000806040838503121561275557600080fd5b823567ffffffffffffffff8082111561276d57600080fd5b61277986838701612645565b9350602085013591508082111561278f57600080fd5b5061279c8582860161272a565b9150509250929050565b600080600080606085870312156127bc57600080fd5b843567ffffffffffffffff808211156127d457600080fd5b6127e088838901612645565b955060208701359150808211156127f657600080fd5b818701915087601f83011261280a57600080fd5b81358181111561281957600080fd5b8860208260051b850101111561282e57600080fd5b60208301955080945050604087013591508082111561284c57600080fd5b506128598782880161272a565b91505092959194509250565b818103818111156109df577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000602082840312156128b157600080fd5b5051919050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126128ed57600080fd5b83018035915067ffffffffffffffff82111561290857600080fd5b60200191503681900382131561291d57600080fd5b9250929050565b60006020828403121561293657600080fd5b8151612941816125fc565b9392505050565b60005b8381101561296357818101518382015260200161294b565b50506000910152565b60008151808452612984816020860160208601612948565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b60006101408251845260208301518160208601526129d68286018261296c565b915050604083015184820360408601526129f0828261296c565b9150506060830151612a1a606086018273ffffffffffffffffffffffffffffffffffffffff169052565b506080830151612a42608086018273ffffffffffffffffffffffffffffffffffffffff169052565b5060a0830151612a6a60a086018273ffffffffffffffffffffffffffffffffffffffff169052565b5060c083015160c085015260e083015160e085015261010080840151612a938287018215159052565b50506101209283015115159390920192909252919050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112612ae057600080fd5b830160208101925035905067ffffffffffffffff811115612b0057600080fd5b80360382131561291d57600080fd5b8183528181602085013750600060208284010152600060207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b8035600781106109e857600080fd5b60078110612b9e577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b9052565b604081526000612bb560408301856129b6565b8281036020840152833563ffffffff8116808214612bd257600080fd5b825250602084013567ffffffffffffffff81168114612bf057600080fd5b67ffffffffffffffff166020820152612c0c6040850185612aab565b60c06040840152612c2160c084018284612b0f565b915050612c316060860186612aab565b8383036060850152612c44838284612b0f565b9250505060808501356080830152612c5e60a08601612b58565b612c6b60a0840182612b67565b5095945050505050565b60008060408385031215612c8857600080fd5b825191506020830151612c9a816125fc565b809150509250929050565b600073ffffffffffffffffffffffffffffffffffffffff808916835267ffffffffffffffff8816602084015280871660408401525084606083015260a06080830152612cf560a083018486612b0f565b98975050505050505050565b60208152600061294160208301846129b6565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112612d7757600080fd5b9190910192915050565b600060208284031215612d9357600080fd5b8135612941816125fc565b600060208284031215612db057600080fd5b81516129418161262c565b600060208284031215612dcd57600080fd5b81356129418161262c565b60008085851115612de857600080fd5b83861115612df557600080fd5b5050820193919092039150565b7fffffffff000000000000000000000000000000000000000000000000000000008135818116916004851015612e425780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b60008251612d77818460208701612948565b602081526000612941602083018461296c56fea2646970667358221220d18741abcacda366b6b605e6912b54fed849bfa12773c3682be0beb5c2b60d5564736f6c6343000811003360806040523480156200001157600080fd5b506040516200378a3803806200378a833981016040819052620000349162000092565b600080546001600160a01b03199081166001600160a01b039485161790915560028054821694841694909417909355600380549093169116179055620000dc565b80516001600160a01b03811681146200008d57600080fd5b919050565b600080600060608486031215620000a857600080fd5b620000b38462000075565b9250620000c36020850162000075565b9150620000d36040850162000075565b90509250925092565b61369e80620000ec6000396000f3fe6080604052600436106100d65760003560e01c806375b4c0051161007f578063c2aad68f11610059578063c2aad68f14610253578063d9caed1214610266578063e30c397814610286578063f2fde38b146102b357600080fd5b806375b4c005146101d65780637cd2bffc146102135780638da5cb5b1461022657600080fd5b80632b71cb25116100b05780632b71cb25146101425780636a60c3b7146101945780637200b829146101c157600080fd5b80630bcb4982146100e25780630d19e5191461010b57806323452b9c1461012d57600080fd5b366100dd57005b600080fd5b6100f56100f0366004612bb5565b6102d3565b6040516101029190612c58565b60405180910390f35b34801561011757600080fd5b5061012b610126366004612c99565b6103b7565b005b34801561013957600080fd5b5061012b610924565b34801561014e57600080fd5b5060025461016f9073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610102565b3480156101a057600080fd5b5060035461016f9073ffffffffffffffffffffffffffffffffffffffff1681565b3480156101cd57600080fd5b5061012b6109ee565b6101e96101e4366004612ea8565b610ad4565b6040805192835273ffffffffffffffffffffffffffffffffffffffff909116602083015201610102565b6100f5610221366004612fec565b611742565b34801561023257600080fd5b5060005461016f9073ffffffffffffffffffffffffffffffffffffffff1681565b61012b610261366004613083565b6117cf565b34801561027257600080fd5b5061012b6102813660046130ff565b6118bc565b34801561029257600080fd5b5060015461016f9073ffffffffffffffffffffffffffffffffffffffff1681565b3480156102bf57600080fd5b5061012b6102ce366004613140565b611a55565b60025460009073ffffffffffffffffffffffffffffffffffffffff163314610327576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008061033685870187613164565b935050509150610347888289611bb3565b6040805173ffffffffffffffffffffffffffffffffffffffff808b1682528316602082015290810188905242606082015282907f1fbfa988fd46deed0de12c94c7b5dcb537d51b804246d0083f245f7a8997d1709060800160405180910390a26001925050505b95945050505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610408576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008673ffffffffffffffffffffffffffffffffffffffff16600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166382980dc46040518163ffffffff1660e01b8152600401602060405180830381865afa15801561048e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104b29190613309565b73ffffffffffffffffffffffffffffffffffffffff161415801561057f5750600254604080517fdfa2dbaf000000000000000000000000000000000000000000000000000000008152905173ffffffffffffffffffffffffffffffffffffffff808b1693169163dfa2dbaf9160048083019260209291908290030181865afa158015610542573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105669190613309565b73ffffffffffffffffffffffffffffffffffffffff1614155b80156106345750600254604080517f95b12c27000000000000000000000000000000000000000000000000000000008152905173ffffffffffffffffffffffffffffffffffffffff808b169316916395b12c279160048083019260209291908290030181865afa1580156105f7573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061061b9190613309565b73ffffffffffffffffffffffffffffffffffffffff1614155b80156106e95750600254604080517fd8257d17000000000000000000000000000000000000000000000000000000008152905173ffffffffffffffffffffffffffffffffffffffff808b1693169163d8257d179160048083019260209291908290030181865afa1580156106ac573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106d09190613309565b73ffffffffffffffffffffffffffffffffffffffff1614155b801561079e5750600254604080517fc66a9c5a000000000000000000000000000000000000000000000000000000008152905173ffffffffffffffffffffffffffffffffffffffff808b1693169163c66a9c5a9160048083019260209291908290030181865afa158015610761573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107859190613309565b73ffffffffffffffffffffffffffffffffffffffff1614155b156107d5576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8673ffffffffffffffffffffffffffffffffffffffff1686866040516107fc929190613326565b6000604051808303816000865af19150503d8060008114610839576040519150601f19603f3d011682016040523d82523d6000602084013e61083e565b606091505b509091505080156108e957600073ffffffffffffffffffffffffffffffffffffffff84161561086d578361086f565b335b905061087c858285611bb3565b8073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff167f9207361cc2a04b9c7a06691df1eb87c6a63957ae88bf01d0d18c81e3d1272099856040516108db91815260200190565b60405180910390a35061091b565b6040517f750b219c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50505050505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610975576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff166109c4576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b60015473ffffffffffffffffffffffffffffffffffffffff16338114610a40576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b600354600090819073ffffffffffffffffffffffffffffffffffffffff163314610b2a576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001610b3c60c0850160a08601613336565b6006811115610b4d57610b4d612c29565b03610e5257600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166382980dc46040518163ffffffff1660e01b8152600401602060405180830381865afa158015610bbf573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610be39190613309565b9050610c07846080015173ffffffffffffffffffffffffffffffffffffffff161590565b15610d075760c084015160a085015160e086015173ffffffffffffffffffffffffffffffffffffffff841692633f2e5fc39290918290610c4d60408a0160208b01613357565b610c5a60208b018b613372565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e089901b16815273ffffffffffffffffffffffffffffffffffffffff9095166004860152602485019390935267ffffffffffffffff918216604485015216606483015263ffffffff16608482015260a4016000604051808303818588803b158015610ce957600080fd5b505af1158015610cfd573d6000803e3d6000fd5b5050505050610e1c565b610d1a8460800151828660c00151611be9565b8073ffffffffffffffffffffffffffffffffffffffff1663a5977fbb8560a0015186608001518760c001518860e00151886020016020810190610d5d9190613357565b610d6a60208b018b613372565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e089901b16815273ffffffffffffffffffffffffffffffffffffffff9687166004820152959094166024860152604485019290925267ffffffffffffffff908116606485015216608483015263ffffffff1660a482015260c401600060405180830381600087803b158015610e0357600080fd5b505af1158015610e17573d6000803e3d6000fd5b505050505b610e4b8460a0015185608001518660c001518760e00151876020016020810190610e469190613357565b611d2c565b915061173b565b6002610e6460c0850160a08601613336565b6006811115610e7557610e75612c29565b0361103657600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663d8257d176040518163ffffffff1660e01b8152600401602060405180830381865afa158015610ee7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f0b9190613309565b9050610f208460800151828660c00151611be9565b8073ffffffffffffffffffffffffffffffffffffffff16632346362485608001518660c001518760e001518860a00151886020016020810190610f639190613357565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e088901b16815273ffffffffffffffffffffffffffffffffffffffff9586166004820152602481019490945267ffffffffffffffff928316604485015293166064830152909116608482015260a401600060405180830381600087803b158015610ff157600080fd5b505af1158015611005573d6000803e3d6000fd5b50505060a0850151608086015160c087015160e0880151610e4b94506110316040890160208a01613357565b611ddf565b600361104860c0850160a08601613336565b600681111561105957611059612c29565b0361120857600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663dfa2dbaf6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156110cb573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110ef9190613309565b90506111048460800151828660c00151611be9565b8073ffffffffffffffffffffffffffffffffffffffff1663de790c7e85608001518660c001518760a001518760200160208101906111429190613357565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e087901b16815273ffffffffffffffffffffffffffffffffffffffff948516600482015260248101939093529216604482015267ffffffffffffffff9091166064820152608401600060405180830381600087803b1580156111c857600080fd5b505af11580156111dc573d6000803e3d6000fd5b50505060a0850151608086015160c0870151610e4b93506112036040880160208901613357565b611e78565b600461121a60c0850160a08601613336565b600681111561122b5761122b612c29565b036114e757600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663c66a9c5a6040518163ffffffff1660e01b8152600401602060405180830381865afa15801561129d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112c19190613309565b90506112e5846080015173ffffffffffffffffffffffffffffffffffffffff161590565b156113da578073ffffffffffffffffffffffffffffffffffffffff1662a95fd78560c001518660c001518760e001518860a0015188602001602081019061132c9190613357565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e088901b168152600481019490945267ffffffffffffffff928316602485015273ffffffffffffffffffffffffffffffffffffffff909116604484015216606482015260840160206040518083038185885af11580156113b5573d6000803e3d6000fd5b50505050506040513d601f19601f82011682018060405250810190610e4b9190613398565b6113ed8460800151828660c00151611be9565b8073ffffffffffffffffffffffffffffffffffffffff16632346362485608001518660c001518760e001518860a001518860200160208101906114309190613357565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e088901b16815273ffffffffffffffffffffffffffffffffffffffff9586166004820152602481019490945267ffffffffffffffff928316604485015293166064830152909116608482015260a4016020604051808303816000875af11580156114c3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e4b9190613398565b60056114f960c0850160a08601613336565b600681111561150a5761150a612c29565b036115f857600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166395b12c276040518163ffffffff1660e01b8152600401602060405180830381865afa15801561157c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115a09190613309565b90506115b58460800151828660c00151611be9565b8073ffffffffffffffffffffffffffffffffffffffff1663a002930185608001518660c001518760e001518860a001518860200160208101906114309190613357565b600661160a60c0850160a08601613336565b600681111561161b5761161b612c29565b0361170957600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166395b12c276040518163ffffffff1660e01b8152600401602060405180830381865afa15801561168d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116b19190613309565b90506116c68460800151828660c00151611be9565b8073ffffffffffffffffffffffffffffffffffffffff16639e422c3385608001518660c001518760e001518860a001518860200160208101906114309190613357565b6040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b9250929050565b60025460009073ffffffffffffffffffffffffffffffffffffffff163314611796576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008080806117a787890189613164565b93509350935093506117bd84848d858e86611f20565b5060019b9a5050505050505050505050565b60035473ffffffffffffffffffffffffffffffffffffffff163314611820576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6002546040517f4289fbb300000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff90911690634289fbb3903490611882908a908a908a908a908a908a906004016133b1565b6000604051808303818588803b15801561189b57600080fd5b505af11580156118af573d6000803e3d6000fd5b5050505050505050505050565b60005473ffffffffffffffffffffffffffffffffffffffff16331461190d576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff83166119c85760008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114611982576040519150601f19603f3d011682016040523d82523d6000602084013e611987565b606091505b50509050806119c2576040517f750b219c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b506119e9565b6119e973ffffffffffffffffffffffffffffffffffffffff841683836122be565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f9207361cc2a04b9c7a06691df1eb87c6a63957ae88bf01d0d18c81e3d127209983604051611a4891815260200190565b60405180910390a3505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314611aa6576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8116611af3576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff821603611b42576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae127890600090a350565b73ffffffffffffffffffffffffffffffffffffffff831615611bdf57611bda838383612392565b505050565b611bda8282612519565b73ffffffffffffffffffffffffffffffffffffffff8316611c0957505050565b73ffffffffffffffffffffffffffffffffffffffff8216611c56576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa158015611ccb573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611cef9190613398565b1015611bda57611d0183836000612643565b611bda83837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff612643565b6040517fffffffffffffffffffffffffffffffffffffffff00000000000000000000000030606090811b8216602084015287811b8216603484015286901b166048820152605c81018490527fffffffffffffffff00000000000000000000000000000000000000000000000060c084811b8216607c84015283811b8216608484015246901b16608c8201526000906094015b60405160208183030381529060405280519060200120905095945050505050565b6040517fffffffffffffffffffffffffffffffffffffffff00000000000000000000000030606090811b8216602084015286811b82166034840152604883018690527fffffffffffffffff00000000000000000000000000000000000000000000000060c086811b821660688601529189901b909216607084015283811b8216608484015246901b16608c820152600090609401611dbe565b6040517fffffffffffffffffffffffffffffffffffffffff00000000000000000000000030606090811b8216602084015285811b821660348401526048830185905286901b1660688201527fffffffffffffffff00000000000000000000000000000000000000000000000060c083811b8216607c84015246901b166084820152600090608c016040516020818303038152906040528051906020012090505b949350505050565b6003546040517fa516f0f300000000000000000000000000000000000000000000000000000000815260206004820152600860248201527f4578656375746f720000000000000000000000000000000000000000000000006044820152600091829173ffffffffffffffffffffffffffffffffffffffff9091169063a516f0f390606401602060405180830381865afa158015611fc1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611fe59190613309565b905073ffffffffffffffffffffffffffffffffffffffff8616612134576040517f4f91bc2b00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff821690634f91bc2b90869061205c908c908c908c908c906004016134a5565b6000604051808303818588803b15801561207557600080fd5b505af193505050508015612087575060015b61212b5760008373ffffffffffffffffffffffffffffffffffffffff168560405160006040518083038185875af1925050503d80600081146120e5576040519150601f19603f3d011682016040523d82523d6000602084013e6120ea565b606091505b5050905080612125576040517f350c20f100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5061224e565b6001915061224e565b8561215773ffffffffffffffffffffffffffffffffffffffff8216836000612643565b61217873ffffffffffffffffffffffffffffffffffffffff821683876127c5565b6040517f4f91bc2b00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff831690634f91bc2b906121d0908c908c908c908c906004016134a5565b600060405180830381600087803b1580156121ea57600080fd5b505af19250505080156121fb575060015b6122255761222073ffffffffffffffffffffffffffffffffffffffff821685876122be565b61222a565b600192505b61224c73ffffffffffffffffffffffffffffffffffffffff8216836000612643565b505b816122b4576040805173ffffffffffffffffffffffffffffffffffffffff80891682528516602082015290810185905242606082015288907f1fbfa988fd46deed0de12c94c7b5dcb537d51b804246d0083f245f7a8997d1709060800160405180910390a25b5050505050505050565b60405173ffffffffffffffffffffffffffffffffffffffff8316602482015260448101829052611bda9084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff00000000000000000000000000000000000000000000000000000000909316929092179091526128be565b73ffffffffffffffffffffffffffffffffffffffff83166123df576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661242c576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015612499573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906124bd9190613398565b905080821115612508576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044015b60405180910390fd5b6125138484846122be565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8216612566576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b478111156125a9576040517fcf479181000000000000000000000000000000000000000000000000000000008152600481018290524760248201526044016124ff565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114612603576040519150601f19603f3d011682016040523d82523d6000602084013e612608565b606091505b5050905080611bda576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8015806126e357506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa1580156126bd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906126e19190613398565b155b61276f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e63650000000000000000000060648201526084016124ff565b60405173ffffffffffffffffffffffffffffffffffffffff8316602482015260448101829052611bda9084907f095ea7b30000000000000000000000000000000000000000000000000000000090606401612310565b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff83811660248301526000919085169063dd62ed3e90604401602060405180830381865afa15801561283b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061285f9190613398565b9050612513847f095ea7b3000000000000000000000000000000000000000000000000000000008561289186866135dc565b60405173ffffffffffffffffffffffffffffffffffffffff90921660248301526044820152606401612310565b6000612920826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166129cd9092919063ffffffff16565b9050805160001480612941575080806020019051810190612941919061361c565b611bda576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084016124ff565b6060611f188484600085856000808673ffffffffffffffffffffffffffffffffffffffff168587604051612a019190613639565b60006040518083038185875af1925050503d8060008114612a3e576040519150601f19603f3d011682016040523d82523d6000602084013e612a43565b606091505b5091509150612a5487838387612a5f565b979650505050505050565b60608315612af5578251600003612aee5773ffffffffffffffffffffffffffffffffffffffff85163b612aee576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016124ff565b5081611f18565b611f188383815115612b0a5781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016124ff9190613655565b73ffffffffffffffffffffffffffffffffffffffff81168114612b6057600080fd5b50565b8035612b6e81612b3e565b919050565b60008083601f840112612b8557600080fd5b50813567ffffffffffffffff811115612b9d57600080fd5b60208301915083602082850101111561173b57600080fd5b600080600080600060808688031215612bcd57600080fd5b8535612bd881612b3e565b945060208601359350604086013567ffffffffffffffff811115612bfb57600080fd5b612c0788828901612b73565b9094509250506060860135612c1b81612b3e565b809150509295509295909350565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b6020810160038310612c93577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b91905290565b60008060008060008060a08789031215612cb257600080fd5b8635612cbd81612b3e565b9550602087013567ffffffffffffffff811115612cd957600080fd5b612ce589828a01612b73565b9096509450506040870135612cf981612b3e565b92506060870135612d0981612b3e565b80925050608087013590509295509295509295565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff81118282101715612d7157612d71612d1e565b60405290565b60405160e0810167ffffffffffffffff81118282101715612d7157612d71612d1e565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715612de157612de1612d1e565b604052919050565b600082601f830112612dfa57600080fd5b813567ffffffffffffffff811115612e1457612e14612d1e565b612e4560207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f84011601612d9a565b818152846020838601011115612e5a57600080fd5b816020850160208301376000918101602001919091529392505050565b8015158114612b6057600080fd5b8035612b6e81612e77565b600060c08284031215612ea257600080fd5b50919050565b60008060408385031215612ebb57600080fd5b823567ffffffffffffffff80821115612ed357600080fd5b908401906101408287031215612ee857600080fd5b612ef0612d4d565b82358152602083013582811115612f0657600080fd5b612f1288828601612de9565b602083015250604083013582811115612f2a57600080fd5b612f3688828601612de9565b604083015250612f4860608401612b63565b6060820152612f5960808401612b63565b6080820152612f6a60a08401612b63565b60a082015260c083013560c082015260e083013560e0820152610100612f91818501612e85565b90820152610120612fa3848201612e85565b9082015293506020850135915080821115612fbd57600080fd5b50612fca85828601612e90565b9150509250929050565b803567ffffffffffffffff81168114612b6e57600080fd5b600080600080600080600060c0888a03121561300757600080fd5b873561301281612b3e565b9650602088013561302281612b3e565b95506040880135945061303760608901612fd4565b9350608088013567ffffffffffffffff81111561305357600080fd5b61305f8a828b01612b73565b90945092505060a088013561307381612b3e565b8091505092959891949750929550565b60008060008060008060a0878903121561309c57600080fd5b86356130a781612b3e565b95506020870135945060408701356130be81612b3e565b935060608701359250608087013567ffffffffffffffff8111156130e157600080fd5b6130ed89828a01612b73565b979a9699509497509295939492505050565b60008060006060848603121561311457600080fd5b833561311f81612b3e565b9250602084013561312f81612b3e565b929592945050506040919091013590565b60006020828403121561315257600080fd5b813561315d81612b3e565b9392505050565b6000806000806080858703121561317a57600080fd5b84359350602085013567ffffffffffffffff8082111561319957600080fd5b818701915087601f8301126131ad57600080fd5b8135818111156131bf576131bf612d1e565b6131ce60208260051b01612d9a565b8082825260208201915060208360051b86010192508a8311156131f057600080fd5b602085015b838110156132db57848135111561320b57600080fd5b8035860160e07fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0828f0301121561324157600080fd5b613249612d77565b61325560208301612b63565b815261326360408301612b63565b602082015261327460608301612b63565b604082015261328560808301612b63565b606082015260a0820135608082015260c0820135878111156132a657600080fd5b6132b58f602083860101612de9565b60a0830152506132c760e08301612e85565b60c0820152845250602092830192016131f5565b5080975050505050506132f060408601612b63565b91506132fe60608601612b63565b905092959194509250565b60006020828403121561331b57600080fd5b815161315d81612b3e565b8183823760009101908152919050565b60006020828403121561334857600080fd5b81356007811061315d57600080fd5b60006020828403121561336957600080fd5b61315d82612fd4565b60006020828403121561338457600080fd5b813563ffffffff8116811461315d57600080fd5b6000602082840312156133aa57600080fd5b5051919050565b600073ffffffffffffffffffffffffffffffffffffffff808916835287602084015280871660408401525084606083015260a060808301528260a0830152828460c0840137600060c0848401015260c07fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8501168301019050979650505050505050565b60005b8381101561345257818101518382015260200161343a565b50506000910152565b60008151808452613473816020860160208601613437565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b600060808083018784526020828186015281885180845260a093508387019150838160051b880101838b0160005b83811015613590577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff608a84030185528151805173ffffffffffffffffffffffffffffffffffffffff9081168552878201518116888601526040808301518216908601526060808301519091169085015288810151898501528781015160e0898601819052906135648287018261345b565b91505060c080830151925061357c8187018415159052565b5095870195935050908501906001016134d3565b505073ffffffffffffffffffffffffffffffffffffffff8a16604089015295506135bb945050505050565b73ffffffffffffffffffffffffffffffffffffffff831660608301526103ae565b80820180821115613616577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b92915050565b60006020828403121561362e57600080fd5b815161315d81612e77565b6000825161364b818460208701613437565b9190910192915050565b60208152600061315d602083018461345b56fea26469706673582212208d5bb8db1b0e0df71209d4a1a95ec99d39fe81ba03dbdd95a5308770496847f264736f6c63430008110033";
const isSuperArgs = (xs) => xs.length > 1;
class CelerIMFacetMutable__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    deploy(_messageBus, _relayerOwner, _diamondAddress, _cfUSDC, overrides) {
        return super.deploy(_messageBus, _relayerOwner, _diamondAddress, _cfUSDC, overrides || {});
    }
    getDeployTransaction(_messageBus, _relayerOwner, _diamondAddress, _cfUSDC, overrides) {
        return super.getDeployTransaction(_messageBus, _relayerOwner, _diamondAddress, _cfUSDC, overrides || {});
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
exports.CelerIMFacetMutable__factory = CelerIMFacetMutable__factory;
Object.defineProperty(CelerIMFacetMutable__factory, "bytecode", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _bytecode
});
Object.defineProperty(CelerIMFacetMutable__factory, "abi", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _abi
});
//# sourceMappingURL=CelerIMFacetMutable__factory.js.map