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
exports.GlacisFacet__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
var ethers_1 = require("ethers");
var _abi = [
    {
        type: "constructor",
        inputs: [
            {
                name: "_airlift",
                type: "address",
                internalType: "contract IGlacisAirlift",
            },
        ],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "airlift",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "address",
                internalType: "contract IGlacisAirlift",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "startBridgeTokensViaGlacis",
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
                name: "_glacisData",
                type: "tuple",
                internalType: "struct GlacisFacet.GlacisData",
                components: [
                    {
                        name: "refundAddress",
                        type: "address",
                        internalType: "address",
                    },
                    {
                        name: "nativeFee",
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
        name: "swapAndStartBridgeTokensViaGlacis",
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
                name: "_glacisData",
                type: "tuple",
                internalType: "struct GlacisFacet.GlacisData",
                components: [
                    {
                        name: "refundAddress",
                        type: "address",
                        internalType: "address",
                    },
                    {
                        name: "nativeFee",
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
var _bytecode = "0x60a06040523480156200001157600080fd5b506040516200262938038062002629833981016040819052620000349162000046565b6001600160a01b031660805262000078565b6000602082840312156200005957600080fd5b81516001600160a01b03811681146200007157600080fd5b9392505050565b608051612588620000a16000396000818160600152818161069e01526106c901526125886000f3fe6080604052600436106100345760003560e01c8063753cbab61461003957806382a3279b1461004e578063e10c04c1146100ab575b600080fd5b61004c6100473660046120a7565b6100be565b005b34801561005a57600080fd5b506100827f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b61004c6100b93660046120f6565b6102e7565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610139576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815533600061014a34476121a2565b90508461016f8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156101a6576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036101e4576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610221576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b858061010001511561025f576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b868061012001511561029d576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102af88608001518960c00151610514565b6102b98888610694565b5047915050818111156102db576102db6000846102d685856121a2565b61081e565b50506000909155505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610362576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815533600061037334476121a2565b9050868061010001516103b2576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b87806101200151156103f0576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886104138160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561044a576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c00151600003610488576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036104c5576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6104da8a600001518b60c001518b8b3361084f565b60c08b01526104e98a88610694565b504791505081811115610506576105066000846102d685856121a2565b505060009091555050505050565b8060000361054e576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166105a757803410156105a3576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa158015610614573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061063891906121dc565b905081811015610683576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044015b60405180910390fd5b61068f83333085610992565b505050565b6106c782608001517f00000000000000000000000000000000000000000000000000000000000000008460c00151610bac565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166398242b3f826020013584608001518560c001518660a0015173ffffffffffffffffffffffffffffffffffffffff1660001b8760e0015187600001602081019061074891906121f5565b60405160e088901b7fffffffff0000000000000000000000000000000000000000000000000000000016815273ffffffffffffffffffffffffffffffffffffffff9586166004820152602481019490945260448401929092526064830152909116608482015260a4016000604051808303818588803b1580156107ca57600080fd5b505af11580156107de573d6000803e3d6000fd5b50505050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1826040516108129190612285565b60405180910390a15050565b73ffffffffffffffffffffffffffffffffffffffff8316156108455761068f838383610c80565b61068f8282610e02565b60008280820361088b576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000858561089a6001856121a2565b8181106108a9576108a9612398565b90506020028101906108bb91906123c7565b6108cc9060808101906060016121f5565b905060006108d982610f2c565b905073ffffffffffffffffffffffffffffffffffffffff82166109035761090034826121a2565b90505b600061090f8888610fe5565b905061091b88886110f1565b6109288a8989898561115e565b60008261093485610f2c565b61093e91906121a2565b905089811015610984576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b90526024810182905260440161067a565b9a9950505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff84166109df576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610a2c576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015610a9d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ac191906121dc565b9050610acf82868686611510565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015610b3f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b6391906121dc565b610b6d91906121a2565b14610ba4576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b60405173ffffffffffffffffffffffffffffffffffffffff831660248201526044810182905261068f9084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff000000000000000000000000000000000000000000000000000000009093169290921790915261156e565b73ffffffffffffffffffffffffffffffffffffffff8316610ccd576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610d1a576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015610d87573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610dab91906121dc565b905080821115610df1576040517fcf479181000000000000000000000000000000000000000000000000000000008152600481018390526024810182905260440161067a565b610dfc848484610bac565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8216610e4f576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b47811115610e92576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810182905247602482015260440161067a565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114610eec576040519150601f19603f3d011682016040523d82523d6000602084013e610ef1565b606091505b505090508061068f576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff821615610fdd576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610fb4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fd891906121dc565b610fdf565b475b92915050565b60608160008167ffffffffffffffff81111561100357611003611e61565b60405190808252806020026020018201604052801561102c578160200160208202803683370190505b5090506000805b838110156110e65786868281811061104d5761104d612398565b905060200281019061105f91906123c7565b6110709060808101906060016121f5565b915061107b82610f2c565b83828151811061108d5761108d612398565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff82166110de57348382815181106110c6576110c6612398565b602002602001018181516110da91906121a2565b9052505b600101611033565b509095945050505050565b60005b8181101561068f573683838381811061110f5761110f612398565b905060200281019061112191906123c7565b905061113360e0820160c08301612405565b156111555761115561114b60608301604084016121f5565b8260800135610514565b506001016110f4565b83838383826001811461142b576000858561117a6001856121a2565b81811061118957611189612398565b905060200281019061119b91906123c7565b6111ac9060808101906060016121f5565b9050600089815b8181101561135757368d8d838181106111ce576111ce612398565b90506020028101906111e091906123c7565b905061120f6111f560608301604084016121f5565b73ffffffffffffffffffffffffffffffffffffffff161590565b80611272575061127261122860408301602084016121f5565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015611289575061128961122860208301836121f5565b801561130e575061130e6112a060a0830183612422565b6112af9160049160009161248e565b6112b8916124b8565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b611344576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61134e8f8261167d565b506001016111b3565b505060005b6113676001856121a2565b81101561142357600088888381811061138257611382612398565b905060200281019061139491906123c7565b6113a59060808101906060016121f5565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461141a578582815181106113ec576113ec612398565b60200260200101516113fd82610f2c565b61140791906121a2565b9250821561141a5761141a81888561081e565b5060010161135c565b505050611504565b8760005b8181101561150157368b8b8381811061144a5761144a612398565b905060200281019061145c91906123c7565b90506114716111f560608301604084016121f5565b8061148a575061148a61122860408301602084016121f5565b80156114a157506114a161122860208301836121f5565b80156114b857506114b86112a060a0830183612422565b6114ee576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6114f88d8261167d565b5060010161142f565b50505b50505050505050505050565b60405173ffffffffffffffffffffffffffffffffffffffff80851660248301528316604482015260648101829052610dfc9085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401610bfe565b60006115d0826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff1661195b9092919063ffffffff16565b90508051600014806115f15750808060200190518101906115f19190612500565b61068f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f74207375636365656400000000000000000000000000000000000000000000606482015260840161067a565b61169361168d60208301836121f5565b3b151590565b6116c9576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101356000819003611709576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600061171e6111f560608501604086016121f5565b61172957600061172f565b82608001355b9050600061174b61174660608601604087016121f5565b610f2c565b9050600061176261174660808701606088016121f5565b9050826000036117995761179961177f60608701604088016121f5565b61178f60408801602089016121f5565b8760800135611972565b84608001358210156117e4576040517fcf479181000000000000000000000000000000000000000000000000000000008152608086013560048201526024810183905260440161067a565b6000806117f460208801886121f5565b73ffffffffffffffffffffffffffffffffffffffff168561181860a08a018a612422565b60405161182692919061251d565b60006040518083038185875af1925050503d8060008114611863576040519150601f19603f3d011682016040523d82523d6000602084013e611868565b606091505b50915091508161187b5761187b81611aa9565b600061189061174660808a0160608b016121f5565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b38896118c160208b018b6121f5565b6118d160608c0160408d016121f5565b6118e160808d0160608e016121f5565b8c608001358987116118f357866118fd565b6118fd8a886121a2565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b606061196a8484600085611ab3565b949350505050565b73ffffffffffffffffffffffffffffffffffffffff831661199257505050565b73ffffffffffffffffffffffffffffffffffffffff82166119df576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa158015611a54573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a7891906121dc565b101561068f5761068f83837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611bcc565b8051602082018181fd5b606082471015611b45576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c0000000000000000000000000000000000000000000000000000606482015260840161067a565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611b6e919061252d565b60006040518083038185875af1925050503d8060008114611bab576040519150601f19603f3d011682016040523d82523d6000602084013e611bb0565b606091505b5091509150611bc187838387611cbc565b979650505050505050565b6040805173ffffffffffffffffffffffffffffffffffffffff8416602482015260448082018490528251808303909101815260649091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f095ea7b300000000000000000000000000000000000000000000000000000000179052611c588482611d5c565b610dfc5760405173ffffffffffffffffffffffffffffffffffffffff8416602482015260006044820152611cb29085907f095ea7b30000000000000000000000000000000000000000000000000000000090606401610bfe565b610dfc848261156e565b60608315611d52578251600003611d4b5773ffffffffffffffffffffffffffffffffffffffff85163b611d4b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161067a565b508161196a565b61196a8383611e1d565b60008060008473ffffffffffffffffffffffffffffffffffffffff1684604051611d86919061252d565b6000604051808303816000865af19150503d8060008114611dc3576040519150601f19603f3d011682016040523d82523d6000602084013e611dc8565b606091505b5091509150818015611df2575080511580611df2575080806020019051810190611df29190612500565b8015611e14575073ffffffffffffffffffffffffffffffffffffffff85163b15155b95945050505050565b815115611e2d5781518083602001fd5b806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161067a919061253f565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff81118282101715611eb457611eb4611e61565b60405290565b600082601f830112611ecb57600080fd5b813567ffffffffffffffff80821115611ee657611ee6611e61565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f01168101908282118183101715611f2c57611f2c611e61565b81604052838152866020858801011115611f4557600080fd5b836020870160208301376000602085830101528094505050505092915050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611f8957600080fd5b919050565b8015158114611f9c57600080fd5b50565b8035611f8981611f8e565b60006101408284031215611fbd57600080fd5b611fc5611e90565b905081358152602082013567ffffffffffffffff80821115611fe657600080fd5b611ff285838601611eba565b6020840152604084013591508082111561200b57600080fd5b5061201884828501611eba565b60408301525061202a60608301611f65565b606082015261203b60808301611f65565b608082015261204c60a08301611f65565b60a082015260c082013560c082015260e082013560e0820152610100612073818401611f9f565b90820152610120612085838201611f9f565b9082015292915050565b6000604082840312156120a157600080fd5b50919050565b600080606083850312156120ba57600080fd5b823567ffffffffffffffff8111156120d157600080fd5b6120dd85828601611faa565b9250506120ed846020850161208f565b90509250929050565b6000806000806080858703121561210c57600080fd5b843567ffffffffffffffff8082111561212457600080fd5b61213088838901611faa565b9550602087013591508082111561214657600080fd5b818701915087601f83011261215a57600080fd5b81358181111561216957600080fd5b8860208260051b850101111561217e57600080fd5b602083019550809450505050612197866040870161208f565b905092959194509250565b81810381811115610fdf577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000602082840312156121ee57600080fd5b5051919050565b60006020828403121561220757600080fd5b61221082611f65565b9392505050565b60005b8381101561223257818101518382015260200161221a565b50506000910152565b60008151808452612253816020860160208601612217565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815281516020820152600060208301516101408060408501526122ae61016085018361223b565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08584030160608601526122e9838261223b565b9250506060850151612313608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206123868187018315159052565b90950151151593019290925250919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff218336030181126123fb57600080fd5b9190910192915050565b60006020828403121561241757600080fd5b813561221081611f8e565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261245757600080fd5b83018035915067ffffffffffffffff82111561247257600080fd5b60200191503681900382131561248757600080fd5b9250929050565b6000808585111561249e57600080fd5b838611156124ab57600080fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156124f85780818660040360031b1b83161692505b505092915050565b60006020828403121561251257600080fd5b815161221081611f8e565b8183823760009101908152919050565b600082516123fb818460208701612217565b602081526000612210602083018461223b56fea2646970667358221220a783fd77ace1addfa846572dfeb85b909e23a66dfa49e225dc8a1ed0b6c2918464736f6c63430008110033";
var isSuperArgs = function (xs) { return xs.length > 1; };
var GlacisFacet__factory = /** @class */ (function (_super) {
    __extends(GlacisFacet__factory, _super);
    function GlacisFacet__factory() {
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
    GlacisFacet__factory.prototype.deploy = function (_airlift, overrides) {
        return _super.prototype.deploy.call(this, _airlift, overrides || {});
    };
    GlacisFacet__factory.prototype.getDeployTransaction = function (_airlift, overrides) {
        return _super.prototype.getDeployTransaction.call(this, _airlift, overrides || {});
    };
    GlacisFacet__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    GlacisFacet__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    GlacisFacet__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    GlacisFacet__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    GlacisFacet__factory.bytecode = _bytecode;
    GlacisFacet__factory.abi = _abi;
    return GlacisFacet__factory;
}(ethers_1.ContractFactory));
exports.GlacisFacet__factory = GlacisFacet__factory;
