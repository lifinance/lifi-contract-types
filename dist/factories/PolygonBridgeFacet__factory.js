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
exports.PolygonBridgeFacet__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
var ethers_1 = require("ethers");
var _abi = [
    {
        type: "constructor",
        inputs: [
            {
                name: "_rootChainManager",
                type: "address",
                internalType: "contract IRootChainManager",
            },
            {
                name: "_erc20Predicate",
                type: "address",
                internalType: "address",
            },
        ],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "startBridgeTokensViaPolygonBridge",
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
        ],
        outputs: [],
        stateMutability: "payable",
    },
    {
        type: "function",
        name: "swapAndStartBridgeTokensViaPolygonBridge",
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
var _bytecode = "0x60c06040523480156200001157600080fd5b50604051620029eb380380620029eb833981016040819052620000349162000065565b6001600160a01b039182166080521660a052620000a4565b6001600160a01b03811681146200006257600080fd5b50565b600080604083850312156200007957600080fd5b825162000086816200004c565b602084015190925062000099816200004c565b809150509250929050565b60805160a051612913620000d860003960006107c60152600081816106a00152818161074d015261087e01526129136000f3fe6080604052600436106100295760003560e01c8063af62c7d61461002e578063b4f3758114610043575b600080fd5b61004161003c36600461237b565b610056565b005b6100416100513660046123b0565b61027d565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100d1576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006100e23447612479565b90508380610100015115610122576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8480610120015115610160576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b856101838160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156101ba576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036101f8576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610235576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61024787608001518860c001516104a8565b61025087610628565b5047915050818111156102725761027260008461026d8585612479565b610923565b505060009091555050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016102f8576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006103093447612479565b905085806101000151610348576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8680610120015115610386576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b876103a98160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156103e0576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c0015160000361041e576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361045b576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61047089600001518a60c001518a8a33610954565b60c08a015261047e89610628565b50479150508181111561049b5761049b60008461026d8585612479565b5050600090915550505050565b806000036104e2576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661053b5780341015610537576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa1580156105a8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105cc919061248c565b905081811015610617576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044015b60405180910390fd5b61062383333085610a97565b505050565b600061064c826080015173ffffffffffffffffffffffffffffffffffffffff161590565b156107035760c082015160a08301516040517f4faa8a2600000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff91821660048201527f000000000000000000000000000000000000000000000000000000000000000090911691634faa8a26916024016000604051808303818588803b1580156106e557600080fd5b505af11580156106f9573d6000803e3d6000fd5b50505050506108e8565b60808201516040517fea60c7c400000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff91821660048201527f00000000000000000000000000000000000000000000000000000000000000009091169063ea60c7c490602401602060405180830381865afa158015610796573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107ba91906124a5565b90506107ef82608001517f00000000000000000000000000000000000000000000000000000000000000008460c00151610cb1565b60008260c0015160405160200161080891815260200190565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529082905260a085015160808601517fe3dec8fb00000000000000000000000000000000000000000000000000000000845291935073ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169263e3dec8fb926108b492918690600401612530565b600060405180830381600087803b1580156108ce57600080fd5b505af11580156108e2573d6000803e3d6000fd5b50505050505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1826040516109179190612572565b60405180910390a15050565b73ffffffffffffffffffffffffffffffffffffffff83161561094a57610623838383610df4565b6106238282610f76565b600082808203610990576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000858561099f600185612479565b8181106109ae576109ae612685565b90506020028101906109c091906126b4565b6109d19060808101906060016126f2565b905060006109de826110a0565b905073ffffffffffffffffffffffffffffffffffffffff8216610a0857610a053482612479565b90505b6000610a148888611159565b9050610a208888611265565b610a2d8a898989856112d2565b600082610a39856110a0565b610a439190612479565b905089811015610a89576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b90526024810182905260440161060e565b9a9950505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8416610ae4576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610b31576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015610ba2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bc6919061248c565b9050610bd482868686611684565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015610c44573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c68919061248c565b610c729190612479565b14610ca9576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610cd157505050565b73ffffffffffffffffffffffffffffffffffffffff8216610d1e576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa158015610d93573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610db7919061248c565b101561062357610dc983836000611760565b61062383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611760565b73ffffffffffffffffffffffffffffffffffffffff8316610e41576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610e8e576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015610efb573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f1f919061248c565b905080821115610f65576040517fcf479181000000000000000000000000000000000000000000000000000000008152600481018390526024810182905260440161060e565b610f708484846118e2565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8216610fc3576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b47811115611006576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810182905247602482015260440161060e565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114611060576040519150601f19603f3d011682016040523d82523d6000602084013e611065565b606091505b5050905080610623576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff821615611151576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015611128573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061114c919061248c565b611153565b475b92915050565b60608160008167ffffffffffffffff81111561117757611177612104565b6040519080825280602002602001820160405280156111a0578160200160208202803683370190505b5090506000805b8381101561125a578686828181106111c1576111c1612685565b90506020028101906111d391906126b4565b6111e49060808101906060016126f2565b91506111ef826110a0565b83828151811061120157611201612685565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216611252573483828151811061123a5761123a612685565b6020026020010181815161124e9190612479565b9052505b6001016111a7565b509095945050505050565b60005b81811015610623573683838381811061128357611283612685565b905060200281019061129591906126b4565b90506112a760e0820160c0830161270f565b156112c9576112c96112bf60608301604084016126f2565b82608001356104a8565b50600101611268565b83838383826001811461159f57600085856112ee600185612479565b8181106112fd576112fd612685565b905060200281019061130f91906126b4565b6113209060808101906060016126f2565b9050600089815b818110156114cb57368d8d8381811061134257611342612685565b905060200281019061135491906126b4565b905061138361136960608301604084016126f2565b73ffffffffffffffffffffffffffffffffffffffff161590565b806113e657506113e661139c60408301602084016126f2565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b80156113fd57506113fd61139c60208301836126f2565b8015611482575061148261141460a083018361272c565b61142391600491600091612798565b61142c916127c2565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b6114b8576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6114c28f82611938565b50600101611327565b505060005b6114db600185612479565b8110156115975760008888838181106114f6576114f6612685565b905060200281019061150891906126b4565b6115199060808101906060016126f2565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461158e5785828151811061156057611560612685565b6020026020010151611571826110a0565b61157b9190612479565b9250821561158e5761158e818885610923565b506001016114d0565b505050611678565b8760005b8181101561167557368b8b838181106115be576115be612685565b90506020028101906115d091906126b4565b90506115e561136960608301604084016126f2565b806115fe57506115fe61139c60408301602084016126f2565b8015611615575061161561139c60208301836126f2565b801561162c575061162c61141460a083018361272c565b611662576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61166c8d82611938565b506001016115a3565b50505b50505050505050505050565b60405173ffffffffffffffffffffffffffffffffffffffff80851660248301528316604482015260648101829052610f709085907f23b872dd00000000000000000000000000000000000000000000000000000000906084015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611c4e565b80158061180057506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa1580156117da573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117fe919061248c565b155b61188c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e636500000000000000000000606482015260840161060e565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526106239084907f095ea7b300000000000000000000000000000000000000000000000000000000906064016116de565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526106239084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064016116de565b61194e61194860208301836126f2565b3b151590565b611984576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608081013560008190036119c4576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006119d961136960608501604086016126f2565b6119e45760006119ea565b82608001355b90506000611a06611a0160608601604087016126f2565b6110a0565b90506000611a1d611a0160808701606088016126f2565b905082600003611a5457611a54611a3a60608701604088016126f2565b611a4a60408801602089016126f2565b8760800135610cb1565b8460800135821015611a9f576040517fcf479181000000000000000000000000000000000000000000000000000000008152608086013560048201526024810183905260440161060e565b600080611aaf60208801886126f2565b73ffffffffffffffffffffffffffffffffffffffff1685611ad360a08a018a61272c565b604051611ae192919061280a565b60006040518083038185875af1925050503d8060008114611b1e576040519150601f19603f3d011682016040523d82523d6000602084013e611b23565b606091505b509150915081611b6e576000611b3882611d5d565b9050806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161060e919061281a565b6000611b83611a0160808a0160608b016126f2565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b3889611bb460208b018b6126f2565b611bc460608c0160408d016126f2565b611bd460808d0160608e016126f2565b8c60800135898711611be65786611bf0565b611bf08a88612479565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b6000611cb0826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611ddb9092919063ffffffff16565b9050805160001480611cd1575080806020019051810190611cd1919061282d565b610623576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f74207375636365656400000000000000000000000000000000000000000000606482015260840161060e565b6060604482511015611da257505060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c79000000602082015290565b6000611dbe6004808551611db69190612479565b859190611df2565b905080806020019051810190611dd4919061284a565b9392505050565b6060611dea8484600085611f0c565b949350505050565b606081611e0081601f6128b8565b1015611e38576040517f47aaf07a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611e4282846128b8565b84511015611e7c576040517f3b99b53d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b606082158015611e9b5760405191506000825260208201604052611f03565b6040519150601f8416801560200281840101858101878315602002848b0101015b81831015611ed4578051835260209283019201611ebc565b5050858452601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016604052505b50949350505050565b606082471015611f9e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c0000000000000000000000000000000000000000000000000000606482015260840161060e565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611fc791906128cb565b60006040518083038185875af1925050503d8060008114612004576040519150601f19603f3d011682016040523d82523d6000602084013e612009565b606091505b509150915061201a87838387612025565b979650505050505050565b606083156120bb5782516000036120b45773ffffffffffffffffffffffffffffffffffffffff85163b6120b4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161060e565b5081611dea565b611dea83838151156120d05781518083602001fd5b806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161060e919061281a565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff8111828210171561215757612157612104565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff811182821017156121a4576121a4612104565b604052919050565b600067ffffffffffffffff8211156121c6576121c6612104565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600082601f83011261220357600080fd5b8135612216612211826121ac565b61215d565b81815284602083860101111561222b57600080fd5b816020850160208301376000918101602001919091529392505050565b73ffffffffffffffffffffffffffffffffffffffff8116811461226a57600080fd5b50565b803561227881612248565b919050565b801515811461226a57600080fd5b80356122788161227d565b600061014082840312156122a957600080fd5b6122b1612133565b905081358152602082013567ffffffffffffffff808211156122d257600080fd5b6122de858386016121f2565b602084015260408401359150808211156122f757600080fd5b50612304848285016121f2565b6040830152506123166060830161226d565b60608201526123276080830161226d565b608082015261233860a0830161226d565b60a082015260c082013560c082015260e082013560e082015261010061235f81840161228b565b9082015261012061237183820161228b565b9082015292915050565b60006020828403121561238d57600080fd5b813567ffffffffffffffff8111156123a457600080fd5b611dea84828501612296565b6000806000604084860312156123c557600080fd5b833567ffffffffffffffff808211156123dd57600080fd5b6123e987838801612296565b945060208601359150808211156123ff57600080fd5b818601915086601f83011261241357600080fd5b81358181111561242257600080fd5b8760208260051b850101111561243757600080fd5b6020830194508093505050509250925092565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b818103818111156111535761115361244a565b60006020828403121561249e57600080fd5b5051919050565b6000602082840312156124b757600080fd5b8151611dd481612248565b60005b838110156124dd5781810151838201526020016124c5565b50506000910152565b600081518084526124fe8160208601602086016124c2565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b600073ffffffffffffffffffffffffffffffffffffffff80861683528085166020840152506060604083015261256960608301846124e6565b95945050505050565b60208152815160208201526000602083015161014080604085015261259b6101608501836124e6565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08584030160608601526125d683826124e6565b9250506060850151612600608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206126738187018315159052565b90950151151593019290925250919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff218336030181126126e857600080fd5b9190910192915050565b60006020828403121561270457600080fd5b8135611dd481612248565b60006020828403121561272157600080fd5b8135611dd48161227d565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261276157600080fd5b83018035915067ffffffffffffffff82111561277c57600080fd5b60200191503681900382131561279157600080fd5b9250929050565b600080858511156127a857600080fd5b838611156127b557600080fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156128025780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b602081526000611dd460208301846124e6565b60006020828403121561283f57600080fd5b8151611dd48161227d565b60006020828403121561285c57600080fd5b815167ffffffffffffffff81111561287357600080fd5b8201601f8101841361288457600080fd5b8051612892612211826121ac565b8181528560208385010111156128a757600080fd5b6125698260208301602086016124c2565b808201808211156111535761115361244a565b600082516126e88184602087016124c256fea264697066735822122080264a29c5df754882c656a86edd9bb66db3b27c71a039c9a823d43bbae748ed64736f6c63430008110033";
var isSuperArgs = function (xs) { return xs.length > 1; };
var PolygonBridgeFacet__factory = /** @class */ (function (_super) {
    __extends(PolygonBridgeFacet__factory, _super);
    function PolygonBridgeFacet__factory() {
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
    PolygonBridgeFacet__factory.prototype.deploy = function (_rootChainManager, _erc20Predicate, overrides) {
        return _super.prototype.deploy.call(this, _rootChainManager, _erc20Predicate, overrides || {});
    };
    PolygonBridgeFacet__factory.prototype.getDeployTransaction = function (_rootChainManager, _erc20Predicate, overrides) {
        return _super.prototype.getDeployTransaction.call(this, _rootChainManager, _erc20Predicate, overrides || {});
    };
    PolygonBridgeFacet__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    PolygonBridgeFacet__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    PolygonBridgeFacet__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    PolygonBridgeFacet__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    PolygonBridgeFacet__factory.bytecode = _bytecode;
    PolygonBridgeFacet__factory.abi = _abi;
    return PolygonBridgeFacet__factory;
}(ethers_1.ContractFactory));
exports.PolygonBridgeFacet__factory = PolygonBridgeFacet__factory;
