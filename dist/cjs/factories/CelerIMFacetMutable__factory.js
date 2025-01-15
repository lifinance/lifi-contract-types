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
const _bytecode = "0x60e06040523480156200001157600080fd5b506040516200696b3803806200696b8339810160408190526200003491620000d5565b838383838383836040516200004990620000ae565b6001600160a01b03938416815291831660208301529091166040820152606001604051809103906000f08015801562000086573d6000803e3d6000fd5b506001600160a01b0390811660a05293841660805290921660c052506200013d945050505050565b6138eb806200308083390190565b6001600160a01b0381168114620000d257600080fd5b50565b60008060008060808587031215620000ec57600080fd5b8451620000f981620000bc565b60208601519094506200010c81620000bc565b60408601519093506200011f81620000bc565b60608601519092506200013281620000bc565b939692955090935050565b60805160a05160c051612ed8620001a8600039600061091d0152600081816060015281816102d501528181610357015281816103c2015281816106e801528181610769015281816107d401528181610b4d01528181610bec0152610c9e015260005050612ed86000f3fe6080604052600436106100345760003560e01c806305095ded146100395780638406c0791461004e578063b06c52da146100ab575b600080fd5b61004c610047366004612765565b6100be565b005b34801561005a57600080fd5b506100827f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b61004c6100b93660046127c9565b6104b3565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610139576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815533600061014a3447612888565b9050848061010001511561018a576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b856101ad8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156101e4576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c00151600003610222576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361025f576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61026987876108c2565b608087015173ffffffffffffffffffffffffffffffffffffffff161561047c5760006102988860800151610919565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000811660048301529192506000918316906370a0823190602401602060405180830381865afa15801561032a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061034e91906128c2565b905061038082337f00000000000000000000000000000000000000000000000000000000000000008c60c001516109ed565b60c08901516040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000811660048301528391908516906370a0823190602401602060405180830381865afa158015610414573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061043891906128c2565b6104429190612888565b14610479576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50505b6104868787610acf565b50479050818111156104a7576104a76000846104a28585612888565b610da8565b50506000909155505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0161052e576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815533600061053f3447612888565b90508680610100015161057e576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b876105a18160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156105d8576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c00151600003610616576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610653576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61065d89876108c2565b61067789600001518a60c001518a8a338b60800135610dde565b60c08a0152608089015173ffffffffffffffffffffffffffffffffffffffff161561088e5760006106ab8a60800151610919565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000811660048301529192506000918316906370a0823190602401602060405180830381865afa15801561073d573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061076191906128c2565b9050610792827f00000000000000000000000000000000000000000000000000000000000000008d60c00151610f7e565b60c08b01516040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000811660048301528391908516906370a0823190602401602060405180830381865afa158015610826573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061084a91906128c2565b6108549190612888565b1461088b576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50505b6108988987610acf565b50479050818111156108b4576108b46000846104a28585612888565b505060009091555050505050565b610120820151151560006108d960608401846128db565b905011151514610915576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036109e5578173ffffffffffffffffffffffffffffffffffffffff166326afaadd6040518163ffffffff1660e01b81526004016020604051808303816000875af11580156109bb573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109df9190612947565b92915050565b50805b919050565b60405173ffffffffffffffffffffffffffffffffffffffff80851660248301528316604482015260648101829052610ac99085907f23b872dd00000000000000000000000000000000000000000000000000000000906084015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152610fd4565b50505050565b6000610af3836080015173ffffffffffffffffffffffffffffffffffffffff161590565b610afe576000610b04565b8260c001515b9050826101200151610bcf576040517f75b4c00500000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016906375b4c005908390610b869087908790600401612bc5565b604080518083038185885af1158015610ba3573d6000803e3d6000fd5b50505050506040513d601f19601f82011682018060405250810190610bc89190612c98565b5050610d6c565b60a08301805173ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016918290526040517f75b4c00500000000000000000000000000000000000000000000000000000000815290916000918291906375b4c005908690610c56908a908a90600401612bc5565b604080518083038185885af1158015610c73573d6000803e3d6000fd5b50505050506040513d601f19601f82011682018060405250810190610c989190612c98565b915091507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663c2aad68f86608001358860a001518960e0015185878b8060600190610cf991906128db565b6040518863ffffffff1660e01b8152600401610d1a96959493929190612cc8565b6000604051808303818588803b158015610d3357600080fd5b505af1158015610d47573d6000803e3d6000fd5b50505073ffffffffffffffffffffffffffffffffffffffff90941660a0880152505050505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f183604051610d9b9190612d24565b60405180910390a1505050565b73ffffffffffffffffffffffffffffffffffffffff831615610dd457610dcf8383836110e3565b505050565b610dcf828261125f565b600083808203610e1a576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008686610e29600185612888565b818110610e3857610e38612d37565b9050602002810190610e4a9190612d66565b610e5b906080810190606001612da4565b90506000610e6882611389565b905073ffffffffffffffffffffffffffffffffffffffff8216610e9257610e8f3482612888565b90505b6000610e9e8989611441565b9050610eaa898961154d565b604080516060810182528c815273ffffffffffffffffffffffffffffffffffffffff89166020820152908101879052610ee5818b8b856115ba565b600083610ef186611389565b610efb9190612888565b905073ffffffffffffffffffffffffffffffffffffffff8516610f2557610f228882612888565b90505b8b811015610f6e576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018d9052602481018290526044015b60405180910390fd5b9c9b505050505050505050505050565b60405173ffffffffffffffffffffffffffffffffffffffff8316602482015260448101829052610dcf9084907fa9059cbb0000000000000000000000000000000000000000000000000000000090606401610a47565b6000611036826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166119ab9092919063ffffffff16565b90508051600014806110575750808060200190518101906110579190612dc1565b610dcf576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610f65565b73ffffffffffffffffffffffffffffffffffffffff8316611130576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661117d576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa1580156111ea573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061120e91906128c2565b905080821115611254576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610f65565b610ac9848484610f7e565b73ffffffffffffffffffffffffffffffffffffffff82166112ac576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b478111156112ef576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101829052476024820152604401610f65565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114611349576040519150601f19603f3d011682016040523d82523d6000602084013e61134e565b606091505b5050905080610dcf576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff82161561143a576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015611411573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061143591906128c2565b6109df565b4792915050565b60608160008167ffffffffffffffff81111561145f5761145f61251b565b604051908082528060200260200182016040528015611488578160200160208202803683370190505b5090506000805b83811015611542578686828181106114a9576114a9612d37565b90506020028101906114bb9190612d66565b6114cc906080810190606001612da4565b91506114d782611389565b8382815181106114e9576114e9612d37565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff821661153a573483828151811061152257611522612d37565b602002602001018181516115369190612888565b9052505b60010161148f565b509095945050505050565b60005b81811015610dcf573683838381811061156b5761156b612d37565b905060200281019061157d9190612d66565b905061158f60e0820160c08301612dde565b156115b1576115b16115a76060830160408401612da4565b82608001356119c2565b50600101611550565b6020840151604085015184918491849083600181146118c457600086866115e2600185612888565b8181106115f1576115f1612d37565b90506020028101906116039190612d66565b611614906080810190606001612da4565b9050600089815b818110156117c157368d8d8381811061163657611636612d37565b90506020028101906116489190612d66565b905061167761165d6060830160408401612da4565b73ffffffffffffffffffffffffffffffffffffffff161590565b806116da57506116da6116906040830160208401612da4565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b80156116f157506116f16116906020830183612da4565b8015611776575061177661170860a08301836128db565b61171791600491600091612dfb565b61172091612e25565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b6117ac576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8e516117b89082611b34565b5060010161161b565b505060005b6117d1600185612888565b8110156118bc5760008989838181106117ec576117ec612d37565b90506020028101906117fe9190612d66565b61180f906080810190606001612da4565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146118b35786828151811061185657611856612d37565b602002602001015161186782611389565b6118719190612888565b9250600073ffffffffffffffffffffffffffffffffffffffff82161561189857600061189a565b865b905083156118b1576118b1828a6104a28488612888565b505b506001016117c6565b50505061199f565b8760005b8181101561199c57368b8b838181106118e3576118e3612d37565b90506020028101906118f59190612d66565b905061190a61165d6060830160408401612da4565b8061192357506119236116906040830160208401612da4565b801561193a575061193a6116906020830183612da4565b8015611951575061195161170860a08301836128db565b611987576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8c516119939082611b34565b506001016118c8565b50505b50505050505050505050565b60606119ba8484600085611e12565b949350505050565b806000036119fc576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216611a515780341015610915576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa158015611abe573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611ae291906128c2565b905081811015611b28576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610f65565b610dcf83333085611f2b565b611b4a611b446020830183612da4565b3b151590565b611b80576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101356000819003611bc0576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000611bd561165d6060850160408601612da4565b611be0576000611be6565b82608001355b90506000611c02611bfd6060860160408701612da4565b611389565b90506000611c19611bfd6080870160608801612da4565b905082600003611c5057611c50611c366060870160408801612da4565b611c466040880160208901612da4565b8760800135612145565b8460800135821015611c9b576040517fcf4791810000000000000000000000000000000000000000000000000000000081526080860135600482015260248101839052604401610f65565b600080611cab6020880188612da4565b73ffffffffffffffffffffffffffffffffffffffff1685611ccf60a08a018a6128db565b604051611cdd929190612e6d565b60006040518083038185875af1925050503d8060008114611d1a576040519150601f19603f3d011682016040523d82523d6000602084013e611d1f565b606091505b509150915081611d3257611d328161227c565b6000611d47611bfd60808a0160608b01612da4565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b3889611d7860208b018b612da4565b611d8860608c0160408d01612da4565b611d9860808d0160608e01612da4565b8c60800135898711611daa5786611db4565b611db48a88612888565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b606082471015611ea4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610f65565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611ecd9190612e7d565b60006040518083038185875af1925050503d8060008114611f0a576040519150601f19603f3d011682016040523d82523d6000602084013e611f0f565b606091505b5091509150611f2087838387612286565b979650505050505050565b73ffffffffffffffffffffffffffffffffffffffff8416611f78576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216611fc5576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015612036573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061205a91906128c2565b9050612068828686866109ed565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa1580156120d8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906120fc91906128c2565b6121069190612888565b1461213d576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b73ffffffffffffffffffffffffffffffffffffffff831661216557505050565b73ffffffffffffffffffffffffffffffffffffffff82166121b2576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa158015612227573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061224b91906128c2565b1015610dcf57610dcf83837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff612326565b8051602082018181fd5b6060831561231c5782516000036123155773ffffffffffffffffffffffffffffffffffffffff85163b612315576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610f65565b50816119ba565b6119ba8383612416565b6040805173ffffffffffffffffffffffffffffffffffffffff8416602482015260448082018490528251808303909101815260649091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f095ea7b3000000000000000000000000000000000000000000000000000000001790526123b2848261245a565b610ac95760405173ffffffffffffffffffffffffffffffffffffffff841660248201526000604482015261240c9085907f095ea7b30000000000000000000000000000000000000000000000000000000090606401610a47565b610ac98482610fd4565b8151156124265781518083602001fd5b806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f659190612e8f565b60008060008473ffffffffffffffffffffffffffffffffffffffff16846040516124849190612e7d565b6000604051808303816000865af19150503d80600081146124c1576040519150601f19603f3d011682016040523d82523d6000602084013e6124c6565b606091505b50915091508180156124f05750805115806124f05750808060200190518101906124f09190612dc1565b8015612512575073ffffffffffffffffffffffffffffffffffffffff85163b15155b95945050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff8111828210171561256e5761256e61251b565b60405290565b600082601f83011261258557600080fd5b813567ffffffffffffffff808211156125a0576125a061251b565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f011681019082821181831017156125e6576125e661251b565b816040528381528660208588010111156125ff57600080fd5b836020870160208301376000602085830101528094505050505092915050565b73ffffffffffffffffffffffffffffffffffffffff8116811461264157600080fd5b50565b80356109e88161261f565b801515811461264157600080fd5b80356109e88161264f565b6000610140828403121561267b57600080fd5b61268361254a565b905081358152602082013567ffffffffffffffff808211156126a457600080fd5b6126b085838601612574565b602084015260408401359150808211156126c957600080fd5b506126d684828501612574565b6040830152506126e860608301612644565b60608201526126f960808301612644565b608082015261270a60a08301612644565b60a082015260c082013560c082015260e082013560e082015261010061273181840161265d565b9082015261012061274383820161265d565b9082015292915050565b600060c0828403121561275f57600080fd5b50919050565b6000806040838503121561277857600080fd5b823567ffffffffffffffff8082111561279057600080fd5b61279c86838701612668565b935060208501359150808211156127b257600080fd5b506127bf8582860161274d565b9150509250929050565b600080600080606085870312156127df57600080fd5b843567ffffffffffffffff808211156127f757600080fd5b61280388838901612668565b9550602087013591508082111561281957600080fd5b818701915087601f83011261282d57600080fd5b81358181111561283c57600080fd5b8860208260051b850101111561285157600080fd5b60208301955080945050604087013591508082111561286f57600080fd5b5061287c8782880161274d565b91505092959194509250565b818103818111156109df577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000602082840312156128d457600080fd5b5051919050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261291057600080fd5b83018035915067ffffffffffffffff82111561292b57600080fd5b60200191503681900382131561294057600080fd5b9250929050565b60006020828403121561295957600080fd5b81516129648161261f565b9392505050565b60005b8381101561298657818101518382015260200161296e565b50506000910152565b600081518084526129a781602086016020860161296b565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b60006101408251845260208301518160208601526129f98286018261298f565b91505060408301518482036040860152612a13828261298f565b9150506060830151612a3d606086018273ffffffffffffffffffffffffffffffffffffffff169052565b506080830151612a65608086018273ffffffffffffffffffffffffffffffffffffffff169052565b5060a0830151612a8d60a086018273ffffffffffffffffffffffffffffffffffffffff169052565b5060c083015160c085015260e083015160e085015261010080840151612ab68287018215159052565b50506101209283015115159390920192909252919050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112612b0357600080fd5b830160208101925035905067ffffffffffffffff811115612b2357600080fd5b80360382131561294057600080fd5b8183528181602085013750600060208284010152600060207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b8035600781106109e857600080fd5b60078110612bc1577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b9052565b604081526000612bd860408301856129d9565b8281036020840152833563ffffffff8116808214612bf557600080fd5b825250602084013567ffffffffffffffff81168114612c1357600080fd5b67ffffffffffffffff166020820152612c2f6040850185612ace565b60c06040840152612c4460c084018284612b32565b915050612c546060860186612ace565b8383036060850152612c67838284612b32565b9250505060808501356080830152612c8160a08601612b7b565b612c8e60a0840182612b8a565b5095945050505050565b60008060408385031215612cab57600080fd5b825191506020830151612cbd8161261f565b809150509250929050565b600073ffffffffffffffffffffffffffffffffffffffff808916835267ffffffffffffffff8816602084015280871660408401525084606083015260a06080830152612d1860a083018486612b32565b98975050505050505050565b60208152600061296460208301846129d9565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112612d9a57600080fd5b9190910192915050565b600060208284031215612db657600080fd5b81356129648161261f565b600060208284031215612dd357600080fd5b81516129648161264f565b600060208284031215612df057600080fd5b81356129648161264f565b60008085851115612e0b57600080fd5b83861115612e1857600080fd5b5050820193919092039150565b7fffffffff000000000000000000000000000000000000000000000000000000008135818116916004851015612e655780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b60008251612d9a81846020870161296b565b602081526000612964602083018461298f56fea2646970667358221220b5e6f7c717c0feeda4ace0e5f013604c01aec848f7ee5e25c3653baa4174a03c64736f6c6343000811003360806040523480156200001157600080fd5b50604051620038eb380380620038eb833981016040819052620000349162000092565b600080546001600160a01b03199081166001600160a01b039485161790915560028054821694841694909417909355600380549093169116179055620000dc565b80516001600160a01b03811681146200008d57600080fd5b919050565b600080600060608486031215620000a857600080fd5b620000b38462000075565b9250620000c36020850162000075565b9150620000d36040850162000075565b90509250925092565b6137ff80620000ec6000396000f3fe6080604052600436106100d65760003560e01c80637200b8291161007f5780638da5cb5b116100595780638da5cb5b14610246578063c2aad68f14610273578063e30c397814610286578063f2fde38b146102b357600080fd5b80637200b829146101e157806375b4c005146101f65780637cd2bffc1461023357600080fd5b806323452b9c116100b057806323452b9c1461014d5780632b71cb25146101625780636a60c3b7146101b457600080fd5b806301e33667146100e25780630bcb4982146101045780630d19e5191461012d57600080fd5b366100dd57005b600080fd5b3480156100ee57600080fd5b506101026100fd366004612cda565b6102d3565b005b610117610112366004612d5d565b61045d565b6040516101249190612e00565b60405180910390f35b34801561013957600080fd5b50610102610148366004612e41565b610541565b34801561015957600080fd5b50610102610a9f565b34801561016e57600080fd5b5060025461018f9073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610124565b3480156101c057600080fd5b5060035461018f9073ffffffffffffffffffffffffffffffffffffffff1681565b3480156101ed57600080fd5b50610102610b69565b610209610204366004613050565b610c4f565b6040805192835273ffffffffffffffffffffffffffffffffffffffff909116602083015201610124565b610117610241366004613194565b6118bd565b34801561025257600080fd5b5060005461018f9073ffffffffffffffffffffffffffffffffffffffff1681565b61010261028136600461322b565b61194a565b34801561029257600080fd5b5060015461018f9073ffffffffffffffffffffffffffffffffffffffff1681565b3480156102bf57600080fd5b506101026102ce3660046132a7565b611a37565b60005473ffffffffffffffffffffffffffffffffffffffff163314610324576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff83166103df5760008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114610399576040519150601f19603f3d011682016040523d82523d6000602084013e61039e565b606091505b50509050806103d9576040517f350c20f100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50610400565b61040073ffffffffffffffffffffffffffffffffffffffff84168383611b95565b6040805173ffffffffffffffffffffffffffffffffffffffff8086168252841660208201529081018290527f6337ed398c0e8467698c581374fdce4db14922df487b5a39483079f5f59b60a49060600160405180910390a1505050565b60025460009073ffffffffffffffffffffffffffffffffffffffff1633146104b1576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000806104c0858701876132cb565b9350505091506104d1888289611be4565b6040805173ffffffffffffffffffffffffffffffffffffffff808b1682528316602082015290810188905242606082015282907f1fbfa988fd46deed0de12c94c7b5dcb537d51b804246d0083f245f7a8997d1709060800160405180910390a26001925050505b95945050505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610592576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008673ffffffffffffffffffffffffffffffffffffffff16600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166382980dc46040518163ffffffff1660e01b8152600401602060405180830381865afa158015610618573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061063c9190613470565b73ffffffffffffffffffffffffffffffffffffffff16141580156107095750600254604080517fdfa2dbaf000000000000000000000000000000000000000000000000000000008152905173ffffffffffffffffffffffffffffffffffffffff808b1693169163dfa2dbaf9160048083019260209291908290030181865afa1580156106cc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106f09190613470565b73ffffffffffffffffffffffffffffffffffffffff1614155b80156107be5750600254604080517f95b12c27000000000000000000000000000000000000000000000000000000008152905173ffffffffffffffffffffffffffffffffffffffff808b169316916395b12c279160048083019260209291908290030181865afa158015610781573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107a59190613470565b73ffffffffffffffffffffffffffffffffffffffff1614155b80156108735750600254604080517fd8257d17000000000000000000000000000000000000000000000000000000008152905173ffffffffffffffffffffffffffffffffffffffff808b1693169163d8257d179160048083019260209291908290030181865afa158015610836573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061085a9190613470565b73ffffffffffffffffffffffffffffffffffffffff1614155b80156109285750600254604080517fc66a9c5a000000000000000000000000000000000000000000000000000000008152905173ffffffffffffffffffffffffffffffffffffffff808b1693169163c66a9c5a9160048083019260209291908290030181865afa1580156108eb573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061090f9190613470565b73ffffffffffffffffffffffffffffffffffffffff1614155b1561095f576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8673ffffffffffffffffffffffffffffffffffffffff16868660405161098692919061348d565b6000604051808303816000865af19150503d80600081146109c3576040519150601f19603f3d011682016040523d82523d6000602084013e6109c8565b606091505b50909150508015610a6457600073ffffffffffffffffffffffffffffffffffffffff8416156109f757836109f9565b335b9050610a06858285611be4565b6040805173ffffffffffffffffffffffffffffffffffffffff8088168252831660208201529081018490527f6337ed398c0e8467698c581374fdce4db14922df487b5a39483079f5f59b60a49060600160405180910390a150610a96565b6040517f750b219c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50505050505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610af0576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff16610b3f576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b60015473ffffffffffffffffffffffffffffffffffffffff16338114610bbb576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b600354600090819073ffffffffffffffffffffffffffffffffffffffff163314610ca5576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001610cb760c0850160a0860161349d565b6006811115610cc857610cc8612dd1565b03610fcd57600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166382980dc46040518163ffffffff1660e01b8152600401602060405180830381865afa158015610d3a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d5e9190613470565b9050610d82846080015173ffffffffffffffffffffffffffffffffffffffff161590565b15610e825760c084015160a085015160e086015173ffffffffffffffffffffffffffffffffffffffff841692633f2e5fc39290918290610dc860408a0160208b016134be565b610dd560208b018b6134d9565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e089901b16815273ffffffffffffffffffffffffffffffffffffffff9095166004860152602485019390935267ffffffffffffffff918216604485015216606483015263ffffffff16608482015260a4016000604051808303818588803b158015610e6457600080fd5b505af1158015610e78573d6000803e3d6000fd5b5050505050610f97565b610e958460800151828660c00151611c1a565b8073ffffffffffffffffffffffffffffffffffffffff1663a5977fbb8560a0015186608001518760c001518860e00151886020016020810190610ed891906134be565b610ee560208b018b6134d9565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e089901b16815273ffffffffffffffffffffffffffffffffffffffff9687166004820152959094166024860152604485019290925267ffffffffffffffff908116606485015216608483015263ffffffff1660a482015260c401600060405180830381600087803b158015610f7e57600080fd5b505af1158015610f92573d6000803e3d6000fd5b505050505b610fc68460a0015185608001518660c001518760e00151876020016020810190610fc191906134be565b611d51565b91506118b6565b6002610fdf60c0850160a0860161349d565b6006811115610ff057610ff0612dd1565b036111b157600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663d8257d176040518163ffffffff1660e01b8152600401602060405180830381865afa158015611062573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110869190613470565b905061109b8460800151828660c00151611c1a565b8073ffffffffffffffffffffffffffffffffffffffff16632346362485608001518660c001518760e001518860a001518860200160208101906110de91906134be565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e088901b16815273ffffffffffffffffffffffffffffffffffffffff9586166004820152602481019490945267ffffffffffffffff928316604485015293166064830152909116608482015260a401600060405180830381600087803b15801561116c57600080fd5b505af1158015611180573d6000803e3d6000fd5b50505060a0850151608086015160c087015160e0880151610fc694506111ac6040890160208a016134be565b611e04565b60036111c360c0850160a0860161349d565b60068111156111d4576111d4612dd1565b0361138357600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663dfa2dbaf6040518163ffffffff1660e01b8152600401602060405180830381865afa158015611246573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061126a9190613470565b905061127f8460800151828660c00151611c1a565b8073ffffffffffffffffffffffffffffffffffffffff1663de790c7e85608001518660c001518760a001518760200160208101906112bd91906134be565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e087901b16815273ffffffffffffffffffffffffffffffffffffffff948516600482015260248101939093529216604482015267ffffffffffffffff9091166064820152608401600060405180830381600087803b15801561134357600080fd5b505af1158015611357573d6000803e3d6000fd5b50505060a0850151608086015160c0870151610fc6935061137e60408801602089016134be565b611e9d565b600461139560c0850160a0860161349d565b60068111156113a6576113a6612dd1565b0361166257600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663c66a9c5a6040518163ffffffff1660e01b8152600401602060405180830381865afa158015611418573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061143c9190613470565b9050611460846080015173ffffffffffffffffffffffffffffffffffffffff161590565b15611555578073ffffffffffffffffffffffffffffffffffffffff1662a95fd78560c001518660c001518760e001518860a001518860200160208101906114a791906134be565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e088901b168152600481019490945267ffffffffffffffff928316602485015273ffffffffffffffffffffffffffffffffffffffff909116604484015216606482015260840160206040518083038185885af1158015611530573d6000803e3d6000fd5b50505050506040513d601f19601f82011682018060405250810190610fc691906134ff565b6115688460800151828660c00151611c1a565b8073ffffffffffffffffffffffffffffffffffffffff16632346362485608001518660c001518760e001518860a001518860200160208101906115ab91906134be565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e088901b16815273ffffffffffffffffffffffffffffffffffffffff9586166004820152602481019490945267ffffffffffffffff928316604485015293166064830152909116608482015260a4016020604051808303816000875af115801561163e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fc691906134ff565b600561167460c0850160a0860161349d565b600681111561168557611685612dd1565b0361177357600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166395b12c276040518163ffffffff1660e01b8152600401602060405180830381865afa1580156116f7573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061171b9190613470565b90506117308460800151828660c00151611c1a565b8073ffffffffffffffffffffffffffffffffffffffff1663a002930185608001518660c001518760e001518860a001518860200160208101906115ab91906134be565b600661178560c0850160a0860161349d565b600681111561179657611796612dd1565b0361188457600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166395b12c276040518163ffffffff1660e01b8152600401602060405180830381865afa158015611808573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061182c9190613470565b90506118418460800151828660c00151611c1a565b8073ffffffffffffffffffffffffffffffffffffffff16639e422c3385608001518660c001518760e001518860a001518860200160208101906115ab91906134be565b6040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b9250929050565b60025460009073ffffffffffffffffffffffffffffffffffffffff163314611911576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000808080611922878901896132cb565b935093509350935061193884848d858e86611f45565b5060019b9a5050505050505050505050565b60035473ffffffffffffffffffffffffffffffffffffffff16331461199b576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6002546040517f4289fbb300000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff90911690634289fbb39034906119fd908a908a908a908a908a908a90600401613518565b6000604051808303818588803b158015611a1657600080fd5b505af1158015611a2a573d6000803e3d6000fd5b5050505050505050505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314611a88576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8116611ad5576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff821603611b24576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae127890600090a350565b81601452806034526fa9059cbb00000000000000000000000060005260206000604460106000875af13d156001600051141716611bda576390b8ec186000526004601cfd5b6000603452505050565b73ffffffffffffffffffffffffffffffffffffffff831615611c1057611c0b838383612252565b505050565b611c0b82826123d9565b73ffffffffffffffffffffffffffffffffffffffff8316611c3a57505050565b73ffffffffffffffffffffffffffffffffffffffff8216611c87576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa158015611cfc573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611d2091906134ff565b1015611c0b57611c0b83837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff612503565b6040517fffffffffffffffffffffffffffffffffffffffff00000000000000000000000030606090811b8216602084015287811b8216603484015286901b166048820152605c81018490527fffffffffffffffff00000000000000000000000000000000000000000000000060c084811b8216607c84015283811b8216608484015246901b16608c8201526000906094015b60405160208183030381529060405280519060200120905095945050505050565b6040517fffffffffffffffffffffffffffffffffffffffff00000000000000000000000030606090811b8216602084015286811b82166034840152604883018690527fffffffffffffffff00000000000000000000000000000000000000000000000060c086811b821660688601529189901b909216607084015283811b8216608484015246901b16608c820152600090609401611de3565b6040517fffffffffffffffffffffffffffffffffffffffff00000000000000000000000030606090811b8216602084015285811b821660348401526048830185905286901b1660688201527fffffffffffffffff00000000000000000000000000000000000000000000000060c083811b8216607c84015246901b166084820152600090608c016040516020818303038152906040528051906020012090505b949350505050565b6003546040517fa516f0f300000000000000000000000000000000000000000000000000000000815260206004820152600860248201527f4578656375746f720000000000000000000000000000000000000000000000006044820152600091829173ffffffffffffffffffffffffffffffffffffffff9091169063a516f0f390606401602060405180830381865afa158015611fe6573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061200a9190613470565b905073ffffffffffffffffffffffffffffffffffffffff86166120c8576040517f4f91bc2b00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff821690634f91bc2b908690612081908c908c908c908c9060040161360c565b6000604051808303818588803b15801561209a57600080fd5b505af1935050505080156120ac575060015b6120bf576120ba8385612671565b6121e2565b600191506121e2565b856120eb73ffffffffffffffffffffffffffffffffffffffff8216836000612691565b61210c73ffffffffffffffffffffffffffffffffffffffff82168387612813565b6040517f4f91bc2b00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff831690634f91bc2b90612164908c908c908c908c9060040161360c565b600060405180830381600087803b15801561217e57600080fd5b505af192505050801561218f575060015b6121b9576121b473ffffffffffffffffffffffffffffffffffffffff8216858761290c565b6121be565b600192505b6121e073ffffffffffffffffffffffffffffffffffffffff8216836000612691565b505b81612248576040805173ffffffffffffffffffffffffffffffffffffffff80891682528516602082015290810185905242606082015288907f1fbfa988fd46deed0de12c94c7b5dcb537d51b804246d0083f245f7a8997d1709060800160405180910390a25b5050505050505050565b73ffffffffffffffffffffffffffffffffffffffff831661229f576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166122ec576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015612359573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061237d91906134ff565b9050808211156123c8576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044015b60405180910390fd5b6123d384848461290c565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8216612426576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b47811115612469576040517fcf479181000000000000000000000000000000000000000000000000000000008152600481018290524760248201526044016123bf565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d80600081146124c3576040519150601f19603f3d011682016040523d82523d6000602084013e6124c8565b606091505b5050905080611c0b576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040805173ffffffffffffffffffffffffffffffffffffffff8416602482015260448082018490528251808303909101815260649091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f095ea7b30000000000000000000000000000000000000000000000000000000017905261258f8482612962565b6123d35760405173ffffffffffffffffffffffffffffffffffffffff84166024820152600060448201526126679085907f095ea7b300000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152612a25565b6123d38482612a25565b60003860003884865af161268d5763b12d13eb6000526004601cfd5b5050565b80158061273157506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa15801561270b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061272f91906134ff565b155b6127bd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e63650000000000000000000060648201526084016123bf565b60405173ffffffffffffffffffffffffffffffffffffffff8316602482015260448101829052611c0b9084907f095ea7b300000000000000000000000000000000000000000000000000000000906064016125e5565b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff83811660248301526000919085169063dd62ed3e90604401602060405180830381865afa158015612889573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906128ad91906134ff565b90506123d3847f095ea7b300000000000000000000000000000000000000000000000000000000856128df8686613743565b60405173ffffffffffffffffffffffffffffffffffffffff909216602483015260448201526064016125e5565b60405173ffffffffffffffffffffffffffffffffffffffff8316602482015260448101829052611c0b9084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064016125e5565b60008060008473ffffffffffffffffffffffffffffffffffffffff168460405161298c919061377d565b6000604051808303816000865af19150503d80600081146129c9576040519150601f19603f3d011682016040523d82523d6000602084013e6129ce565b606091505b50915091508180156129f85750805115806129f85750808060200190518101906129f89190613799565b8015612a1a575073ffffffffffffffffffffffffffffffffffffffff85163b15155b925050505b92915050565b6000612a87826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16612b349092919063ffffffff16565b9050805160001480612aa8575080806020019051810190612aa89190613799565b611c0b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084016123bf565b6060611f3d8484600085856000808673ffffffffffffffffffffffffffffffffffffffff168587604051612b68919061377d565b60006040518083038185875af1925050503d8060008114612ba5576040519150601f19603f3d011682016040523d82523d6000602084013e612baa565b606091505b5091509150612bbb87838387612bc6565b979650505050505050565b60608315612c5c578251600003612c555773ffffffffffffffffffffffffffffffffffffffff85163b612c55576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016123bf565b5081611f3d565b611f3d8383815115612c715781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016123bf91906137b6565b73ffffffffffffffffffffffffffffffffffffffff81168114612cc757600080fd5b50565b8035612cd581612ca5565b919050565b600080600060608486031215612cef57600080fd5b8335612cfa81612ca5565b92506020840135612d0a81612ca5565b929592945050506040919091013590565b60008083601f840112612d2d57600080fd5b50813567ffffffffffffffff811115612d4557600080fd5b6020830191508360208285010111156118b657600080fd5b600080600080600060808688031215612d7557600080fd5b8535612d8081612ca5565b945060208601359350604086013567ffffffffffffffff811115612da357600080fd5b612daf88828901612d1b565b9094509250506060860135612dc381612ca5565b809150509295509295909350565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b6020810160038310612e3b577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b91905290565b60008060008060008060a08789031215612e5a57600080fd5b8635612e6581612ca5565b9550602087013567ffffffffffffffff811115612e8157600080fd5b612e8d89828a01612d1b565b9096509450506040870135612ea181612ca5565b92506060870135612eb181612ca5565b80925050608087013590509295509295509295565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff81118282101715612f1957612f19612ec6565b60405290565b60405160e0810167ffffffffffffffff81118282101715612f1957612f19612ec6565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715612f8957612f89612ec6565b604052919050565b600082601f830112612fa257600080fd5b813567ffffffffffffffff811115612fbc57612fbc612ec6565b612fed60207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f84011601612f42565b81815284602083860101111561300257600080fd5b816020850160208301376000918101602001919091529392505050565b8015158114612cc757600080fd5b8035612cd58161301f565b600060c0828403121561304a57600080fd5b50919050565b6000806040838503121561306357600080fd5b823567ffffffffffffffff8082111561307b57600080fd5b90840190610140828703121561309057600080fd5b613098612ef5565b823581526020830135828111156130ae57600080fd5b6130ba88828601612f91565b6020830152506040830135828111156130d257600080fd5b6130de88828601612f91565b6040830152506130f060608401612cca565b606082015261310160808401612cca565b608082015261311260a08401612cca565b60a082015260c083013560c082015260e083013560e082015261010061313981850161302d565b9082015261012061314b84820161302d565b908201529350602085013591508082111561316557600080fd5b5061317285828601613038565b9150509250929050565b803567ffffffffffffffff81168114612cd557600080fd5b600080600080600080600060c0888a0312156131af57600080fd5b87356131ba81612ca5565b965060208801356131ca81612ca5565b9550604088013594506131df6060890161317c565b9350608088013567ffffffffffffffff8111156131fb57600080fd5b6132078a828b01612d1b565b90945092505060a088013561321b81612ca5565b8091505092959891949750929550565b60008060008060008060a0878903121561324457600080fd5b863561324f81612ca5565b955060208701359450604087013561326681612ca5565b935060608701359250608087013567ffffffffffffffff81111561328957600080fd5b61329589828a01612d1b565b979a9699509497509295939492505050565b6000602082840312156132b957600080fd5b81356132c481612ca5565b9392505050565b600080600080608085870312156132e157600080fd5b84359350602085013567ffffffffffffffff8082111561330057600080fd5b818701915087601f83011261331457600080fd5b81358181111561332657613326612ec6565b61333560208260051b01612f42565b8082825260208201915060208360051b86010192508a83111561335757600080fd5b602085015b8381101561344257848135111561337257600080fd5b8035860160e07fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0828f030112156133a857600080fd5b6133b0612f1f565b6133bc60208301612cca565b81526133ca60408301612cca565b60208201526133db60608301612cca565b60408201526133ec60808301612cca565b606082015260a0820135608082015260c08201358781111561340d57600080fd5b61341c8f602083860101612f91565b60a08301525061342e60e0830161302d565b60c08201528452506020928301920161335c565b50809750505050505061345760408601612cca565b915061346560608601612cca565b905092959194509250565b60006020828403121561348257600080fd5b81516132c481612ca5565b8183823760009101908152919050565b6000602082840312156134af57600080fd5b8135600781106132c457600080fd5b6000602082840312156134d057600080fd5b6132c48261317c565b6000602082840312156134eb57600080fd5b813563ffffffff811681146132c457600080fd5b60006020828403121561351157600080fd5b5051919050565b600073ffffffffffffffffffffffffffffffffffffffff808916835287602084015280871660408401525084606083015260a060808301528260a0830152828460c0840137600060c0848401015260c07fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8501168301019050979650505050505050565b60005b838110156135b95781810151838201526020016135a1565b50506000910152565b600081518084526135da81602086016020860161359e565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b600060808083018784526020828186015281885180845260a093508387019150838160051b880101838b0160005b838110156136f7577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff608a84030185528151805173ffffffffffffffffffffffffffffffffffffffff9081168552878201518116888601526040808301518216908601526060808301519091169085015288810151898501528781015160e0898601819052906136cb828701826135c2565b91505060c08083015192506136e38187018415159052565b50958701959350509085019060010161363a565b505073ffffffffffffffffffffffffffffffffffffffff8a1660408901529550613722945050505050565b73ffffffffffffffffffffffffffffffffffffffff83166060830152610538565b80820180821115612a1f577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000825161378f81846020870161359e565b9190910192915050565b6000602082840312156137ab57600080fd5b81516132c48161301f565b6020815260006132c460208301846135c256fea2646970667358221220cbd328afc763c323a4e5ec86796ab0b7ec0c7b07c1317bda74088fb8b8fd569764736f6c63430008110033";
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