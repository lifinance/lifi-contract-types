"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelayFacet__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        type: "constructor",
        inputs: [
            {
                name: "_relayReceiver",
                type: "address",
                internalType: "address",
            },
            {
                name: "_relaySolver",
                type: "address",
                internalType: "address",
            },
        ],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "consumedIds",
        inputs: [
            {
                name: "",
                type: "bytes32",
                internalType: "bytes32",
            },
        ],
        outputs: [
            {
                name: "",
                type: "bool",
                internalType: "bool",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "relayReceiver",
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
        name: "relaySolver",
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
        name: "startBridgeTokensViaRelay",
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
                name: "_relayData",
                type: "tuple",
                internalType: "struct RelayFacet.RelayData",
                components: [
                    {
                        name: "requestId",
                        type: "bytes32",
                        internalType: "bytes32",
                    },
                    {
                        name: "nonEVMReceiver",
                        type: "bytes32",
                        internalType: "bytes32",
                    },
                    {
                        name: "receivingAssetId",
                        type: "bytes32",
                        internalType: "bytes32",
                    },
                    {
                        name: "signature",
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
        name: "swapAndStartBridgeTokensViaRelay",
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
                name: "_relayData",
                type: "tuple",
                internalType: "struct RelayFacet.RelayData",
                components: [
                    {
                        name: "requestId",
                        type: "bytes32",
                        internalType: "bytes32",
                    },
                    {
                        name: "nonEVMReceiver",
                        type: "bytes32",
                        internalType: "bytes32",
                    },
                    {
                        name: "receivingAssetId",
                        type: "bytes32",
                        internalType: "bytes32",
                    },
                    {
                        name: "signature",
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
                type: "bytes32",
                indexed: false,
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
        name: "InvalidQuote",
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
    {
        type: "error",
        name: "SliceOutOfBounds",
        inputs: [],
    },
    {
        type: "error",
        name: "SliceOverflow",
        inputs: [],
    },
];
const _bytecode = "0x60c06040523480156200001157600080fd5b506040516200318638038062003186833981016040819052620000349162000069565b6001600160a01b039182166080521660a052620000a1565b80516001600160a01b03811681146200006457600080fd5b919050565b600080604083850312156200007d57600080fd5b62000088836200004c565b915062000098602084016200004c565b90509250929050565b60805160a0516130a5620000e1600039600081816086015281816103fd015281816107d30152610d9d01526000818160e40152610c9501526130a56000f3fe60806040526004361061005a5760003560e01c8063981886a711610043578063981886a7146100d2578063ae32859014610106578063f21a21161461011957600080fd5b806325d374e81461005f57806381d82dd814610074575b600080fd5b61007261006d366004612abd565b610159565b005b34801561008057600080fd5b506100a87f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b3480156100de57600080fd5b506100a87f000000000000000000000000000000000000000000000000000000000000000081565b610072610114366004612b7c565b610637565b34801561012557600080fd5b50610149610134366004612be9565b60006020819052908152604090205460ff1681565b60405190151581526020016100c9565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016101d4576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815581356000908152602081905260409020548590839060ff1615610227576040517ff861803000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60a082015173ffffffffffffffffffffffffffffffffffffffff167311f111f111f111f111f111f111f111f111f111f114801561026657506020810135155b1561029d576040517ff861803000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608082015160e08301516000916103aa918435914691309173ffffffffffffffffffffffffffffffffffffffff16906102d590610a22565b60a089015173ffffffffffffffffffffffffffffffffffffffff167311f111f111f111f111f111f111f111f111f111f11461032a5760a089015173ffffffffffffffffffffffffffffffffffffffff16610330565b87602001355b604080516020810197909752868101959095526060860193909352608085019190915260a084015260c083015284013560e082015261010001604051602081830303815290604052805190602001206020527b19457468657265756d205369676e6564204d6573736167653a0a3332600052603c60042090565b905060006103f9826103bf6060860186612c02565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610a5892505050565b90507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610480576040517ff861803000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b33600061048d3447612c9d565b90508a8061010001516104cc576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8b8061012001511561050a576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8c61052d8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610564576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036105a2576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036105df576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6105f48e600001518f60c001518f8f33610b02565b60c08f01526106038e8c610c4a565b504791505081811115610625576106256000846106208585612c9d565b611029565b50506000909555505050505050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016106b2576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181556106bf83612cb0565b8235600090815260208190526040902054839060ff161561070c576040517ff861803000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60a082015173ffffffffffffffffffffffffffffffffffffffff167311f111f111f111f111f111f111f111f111f111f114801561074b57506020810135155b15610782576040517ff861803000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608082015160e08301516000916107ba918435914691309173ffffffffffffffffffffffffffffffffffffffff16906102d590610a22565b905060006107cf826103bf6060860186612c02565b90507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610856576040517ff861803000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3360006108633447612c9d565b905061086e89612cb0565b60a081015173ffffffffffffffffffffffffffffffffffffffff166108bf576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036108fd576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361093a576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6109438a612cb0565b80610100015115610980576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6109898b612cb0565b806101200151156109c6576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6109e36109d960a08e0160808f01612cbc565b8d60c0013561105f565b6109f56109ef8d612cb0565b8c610c4a565b504791505081811115610a1257610a126000846106208585612c9d565b5050600090955550505050505050565b6000816512309ce5400103610a3b5750627dee6e919050565b81660416edef1601be03610a545750632f3fb341919050565b5090565b6040516001908360005260208301516040526040835103610aad57604083015160ff81901c601b016020527f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff16606052610ad3565b6041835103610ace57606083015160001a6020526040830151606052610ad3565b600091505b6020600160806000855afa5191503d610af457638baa579f6000526004601cfd5b600060605260405292915050565b600082808203610b3e576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008585610b4d600185612c9d565b818110610b5c57610b5c612cd7565b9050602002810190610b6e9190612d06565b610b7f906080810190606001612cbc565b90506000610b8c826111d5565b905073ffffffffffffffffffffffffffffffffffffffff8216610bb657610bb33482612c9d565b90505b6000610bc2888861128e565b9050610bce888861139a565b610bdb8a89898985611407565b600082610be7856111d5565b610bf19190612c9d565b905089811015610c3c576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044015b60405180910390fd5b9a9950505050505050505050565b608082015173ffffffffffffffffffffffffffffffffffffffff16610d7e5760c08201516040805183356020820152600092839273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169201604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081840301815290829052610cef91612d68565b60006040518083038185875af1925050503d8060008114610d2c576040519150601f19603f3d011682016040523d82523d6000602084013e610d31565b606091505b509150915081610d7757610d44816117b9565b6040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c339190612dc4565b5050610f2c565b60c082015160405173ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001660248201526044810191909152600090606401604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152918152602080830180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fa9059cbb000000000000000000000000000000000000000000000000000000001790529051610e5a918535910190815260200190565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081840301815290829052610e969291602001612dd7565b6040516020818303038152906040529050600080846080015173ffffffffffffffffffffffffffffffffffffffff1683604051610ed39190612d68565b6000604051808303816000865af19150503d8060008114610f10576040519150601f19603f3d011682016040523d82523d6000602084013e610f15565b606091505b509150915081610f2857610d44816117b9565b5050505b80356000908152602081905260409020805460017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0090911617905560a082015173ffffffffffffffffffffffffffffffffffffffff167fffffffffffffffffffffffffee0eee0eee0eee0eee0eee0eee0eee0eee0eee0f01610fee57610fb58260e00151610a22565b825160405160208481013582527f7be3e48a8a8b4d32138937e1809ac83481fffe48e49bb60e43ed1d3d50349e4c910160405180910390a35b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f18260405161101d9190612e06565b60405180910390a15050565b73ffffffffffffffffffffffffffffffffffffffff83161561105557611050838383611837565b505050565b61105082826119b9565b80600003611099576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166110f257803410156110ee576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa15801561115f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111839190612f19565b9050818110156111c9576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610c33565b61105083333085611ae3565b600073ffffffffffffffffffffffffffffffffffffffff821615611286576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa15801561125d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112819190612f19565b611288565b475b92915050565b60608160008167ffffffffffffffff8111156112ac576112ac612837565b6040519080825280602002602001820160405280156112d5578160200160208202803683370190505b5090506000805b8381101561138f578686828181106112f6576112f6612cd7565b90506020028101906113089190612d06565b611319906080810190606001612cbc565b9150611324826111d5565b83828151811061133657611336612cd7565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216611387573483828151811061136f5761136f612cd7565b602002602001018181516113839190612c9d565b9052505b6001016112dc565b509095945050505050565b60005b8181101561105057368383838181106113b8576113b8612cd7565b90506020028101906113ca9190612d06565b90506113dc60e0820160c08301612f32565b156113fe576113fe6113f46060830160408401612cbc565b826080013561105f565b5060010161139d565b8383838382600181146116d45760008585611423600185612c9d565b81811061143257611432612cd7565b90506020028101906114449190612d06565b611455906080810190606001612cbc565b9050600089815b8181101561160057368d8d8381811061147757611477612cd7565b90506020028101906114899190612d06565b90506114b861149e6060830160408401612cbc565b73ffffffffffffffffffffffffffffffffffffffff161590565b8061151b575061151b6114d16040830160208401612cbc565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b801561153257506115326114d16020830183612cbc565b80156115b757506115b761154960a0830183612c02565b61155891600491600091612f4f565b61156191612f79565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b6115ed576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6115f78f82611cfd565b5060010161145c565b505060005b611610600185612c9d565b8110156116cc57600088888381811061162b5761162b612cd7565b905060200281019061163d9190612d06565b61164e906080810190606001612cbc565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146116c35785828151811061169557611695612cd7565b60200260200101516116a6826111d5565b6116b09190612c9d565b925082156116c3576116c3818885611029565b50600101611605565b5050506117ad565b8760005b818110156117aa57368b8b838181106116f3576116f3612cd7565b90506020028101906117059190612d06565b905061171a61149e6060830160408401612cbc565b8061173357506117336114d16040830160208401612cbc565b801561174a575061174a6114d16020830183612cbc565b8015611761575061176161154960a0830183612c02565b611797576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6117a18d82611cfd565b506001016116d8565b50505b50505050505050505050565b60606044825110156117fe57505060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c79000000602082015290565b600061181a60048085516118129190612c9d565b859190611fdb565b9050808060200190518101906118309190612fc1565b9392505050565b73ffffffffffffffffffffffffffffffffffffffff8316611884576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166118d1576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa15801561193e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119629190612f19565b9050808211156119a8576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610c33565b6119b38484846120f5565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8216611a06576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b47811115611a49576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101829052476024820152604401610c33565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114611aa3576040519150601f19603f3d011682016040523d82523d6000602084013e611aa8565b606091505b5050905080611050576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8416611b30576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216611b7d576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015611bee573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611c129190612f19565b9050611c20828686866121c9565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015611c90573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611cb49190612f19565b611cbe9190612c9d565b14611cf5576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b611d13611d0d6020830183612cbc565b3b151590565b611d49576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101356000819003611d89576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000611d9e61149e6060850160408601612cbc565b611da9576000611daf565b82608001355b90506000611dcb611dc66060860160408701612cbc565b6111d5565b90506000611de2611dc66080870160608801612cbc565b905082600003611e1957611e19611dff6060870160408801612cbc565b611e0f6040880160208901612cbc565b8760800135612227565b8460800135821015611e64576040517fcf4791810000000000000000000000000000000000000000000000000000000081526080860135600482015260248101839052604401610c33565b600080611e746020880188612cbc565b73ffffffffffffffffffffffffffffffffffffffff1685611e9860a08a018a612c02565b604051611ea692919061302f565b60006040518083038185875af1925050503d8060008114611ee3576040519150601f19603f3d011682016040523d82523d6000602084013e611ee8565b606091505b509150915081611efb57611efb8161235e565b6000611f10611dc660808a0160608b01612cbc565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b3889611f4160208b018b612cbc565b611f5160608c0160408d01612cbc565b611f6160808d0160608e01612cbc565b8c60800135898711611f735786611f7d565b611f7d8a88612c9d565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b606081611fe981601f61303f565b1015612021576040517f47aaf07a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61202b828461303f565b84511015612065576040517f3b99b53d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60608215801561208457604051915060008252602082016040526120ec565b6040519150601f8416801560200281840101858101878315602002848b0101015b818310156120bd5780518352602092830192016120a5565b5050858452601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016604052505b50949350505050565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526110509084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152612368565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526119b39085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401612147565b73ffffffffffffffffffffffffffffffffffffffff831661224757505050565b73ffffffffffffffffffffffffffffffffffffffff8216612294576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa158015612309573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061232d9190612f19565b10156110505761105083837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff612477565b8051602082018181fd5b60006123ca826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166125679092919063ffffffff16565b90508051600014806123eb5750808060200190518101906123eb9190613052565b611050576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610c33565b6040805173ffffffffffffffffffffffffffffffffffffffff8416602482015260448082018490528251808303909101815260649091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f095ea7b300000000000000000000000000000000000000000000000000000000179052612503848261257e565b6119b35760405173ffffffffffffffffffffffffffffffffffffffff841660248201526000604482015261255d9085907f095ea7b30000000000000000000000000000000000000000000000000000000090606401612147565b6119b38482612368565b6060612576848460008561263f565b949350505050565b60008060008473ffffffffffffffffffffffffffffffffffffffff16846040516125a89190612d68565b6000604051808303816000865af19150503d80600081146125e5576040519150601f19603f3d011682016040523d82523d6000602084013e6125ea565b606091505b50915091508180156126145750805115806126145750808060200190518101906126149190613052565b8015612636575073ffffffffffffffffffffffffffffffffffffffff85163b15155b95945050505050565b6060824710156126d1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610c33565b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516126fa9190612d68565b60006040518083038185875af1925050503d8060008114612737576040519150601f19603f3d011682016040523d82523d6000602084013e61273c565b606091505b509150915061274d87838387612758565b979650505050505050565b606083156127ee5782516000036127e75773ffffffffffffffffffffffffffffffffffffffff85163b6127e7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610c33565b5081612576565b61257683838151156128035781518083602001fd5b806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c339190612dc4565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff8111828210171561288a5761288a612837565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff811182821017156128d7576128d7612837565b604052919050565b600067ffffffffffffffff8211156128f9576128f9612837565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600082601f83011261293657600080fd5b8135612949612944826128df565b612890565b81815284602083860101111561295e57600080fd5b816020850160208301376000918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461299f57600080fd5b919050565b80151581146129b257600080fd5b50565b803561299f816129a4565b600061014082840312156129d357600080fd5b6129db612866565b905081358152602082013567ffffffffffffffff808211156129fc57600080fd5b612a0885838601612925565b60208401526040840135915080821115612a2157600080fd5b50612a2e84828501612925565b604083015250612a406060830161297b565b6060820152612a516080830161297b565b6080820152612a6260a0830161297b565b60a082015260c082013560c082015260e082013560e0820152610100612a898184016129b5565b90820152610120612a9b8382016129b5565b9082015292915050565b600060808284031215612ab757600080fd5b50919050565b60008060008060608587031215612ad357600080fd5b843567ffffffffffffffff80821115612aeb57600080fd5b612af7888389016129c0565b95506020870135915080821115612b0d57600080fd5b818701915087601f830112612b2157600080fd5b813581811115612b3057600080fd5b8860208260051b8501011115612b4557600080fd5b602083019550809450506040870135915080821115612b6357600080fd5b50612b7087828801612aa5565b91505092959194509250565b60008060408385031215612b8f57600080fd5b823567ffffffffffffffff80821115612ba757600080fd5b908401906101408287031215612bbc57600080fd5b90925060208401359080821115612bd257600080fd5b50612bdf85828601612aa5565b9150509250929050565b600060208284031215612bfb57600080fd5b5035919050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112612c3757600080fd5b83018035915067ffffffffffffffff821115612c5257600080fd5b602001915036819003821315612c6757600080fd5b9250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b8181038181111561128857611288612c6e565b600061128836836129c0565b600060208284031215612cce57600080fd5b6118308261297b565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112612d3a57600080fd5b9190910192915050565b60005b83811015612d5f578181015183820152602001612d47565b50506000910152565b60008251612d3a818460208701612d44565b60008151808452612d92816020860160208601612d44565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815260006118306020830184612d7a565b60008351612de9818460208801612d44565b835190830190612dfd818360208801612d44565b01949350505050565b602081528151602082015260006020830151610140806040850152612e2f610160850183612d7a565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0858403016060860152612e6a8382612d7a565b9250506060850151612e94608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e0850151610100818187015280870151915050610120612f078187018315159052565b90950151151593019290925250919050565b600060208284031215612f2b57600080fd5b5051919050565b600060208284031215612f4457600080fd5b8135611830816129a4565b60008085851115612f5f57600080fd5b83861115612f6c57600080fd5b5050820193919092039150565b7fffffffff000000000000000000000000000000000000000000000000000000008135818116916004851015612fb95780818660040360031b1b83161692505b505092915050565b600060208284031215612fd357600080fd5b815167ffffffffffffffff811115612fea57600080fd5b8201601f81018413612ffb57600080fd5b8051613009612944826128df565b81815285602083850101111561301e57600080fd5b612636826020830160208601612d44565b8183823760009101908152919050565b8082018082111561128857611288612c6e565b60006020828403121561306457600080fd5b8151611830816129a456fea26469706673582212206dfe6c664c03d83b1bbeacc5598fd4fd07a4f036f2884498e1b6c972a94901d364736f6c63430008110033";
const isSuperArgs = (xs) => xs.length > 1;
class RelayFacet__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    deploy(_relayReceiver, _relaySolver, overrides) {
        return super.deploy(_relayReceiver, _relaySolver, overrides || {});
    }
    getDeployTransaction(_relayReceiver, _relaySolver, overrides) {
        return super.getDeployTransaction(_relayReceiver, _relaySolver, overrides || {});
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
exports.RelayFacet__factory = RelayFacet__factory;
Object.defineProperty(RelayFacet__factory, "bytecode", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _bytecode
});
Object.defineProperty(RelayFacet__factory, "abi", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _abi
});
//# sourceMappingURL=RelayFacet__factory.js.map