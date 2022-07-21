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
exports.GnosisBridgeFacet__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [],
        name: "ContractCallNotAllowed",
        type: "error",
    },
    {
        inputs: [],
        name: "InvalidAmount",
        type: "error",
    },
    {
        inputs: [],
        name: "InvalidConfig",
        type: "error",
    },
    {
        inputs: [],
        name: "InvalidContract",
        type: "error",
    },
    {
        inputs: [],
        name: "InvalidDstChainId",
        type: "error",
    },
    {
        inputs: [],
        name: "InvalidSendingToken",
        type: "error",
    },
    {
        inputs: [],
        name: "NativeAssetTransferFailed",
        type: "error",
    },
    {
        inputs: [],
        name: "NativeValueWithERC",
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
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "xDaiBridge",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "token",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "dstChainId",
                type: "uint256",
            },
        ],
        name: "GnosisBridgeInitialized",
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
                internalType: "string",
                name: "bridge",
                type: "string",
            },
            {
                indexed: false,
                internalType: "string",
                name: "bridgeData",
                type: "string",
            },
            {
                indexed: false,
                internalType: "string",
                name: "integrator",
                type: "string",
            },
            {
                indexed: false,
                internalType: "address",
                name: "referrer",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "sendingAssetId",
                type: "address",
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
                name: "destinationChainId",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "bool",
                name: "hasSourceSwap",
                type: "bool",
            },
            {
                indexed: false,
                internalType: "bool",
                name: "hasDestinationCall",
                type: "bool",
            },
        ],
        name: "LiFiTransferStarted",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "xDaiBridge",
                type: "address",
            },
            {
                internalType: "address",
                name: "token",
                type: "address",
            },
            {
                internalType: "uint64",
                name: "dstChainId",
                type: "uint64",
            },
        ],
        name: "initGnosisBridge",
        outputs: [],
        stateMutability: "nonpayable",
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
                        name: "receivingAssetId",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "receiver",
                        type: "address",
                    },
                    {
                        internalType: "uint256",
                        name: "destinationChainId",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "amount",
                        type: "uint256",
                    },
                ],
                internalType: "struct ILiFi.LiFiData",
                name: "lifiData",
                type: "tuple",
            },
            {
                components: [
                    {
                        internalType: "address",
                        name: "receiver",
                        type: "address",
                    },
                    {
                        internalType: "uint256",
                        name: "amount",
                        type: "uint256",
                    },
                ],
                internalType: "struct GnosisBridgeFacet.GnosisBridgeData",
                name: "gnosisBridgeData",
                type: "tuple",
            },
        ],
        name: "startBridgeTokensViaXDaiBridge",
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
                        name: "receivingAssetId",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "receiver",
                        type: "address",
                    },
                    {
                        internalType: "uint256",
                        name: "destinationChainId",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "amount",
                        type: "uint256",
                    },
                ],
                internalType: "struct ILiFi.LiFiData",
                name: "lifiData",
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
                ],
                internalType: "struct LibSwap.SwapData[]",
                name: "swapData",
                type: "tuple[]",
            },
            {
                components: [
                    {
                        internalType: "address",
                        name: "receiver",
                        type: "address",
                    },
                    {
                        internalType: "uint256",
                        name: "amount",
                        type: "uint256",
                    },
                ],
                internalType: "struct GnosisBridgeFacet.GnosisBridgeData",
                name: "gnosisBridgeData",
                type: "tuple",
            },
        ],
        name: "swapAndStartBridgeTokensViaXDaiBridge",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
];
var _bytecode = "0x608060405234801561001057600080fd5b50612717806100206000396000f3fe6080604052600436106100345760003560e01c8063644ca12314610039578063c274c0f01461004e578063fdef3d3d1461006e575b600080fd5b61004c610047366004612007565b610081565b005b34801561005a57600080fd5b5061004c6100693660046120b3565b610357565b61004c61007c366004612107565b6104ca565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100fc576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181557f037bd635972188e604bcaab17e73ebf3422cdec992e595e369233b4f21ed9677547f037bd635972188e604bcaab17e73ebf3422cdec992e595e369233b4f21ed96769074010000000000000000000000000000000000000000900467ffffffffffffffff1660c0870135146101a2576040517f06de6c6e00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181015473ffffffffffffffffffffffffffffffffffffffff166101cd6080880160608901612161565b73ffffffffffffffffffffffffffffffffffffffff161461021a576040517f7d6f201300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61022d610226876121fa565b8686610782565b6020840181905260000361026d576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61027683610886565b85357f438f81f3fe94456cd9d98e9073524f1c2bafb3ce75def8ced69f708061ddd5c46102a660208901896122a6565b6102b660608b0160408c01612161565b898960008181106102c9576102c9612312565b90506020028101906102db9190612341565b6102ec906060810190604001612161565b6102fc60a08d0160808e01612161565b89518c8c60008161030f5761030f612312565b90506020028101906103219190612341565b608001358e60c00135600160006040516103449a9998979695949392919061237f565b60405180910390a2506000905550505050565b61035f61098f565b73ffffffffffffffffffffffffffffffffffffffff83166103ac576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b7f037bd635972188e604bcaab17e73ebf3422cdec992e595e369233b4f21ed9676805473ffffffffffffffffffffffffffffffffffffffff8581167fffffffffffffffffffffffff0000000000000000000000000000000000000000909216821783557f037bd635972188e604bcaab17e73ebf3422cdec992e595e369233b4f21ed9677805467ffffffffffffffff86167401000000000000000000000000000000000000000081027fffffffff000000000000000000000000000000000000000000000000000000009092169388169384179190911790915560408051938452602084019290925282820152517f6ff9bfef0f7480f6e8c2bbe9de2d11a36ce5888c07c4f74a04dca21a806b91d89181900360600190a150505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610545576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181557f037bd635972188e604bcaab17e73ebf3422cdec992e595e369233b4f21ed9677547f037bd635972188e604bcaab17e73ebf3422cdec992e595e369233b4f21ed96769074010000000000000000000000000000000000000000900467ffffffffffffffff1660c0850135146105eb576040517f06de6c6e00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181015473ffffffffffffffffffffffffffffffffffffffff166106166080860160608701612161565b73ffffffffffffffffffffffffffffffffffffffff1614610663576040517f7d6f201300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b82602001356000036106a1576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018101546106ca9073ffffffffffffffffffffffffffffffffffffffff166020850135610a5f565b6106e16106dc36859003850185612496565b610886565b83357f438f81f3fe94456cd9d98e9073524f1c2bafb3ce75def8ced69f708061ddd5c461071160208701876122a6565b6107216060890160408a01612161565b61073160808a0160608b01612161565b61074160a08b0160808c01612161565b61074e60208b018b612161565b8a602001358c60c001356000806040516107719a9998979695949392919061237f565b60405180910390a250600090555050565b6000818082036107be576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600084846107cd6001826124e1565b8181106107dc576107dc612312565b90506020028101906107ee9190612341565b6107ff906080810190606001612161565b9050600061080c82610a85565b9050610819878787610b3e565b600061082483610a85565b9050818111610833578061083d565b61083d82826124e1565b915081600003610879576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50925050505b9392505050565b7f037bd635972188e604bcaab17e73ebf3422cdec992e595e369233b4f21ed9677547f037bd635972188e604bcaab17e73ebf3422cdec992e595e369233b4f21ed96768054602084015191926108f99273ffffffffffffffffffffffffffffffffffffffff918216929190911690610f1f565b8054825160208401516040517f01e4f53a00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff928316600482015260248101919091529116906301e4f53a90604401600060405180830381600087803b15801561097357600080fd5b505af1158015610987573d6000803e3d6000fd5b505050505050565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c6004015473ffffffffffffffffffffffffffffffffffffffff163314610a5d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f4c69624469616d6f6e643a204d75737420626520636f6e7472616374206f776e60448201527f657200000000000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b565b610a81828273ffffffffffffffffffffffffffffffffffffffff821615611061565b5050565b600073ffffffffffffffffffffffffffffffffffffffff821615610b36576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610b0d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b3191906124f8565b610b38565b475b92915050565b81818060018114610dcb576000610b55848461117b565b905060008484610b666001866124e1565b818110610b7557610b75612312565b9050602002810190610b879190612341565b610b98906080810190606001612161565b90506000805b87811015610ce65736898983818110610bb957610bb9612312565b9050602002810190610bcb9190612341565b9050600080610be06040840160208501612161565b73ffffffffffffffffffffffffffffffffffffffff16815260208101919091526040016000205460ff168015610c4c5750600080610c216020840184612161565b73ffffffffffffffffffffffffffffffffffffffff16815260208101919091526040016000205460ff165b8015610c91575060016000610c6460a08401846122a6565b610c7391600891600091612511565b610c7c9161253b565b815260208101919091526040016000205460ff165b610cc7576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8a51610cd3908261129c565b5080610cde81612577565b915050610b9e565b5060005b610cf56001866124e1565b811015610dc2576000878783818110610d1057610d10612312565b9050602002810190610d229190612341565b610d33906080810190606001612161565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610d6e5750610db0565b848281518110610d8057610d80612312565b6020026020010151610d9182610a85565b610d9b91906124e1565b92508215610dae57610dae813385611570565b505b80610dba81612577565b915050610cea565b50505050610987565b60005b84811015610f165736868683818110610de957610de9612312565b9050602002810190610dfb9190612341565b9050600080610e106040840160208501612161565b73ffffffffffffffffffffffffffffffffffffffff16815260208101919091526040016000205460ff168015610e7c5750600080610e516020840184612161565b73ffffffffffffffffffffffffffffffffffffffff16815260208101919091526040016000205460ff165b8015610ec1575060016000610e9460a08401846122a6565b610ea391600891600091612511565b610eac9161253b565b815260208101919091526040016000205460ff165b610ef7576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8751610f03908261129c565b5080610f0e81612577565b915050610dce565b50505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610f3f57505050565b73ffffffffffffffffffffffffffffffffffffffff8216610f8c576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff83811660248301526000919085169063dd62ed3e90604401602060405180830381865afa158015611002573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061102691906124f8565b90508181101561105b5761105b84847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6115a1565b50505050565b8160000361109b576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b80156110df578134146110da576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050565b3415611116576040517e3f45b500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600061112184610a85565b905061112f84333086611783565b828161113a86610a85565b61114491906124e1565b1461105b576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60608160008167ffffffffffffffff81111561119957611199611efd565b6040519080825280602002602001820160405280156111c2578160200160208202803683370190505b50905060005b828110156112935760008686838181106111e4576111e4612312565b90506020028101906111f69190612341565b611207906080810190606001612161565b9050600061121482610a85565b905073ffffffffffffffffffffffffffffffffffffffff821661125e5761123b34826124e1565b84848151811061124d5761124d612312565b60200260200101818152505061127e565b8084848151811061127157611271612312565b6020026020010181815250505b5050808061128b90612577565b9150506111c8565b50949350505050565b6112b26112ac6020830183612161565b3b151590565b6112e8576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101356000819003611328576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008061133b6060850160408601612161565b9050600061134f6080860160608701612161565b9050600061135c83610a85565b9050600061136983610a85565b9050600086831061137b576000611385565b61138583886124e1565b905073ffffffffffffffffffffffffffffffffffffffff8516156113d4576113bd856113b760408b0160208c01612161565b89610f1f565b80156113cf576113cf85333084611783565b6113d8565b8695505b6000806113e860208b018b612161565b73ffffffffffffffffffffffffffffffffffffffff168861140c60a08d018d6122a6565b60405161141a9291906125af565b60006040518083038185875af1925050503d8060008114611457576040519150601f19603f3d011682016040523d82523d6000602084013e61145c565b606091505b5091509150816114a757600061147182611829565b9050806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a5491906125eb565b60006114b287610a85565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388c6114e360208e018e612161565b8d60400160208101906114f69190612161565b8a8e8a8711611505578661150f565b61150f8b886124e1565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff831615611597576110da8383836118a0565b6110da82826118f8565b80158061164157506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa15801561161b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061163f91906124f8565b155b6116cd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e6365000000000000000000006064820152608401610a54565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526110da9084907f095ea7b300000000000000000000000000000000000000000000000000000000906064015b60408051601f198184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff00000000000000000000000000000000000000000000000000000000909316929092179091526119df565b73ffffffffffffffffffffffffffffffffffffffff84166117d0576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661181d576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61105b84848484611aeb565b606060448251101561186e57505060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c79000000602082015290565b600061188a600480855161188291906124e1565b859190611b49565b90508080602001905181019061087f919061261e565b73ffffffffffffffffffffffffffffffffffffffff83166118ed576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6110da838383611ca4565b73ffffffffffffffffffffffffffffffffffffffff8216611945576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d806000811461199f576040519150601f19603f3d011682016040523d82523d6000602084013e6119a4565b606091505b50509050806110da576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000611a41826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611cfa9092919063ffffffff16565b8051909150156110da5780806020019051810190611a5f9190612695565b6110da576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610a54565b60405173ffffffffffffffffffffffffffffffffffffffff8085166024830152831660448201526064810182905261105b9085907f23b872dd000000000000000000000000000000000000000000000000000000009060840161171f565b606081611b5781601f6126b7565b1015611bbf576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f736c6963655f6f766572666c6f770000000000000000000000000000000000006044820152606401610a54565b611bc982846126b7565b84511015611c33576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f736c6963655f6f75744f66426f756e64730000000000000000000000000000006044820152606401610a54565b606082158015611c525760405191506000825260208201604052611293565b6040519150601f8416801560200281840101858101878315602002848b0101015b81831015611c8b578051835260209283019201611c73565b5050858452601f01601f19166040525050949350505050565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526110da9084907fa9059cbb000000000000000000000000000000000000000000000000000000009060640161171f565b6060611d098484600085611d11565b949350505050565b606082471015611da3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610a54565b843b611e0b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610a54565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611e3491906126cf565b60006040518083038185875af1925050503d8060008114611e71576040519150601f19603f3d011682016040523d82523d6000602084013e611e76565b606091505b5091509150611e86828286611e91565b979650505050505050565b60608315611ea057508161087f565b825115611eb05782518084602001fd5b816040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a5491906125eb565b60006101008284031215611ef757600080fd5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610100810167ffffffffffffffff81118282101715611f5057611f50611efd565b60405290565b604051601f8201601f1916810167ffffffffffffffff81118282101715611f7f57611f7f611efd565b604052919050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611fab57600080fd5b919050565b600060408284031215611fc257600080fd5b6040516040810181811067ffffffffffffffff82111715611fe557611fe5611efd565b604052905080611ff483611f87565b8152602083013560208201525092915050565b6000806000806080858703121561201d57600080fd5b843567ffffffffffffffff8082111561203557600080fd5b61204188838901611ee4565b9550602087013591508082111561205757600080fd5b818701915087601f83011261206b57600080fd5b81358181111561207a57600080fd5b8860208260051b850101111561208f57600080fd5b6020830195508094505050506120a88660408701611fb0565b905092959194509250565b6000806000606084860312156120c857600080fd5b6120d184611f87565b92506120df60208501611f87565b9150604084013567ffffffffffffffff811681146120fc57600080fd5b809150509250925092565b600080828403606081121561211b57600080fd5b833567ffffffffffffffff81111561213257600080fd5b61213e86828701611ee4565b9350506040601f198201121561215357600080fd5b506020830190509250929050565b60006020828403121561217357600080fd5b61087f82611f87565b600067ffffffffffffffff82111561219657612196611efd565b50601f01601f191660200190565b600082601f8301126121b557600080fd5b81356121c86121c38261217c565b611f56565b8181528460208386010111156121dd57600080fd5b816020850160208301376000918101602001919091529392505050565b6000610100823603121561220d57600080fd5b612215611f2c565b82358152602083013567ffffffffffffffff81111561223357600080fd5b61223f368286016121a4565b60208301525061225160408401611f87565b604082015261226260608401611f87565b606082015261227360808401611f87565b608082015261228460a08401611f87565b60a082015260c083013560c082015260e083013560e082015280915050919050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126122db57600080fd5b83018035915067ffffffffffffffff8211156122f657600080fd5b60200191503681900382131561230b57600080fd5b9250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4183360301811261237557600080fd5b9190910192915050565b6000610160808352600681840152507f676e6f73697300000000000000000000000000000000000000000000000000006101808301526101a0806020840152600081840152506101c08060408401528b81840152506101e08b8d8285013760008c840182015273ffffffffffffffffffffffffffffffffffffffff8b166060840152601f19601f8d0116830101905073ffffffffffffffffffffffffffffffffffffffff8916608083015273ffffffffffffffffffffffffffffffffffffffff881660a083015273ffffffffffffffffffffffffffffffffffffffff871660c08301528560e08301528461010083015261247e61012083018515159052565b8215156101408301529b9a5050505050505050505050565b6000604082840312156124a857600080fd5b61087f8383611fb0565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000828210156124f3576124f36124b2565b500390565b60006020828403121561250a57600080fd5b5051919050565b6000808585111561252157600080fd5b8386111561252e57600080fd5b5050820193919092039150565b80356020831015610b38577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff602084900360031b1b1692915050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036125a8576125a86124b2565b5060010190565b8183823760009101908152919050565b60005b838110156125da5781810151838201526020016125c2565b8381111561105b5750506000910152565b602081526000825180602084015261260a8160408501602087016125bf565b601f01601f19169190910160400192915050565b60006020828403121561263057600080fd5b815167ffffffffffffffff81111561264757600080fd5b8201601f8101841361265857600080fd5b80516126666121c38261217c565b81815285602083850101111561267b57600080fd5b61268c8260208301602086016125bf565b95945050505050565b6000602082840312156126a757600080fd5b8151801515811461087f57600080fd5b600082198211156126ca576126ca6124b2565b500190565b600082516123758184602087016125bf56fea264697066735822122084060897b571b71e367aba300d662b0646ed798cae882a87ed56fee36a72a87b64736f6c634300080d0033";
var isSuperArgs = function (xs) { return xs.length > 1; };
var GnosisBridgeFacet__factory = /** @class */ (function (_super) {
    __extends(GnosisBridgeFacet__factory, _super);
    function GnosisBridgeFacet__factory() {
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
    GnosisBridgeFacet__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    GnosisBridgeFacet__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    GnosisBridgeFacet__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    GnosisBridgeFacet__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    GnosisBridgeFacet__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    GnosisBridgeFacet__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    GnosisBridgeFacet__factory.bytecode = _bytecode;
    GnosisBridgeFacet__factory.abi = _abi;
    return GnosisBridgeFacet__factory;
}(ethers_1.ContractFactory));
exports.GnosisBridgeFacet__factory = GnosisBridgeFacet__factory;
