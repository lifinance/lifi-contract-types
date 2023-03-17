"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoninBridgeFacet__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [
            {
                internalType: "contract IRoninBridgeGateway",
                name: "_gateway",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        inputs: [],
        name: "CannotBridgeToSameNetwork",
        type: "error",
    },
    {
        inputs: [],
        name: "ContractCallNotAllowed",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "minAmount",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "receivedAmount",
                type: "uint256",
            },
        ],
        name: "CumulativeSlippageTooHigh",
        type: "error",
    },
    {
        inputs: [],
        name: "InformationMismatch",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "required",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "balance",
                type: "uint256",
            },
        ],
        name: "InsufficientBalance",
        type: "error",
    },
    {
        inputs: [],
        name: "InvalidAmount",
        type: "error",
    },
    {
        inputs: [],
        name: "InvalidContract",
        type: "error",
    },
    {
        inputs: [],
        name: "InvalidReceiver",
        type: "error",
    },
    {
        inputs: [],
        name: "NativeAssetTransferFailed",
        type: "error",
    },
    {
        inputs: [],
        name: "NoSwapDataProvided",
        type: "error",
    },
    {
        inputs: [],
        name: "NoSwapFromZeroBalance",
        type: "error",
    },
    {
        inputs: [],
        name: "NoTransferToNullAddress",
        type: "error",
    },
    {
        inputs: [],
        name: "NullAddrIsNotAValidSpender",
        type: "error",
    },
    {
        inputs: [],
        name: "NullAddrIsNotAnERC20Token",
        type: "error",
    },
    {
        inputs: [],
        name: "ReentrancyError",
        type: "error",
    },
    {
        inputs: [],
        name: "SliceOutOfBounds",
        type: "error",
    },
    {
        inputs: [],
        name: "SliceOverflow",
        type: "error",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "bytes32",
                name: "transactionId",
                type: "bytes32",
            },
            {
                indexed: false,
                internalType: "string",
                name: "integrator",
                type: "string",
            },
            {
                indexed: false,
                internalType: "string",
                name: "referrer",
                type: "string",
            },
            {
                indexed: false,
                internalType: "address",
                name: "receiver",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "fromAssetId",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "toAssetId",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "fromAmount",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "toAmount",
                type: "uint256",
            },
        ],
        name: "LiFiGenericSwapCompleted",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "bytes32",
                name: "transactionId",
                type: "bytes32",
            },
            {
                indexed: false,
                internalType: "string",
                name: "integrator",
                type: "string",
            },
            {
                indexed: false,
                internalType: "string",
                name: "referrer",
                type: "string",
            },
            {
                indexed: false,
                internalType: "address",
                name: "fromAssetId",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "toAssetId",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "fromAmount",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "toAmount",
                type: "uint256",
            },
        ],
        name: "LiFiSwappedGeneric",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "bytes32",
                name: "transactionId",
                type: "bytes32",
            },
            {
                indexed: false,
                internalType: "address",
                name: "receivingAssetId",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "receiver",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "timestamp",
                type: "uint256",
            },
        ],
        name: "LiFiTransferCompleted",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "bytes32",
                name: "transactionId",
                type: "bytes32",
            },
            {
                indexed: false,
                internalType: "address",
                name: "receivingAssetId",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "receiver",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "timestamp",
                type: "uint256",
            },
        ],
        name: "LiFiTransferRecovered",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                components: [
                    {
                        internalType: "bytes32",
                        name: "transactionId",
                        type: "bytes32",
                    },
                    {
                        internalType: "string",
                        name: "bridge",
                        type: "string",
                    },
                    {
                        internalType: "string",
                        name: "integrator",
                        type: "string",
                    },
                    {
                        internalType: "address",
                        name: "referrer",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "sendingAssetId",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "receiver",
                        type: "address",
                    },
                    {
                        internalType: "uint256",
                        name: "minAmount",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "destinationChainId",
                        type: "uint256",
                    },
                    {
                        internalType: "bool",
                        name: "hasSourceSwaps",
                        type: "bool",
                    },
                    {
                        internalType: "bool",
                        name: "hasDestinationCall",
                        type: "bool",
                    },
                ],
                indexed: false,
                internalType: "struct ILiFi.BridgeData",
                name: "bridgeData",
                type: "tuple",
            },
        ],
        name: "LiFiTransferStarted",
        type: "event",
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "bytes32",
                        name: "transactionId",
                        type: "bytes32",
                    },
                    {
                        internalType: "string",
                        name: "bridge",
                        type: "string",
                    },
                    {
                        internalType: "string",
                        name: "integrator",
                        type: "string",
                    },
                    {
                        internalType: "address",
                        name: "referrer",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "sendingAssetId",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "receiver",
                        type: "address",
                    },
                    {
                        internalType: "uint256",
                        name: "minAmount",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "destinationChainId",
                        type: "uint256",
                    },
                    {
                        internalType: "bool",
                        name: "hasSourceSwaps",
                        type: "bool",
                    },
                    {
                        internalType: "bool",
                        name: "hasDestinationCall",
                        type: "bool",
                    },
                ],
                internalType: "struct ILiFi.BridgeData",
                name: "_bridgeData",
                type: "tuple",
            },
        ],
        name: "startBridgeTokensViaRoninBridge",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "bytes32",
                        name: "transactionId",
                        type: "bytes32",
                    },
                    {
                        internalType: "string",
                        name: "bridge",
                        type: "string",
                    },
                    {
                        internalType: "string",
                        name: "integrator",
                        type: "string",
                    },
                    {
                        internalType: "address",
                        name: "referrer",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "sendingAssetId",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "receiver",
                        type: "address",
                    },
                    {
                        internalType: "uint256",
                        name: "minAmount",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "destinationChainId",
                        type: "uint256",
                    },
                    {
                        internalType: "bool",
                        name: "hasSourceSwaps",
                        type: "bool",
                    },
                    {
                        internalType: "bool",
                        name: "hasDestinationCall",
                        type: "bool",
                    },
                ],
                internalType: "struct ILiFi.BridgeData",
                name: "_bridgeData",
                type: "tuple",
            },
            {
                components: [
                    {
                        internalType: "address",
                        name: "callTo",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "approveTo",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "sendingAssetId",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "receivingAssetId",
                        type: "address",
                    },
                    {
                        internalType: "uint256",
                        name: "fromAmount",
                        type: "uint256",
                    },
                    {
                        internalType: "bytes",
                        name: "callData",
                        type: "bytes",
                    },
                    {
                        internalType: "bool",
                        name: "requiresDeposit",
                        type: "bool",
                    },
                ],
                internalType: "struct LibSwap.SwapData[]",
                name: "_swapData",
                type: "tuple[]",
            },
        ],
        name: "swapAndStartBridgeTokensViaRoninBridge",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
];
var _bytecode = "0x60a06040523480156200001157600080fd5b50604051620028d6380380620028d6833981016040819052620000349162000046565b6001600160a01b031660805262000078565b6000602082840312156200005957600080fd5b81516001600160a01b03811681146200007157600080fd5b9392505050565b60805161283b6200009b60003960008181610715015261077b015261283b6000f3fe6080604052600436106100295760003560e01c80636502c79a1461002e578063c7c8b35514610043575b600080fd5b61004161003c3660046121b4565b610056565b005b6100416100513660046121e9565b610290565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100d1576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006100e234476122b2565b90508380610100015115610122576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8480610120015115610160576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b856101838160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156101ba576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036101f8576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610235576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61024787608001518860c001516104d3565b61025087610653565b5047915060009050828211610266576000610270565b61027083836122b2565b905080156102845761028460008583610820565b50506000909255505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0161030b576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815533600061031c34476122b2565b90508580610100015161035b576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8680610120015115610399576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b876103bc8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156103f3576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c00151600003610431576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361046e576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61048389600001518a60c001518a8a33610851565b60c08a015261049189610653565b50479150600090508282116104a75760006104b1565b6104b183836122b2565b905080156104c5576104c560008583610820565b505060009092555050505050565b73ffffffffffffffffffffffffffffffffffffffff821661052c5780341015610528576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b80600003610566576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa1580156105d3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105f791906122c5565b905081811015610642576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044015b60405180910390fd5b61064e83333085610994565b505050565b600060405180606001604052808360a0015173ffffffffffffffffffffffffffffffffffffffff168152602001836080015173ffffffffffffffffffffffffffffffffffffffff1681526020016040518060600160405280600060018111156106be576106be6122de565b8152602001600081526020018560c00151815250815250905060006106fb836080015173ffffffffffffffffffffffffffffffffffffffff161590565b1561070b575060c082015161073e565b61073e83608001517f00000000000000000000000000000000000000000000000000000000000000008560c00151610bae565b6040517f4b14557e00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001690634b14557e9083906107b290869060040161230d565b6000604051808303818588803b1580156107cb57600080fd5b505af11580156107df573d6000803e3d6000fd5b50505050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f183604051610813919061240b565b60405180910390a1505050565b73ffffffffffffffffffffffffffffffffffffffff8316156108475761064e838383610cf9565b61064e8282610e28565b60008280820361088d576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000858561089c6001856122b2565b8181106108ab576108ab61251e565b90506020028101906108bd919061254d565b6108ce90608081019060600161258b565b905060006108db82610f52565b905073ffffffffffffffffffffffffffffffffffffffff82166109055761090234826122b2565b90505b6000610911888861100b565b905061091d8888611117565b61092a8a89898985611178565b60008261093685610f52565b61094091906122b2565b905089811015610986576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b905260248101829052604401610639565b9a9950505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff84166109e1576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610a2e576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015610a9f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ac391906122c5565b9050610ad18286868661152a565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015610b41573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b6591906122c5565b610b6f91906122b2565b14610ba6576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610bce57505050565b73ffffffffffffffffffffffffffffffffffffffff8216610c1b576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff83811660248301526000919085169063dd62ed3e90604401602060405180830381865afa158015610c91573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cb591906122c5565b905081811015610cf357610cf38484610cee847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6122b2565b611606565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8316610d46576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015610db3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610dd791906122c5565b905080821115610e1d576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610639565b610cf3848484611704565b73ffffffffffffffffffffffffffffffffffffffff8216610e75576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b47811115610eb8576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101829052476024820152604401610639565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114610f12576040519150601f19603f3d011682016040523d82523d6000602084013e610f17565b606091505b505090508061064e576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff821615611003576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610fda573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ffe91906122c5565b611005565b475b92915050565b60608160008167ffffffffffffffff81111561102957611029611f23565b604051908082528060200260200182016040528015611052578160200160208202803683370190505b5090506000805b8381101561110c578686828181106110735761107361251e565b9050602002810190611085919061254d565b61109690608081019060600161258b565b91506110a182610f52565b8382815181106110b3576110b361251e565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff821661110457348382815181106110ec576110ec61251e565b6020026020010181815161110091906122b2565b9052505b600101611059565b509095945050505050565b60005b8181101561064e5760008383838181106111365761113661251e565b9050602002810190611148919061254d565b611151906125a6565b90508060c001511561116f5761116f816040015182608001516104d3565b5060010161111a565b83838383826001811461144557600085856111946001856122b2565b8181106111a3576111a361251e565b90506020028101906111b5919061254d565b6111c690608081019060600161258b565b9050600089815b8181101561137157368d8d838181106111e8576111e861251e565b90506020028101906111fa919061254d565b905061122961120f606083016040840161258b565b73ffffffffffffffffffffffffffffffffffffffff161590565b8061128c575061128c611242604083016020840161258b565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b80156112a357506112a3611242602083018361258b565b801561132857506113286112ba60a083018361264b565b6112c9916004916000916126b7565b6112d2916126e1565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b61135e576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6113688f8261175a565b506001016111cd565b505060005b6113816001856122b2565b81101561143d57600088888381811061139c5761139c61251e565b90506020028101906113ae919061254d565b6113bf90608081019060600161258b565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614611434578582815181106114065761140661251e565b602002602001015161141782610f52565b61142191906122b2565b9250821561143457611434818885610820565b50600101611376565b50505061151e565b8760005b8181101561151b57368b8b838181106114645761146461251e565b9050602002810190611476919061254d565b905061148b61120f606083016040840161258b565b806114a457506114a4611242604083016020840161258b565b80156114bb57506114bb611242602083018361258b565b80156114d257506114d26112ba60a083018361264b565b611508576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6115128d8261175a565b50600101611449565b50505b50505050505050505050565b60405173ffffffffffffffffffffffffffffffffffffffff80851660248301528316604482015260648101829052610cf39085907f23b872dd00000000000000000000000000000000000000000000000000000000906084015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611a70565b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8381166024830152600091839186169063dd62ed3e90604401602060405180830381865afa15801561167d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116a191906122c5565b6116ab9190612729565b60405173ffffffffffffffffffffffffffffffffffffffff8516602482015260448101829052909150610cf39085907f095ea7b30000000000000000000000000000000000000000000000000000000090606401611584565b60405173ffffffffffffffffffffffffffffffffffffffff831660248201526044810182905261064e9084907fa9059cbb0000000000000000000000000000000000000000000000000000000090606401611584565b61177061176a602083018361258b565b3b151590565b6117a6576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608081013560008190036117e6576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006117fb61120f606085016040860161258b565b61180657600061180c565b82608001355b90506000611828611823606086016040870161258b565b610f52565b9050600061183f611823608087016060880161258b565b9050826000036118765761187661185c606087016040880161258b565b61186c604088016020890161258b565b8760800135610bae565b84608001358210156118c1576040517fcf4791810000000000000000000000000000000000000000000000000000000081526080860135600482015260248101839052604401610639565b6000806118d1602088018861258b565b73ffffffffffffffffffffffffffffffffffffffff16856118f560a08a018a61264b565b60405161190392919061273c565b60006040518083038185875af1925050503d8060008114611940576040519150601f19603f3d011682016040523d82523d6000602084013e611945565b606091505b50915091508161199057600061195a82611b7c565b9050806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610639919061274c565b60006119a561182360808a0160608b0161258b565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b38896119d660208b018b61258b565b6119e660608c0160408d0161258b565b6119f660808d0160608e0161258b565b8c60800135898711611a085786611a12565b611a128a886122b2565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b6000611ad2826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611bfa9092919063ffffffff16565b80519091501561064e5780806020019051810190611af0919061275f565b61064e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610639565b6060604482511015611bc157505060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c79000000602082015290565b6000611bdd6004808551611bd591906122b2565b859190611c11565b905080806020019051810190611bf3919061277c565b9392505050565b6060611c098484600085611d2b565b949350505050565b606081611c1f81601f612729565b1015611c57576040517f47aaf07a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611c618284612729565b84511015611c9b576040517f3b99b53d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b606082158015611cba5760405191506000825260208201604052611d22565b6040519150601f8416801560200281840101858101878315602002848b0101015b81831015611cf3578051835260209283019201611cdb565b5050858452601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016604052505b50949350505050565b606082471015611dbd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610639565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611de691906127f3565b60006040518083038185875af1925050503d8060008114611e23576040519150601f19603f3d011682016040523d82523d6000602084013e611e28565b606091505b5091509150611e3987838387611e44565b979650505050505050565b60608315611eda578251600003611ed35773ffffffffffffffffffffffffffffffffffffffff85163b611ed3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610639565b5081611c09565b611c098383815115611eef5781518083602001fd5b806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610639919061274c565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff81118282101715611f7657611f76611f23565b60405290565b60405160e0810167ffffffffffffffff81118282101715611f7657611f76611f23565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715611fe657611fe6611f23565b604052919050565b600067ffffffffffffffff82111561200857612008611f23565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600082601f83011261204557600080fd5b813561205861205382611fee565b611f9f565b81815284602083860101111561206d57600080fd5b816020850160208301376000918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff811681146120ae57600080fd5b919050565b80151581146120c157600080fd5b50565b80356120ae816120b3565b600061014082840312156120e257600080fd5b6120ea611f52565b905081358152602082013567ffffffffffffffff8082111561210b57600080fd5b61211785838601612034565b6020840152604084013591508082111561213057600080fd5b5061213d84828501612034565b60408301525061214f6060830161208a565b60608201526121606080830161208a565b608082015261217160a0830161208a565b60a082015260c082013560c082015260e082013560e08201526101006121988184016120c4565b908201526101206121aa8382016120c4565b9082015292915050565b6000602082840312156121c657600080fd5b813567ffffffffffffffff8111156121dd57600080fd5b611c09848285016120cf565b6000806000604084860312156121fe57600080fd5b833567ffffffffffffffff8082111561221657600080fd5b612222878388016120cf565b9450602086013591508082111561223857600080fd5b818601915086601f83011261224c57600080fd5b81358181111561225b57600080fd5b8760208260051b850101111561227057600080fd5b6020830194508093505050509250925092565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b8181038181111561100557611005612283565b6000602082840312156122d757600080fd5b5051919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b600060a08201905073ffffffffffffffffffffffffffffffffffffffff80845116835280602085015116602084015250604083015180516002811061237b577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b8060408501525060208101516060840152604081015160808401525092915050565b60005b838110156123b85781810151838201526020016123a0565b50506000910152565b600081518084526123d981602086016020860161239d565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815281516020820152600060208301516101408060408501526124346101608501836123c1565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe085840301606086015261246f83826123c1565b9250506060850151612499608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e085015161010081818701528087015191505061012061250c8187018315159052565b90950151151593019290925250919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2183360301811261258157600080fd5b9190910192915050565b60006020828403121561259d57600080fd5b611bf38261208a565b600060e082360312156125b857600080fd5b6125c0611f7c565b6125c98361208a565b81526125d76020840161208a565b60208201526125e86040840161208a565b60408201526125f96060840161208a565b60608201526080830135608082015260a083013567ffffffffffffffff81111561262257600080fd5b61262e36828601612034565b60a08301525061264060c084016120c4565b60c082015292915050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261268057600080fd5b83018035915067ffffffffffffffff82111561269b57600080fd5b6020019150368190038213156126b057600080fd5b9250929050565b600080858511156126c757600080fd5b838611156126d457600080fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156127215780818660040360031b1b83161692505b505092915050565b8082018082111561100557611005612283565b8183823760009101908152919050565b602081526000611bf360208301846123c1565b60006020828403121561277157600080fd5b8151611bf3816120b3565b60006020828403121561278e57600080fd5b815167ffffffffffffffff8111156127a557600080fd5b8201601f810184136127b657600080fd5b80516127c461205382611fee565b8181528560208385010111156127d957600080fd5b6127ea82602083016020860161239d565b95945050505050565b6000825161258181846020870161239d56fea2646970667358221220d921acec742b9293abe59fb58aa1a96c341ddf016f60f4e98978a4de2b18f24464736f6c63430008110033";
var isSuperArgs = function (xs) { return xs.length > 1; };
var RoninBridgeFacet__factory = /** @class */ (function (_super) {
    __extends(RoninBridgeFacet__factory, _super);
    function RoninBridgeFacet__factory() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _this = this;
        if (isSuperArgs(args)) {
            _this = _super.apply(this, args) || this;
        }
        else {
            _this = _super.call(this, _abi, _bytecode, args[0]) || this;
        }
        return _this;
    }
    RoninBridgeFacet__factory.prototype.deploy = function (_gateway, overrides) {
        return _super.prototype.deploy.call(this, _gateway, overrides || {});
    };
    RoninBridgeFacet__factory.prototype.getDeployTransaction = function (_gateway, overrides) {
        return _super.prototype.getDeployTransaction.call(this, _gateway, overrides || {});
    };
    RoninBridgeFacet__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    RoninBridgeFacet__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    RoninBridgeFacet__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    RoninBridgeFacet__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    RoninBridgeFacet__factory.bytecode = _bytecode;
    RoninBridgeFacet__factory.abi = _abi;
    return RoninBridgeFacet__factory;
}(ethers_1.ContractFactory));
exports.RoninBridgeFacet__factory = RoninBridgeFacet__factory;
