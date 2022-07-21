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
exports.AnyswapFacet__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
var ethers_1 = require("ethers");
var _abi = [
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
        inputs: [],
        name: "TokenAddressIsZero",
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
                name: "_lifiData",
                type: "tuple",
            },
            {
                components: [
                    {
                        internalType: "address",
                        name: "token",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "router",
                        type: "address",
                    },
                    {
                        internalType: "uint256",
                        name: "amount",
                        type: "uint256",
                    },
                    {
                        internalType: "address",
                        name: "recipient",
                        type: "address",
                    },
                    {
                        internalType: "uint256",
                        name: "toChainId",
                        type: "uint256",
                    },
                ],
                internalType: "struct AnyswapFacet.AnyswapData",
                name: "_anyswapData",
                type: "tuple",
            },
        ],
        name: "startBridgeTokensViaAnyswap",
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
                name: "_lifiData",
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
                name: "_swapData",
                type: "tuple[]",
            },
            {
                components: [
                    {
                        internalType: "address",
                        name: "token",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "router",
                        type: "address",
                    },
                    {
                        internalType: "uint256",
                        name: "amount",
                        type: "uint256",
                    },
                    {
                        internalType: "address",
                        name: "recipient",
                        type: "address",
                    },
                    {
                        internalType: "uint256",
                        name: "toChainId",
                        type: "uint256",
                    },
                ],
                internalType: "struct AnyswapFacet.AnyswapData",
                name: "_anyswapData",
                type: "tuple",
            },
        ],
        name: "swapAndStartBridgeTokensViaAnyswap",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
];
var _bytecode = "0x608060405234801561001057600080fd5b50612588806100206000396000f3fe6080604052600436106100295760003560e01c806373bbd5c61461002e578063e18a8fdb14610043575b600080fd5b61004161003c366004611eb4565b610056565b005b610041610051366004611f60565b610247565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100d1576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155815173ffffffffffffffffffffffffffffffffffffffff16610123576040517fdc2e5e8d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61013661012f86612038565b85856103b4565b604083015281516020830151600091829161015191906104b8565b9150915061016084838361064d565b86357f438f81f3fe94456cd9d98e9073524f1c2bafb3ce75def8ced69f708061ddd5c461019060208a018a6120e4565b6101a060608c0160408d01612149565b8a8a60008181106101b3576101b3612166565b90506020028101906101c59190612195565b6101d6906060810190604001612149565b6101e660a08e0160808f01612149565b8a606001518d8d60008181106101fe576101fe612166565b90506020028101906102109190612195565b608001358c60800151600160006040516102339a999897969594939291906121d3565b60405180910390a250506000905550505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016102c2576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181556000806102ee6102d96020860186612149565b6102e96040870160208801612149565b6104b8565b9150915080610305576103058285604001356108cb565b61031e610317368690038601866122ea565b838361064d565b84357f438f81f3fe94456cd9d98e9073524f1c2bafb3ce75def8ced69f708061ddd5c461034e60208801886120e4565b61035e60608a0160408b01612149565b8661036f60a08c0160808d01612149565b61037f60808c0160608d01612149565b8b604001358c608001356000806040516103a29a999897969594939291906121d3565b60405180910390a25050600090555050565b6000818082036103f0576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600084846103ff600182612335565b81811061040e5761040e612166565b90506020028101906104209190612195565b610431906080810190606001612149565b9050600061043e826108f1565b905061044b8787876109aa565b6000610456836108f1565b9050818111610465578061046f565b61046f8282612335565b9150816000036104ab576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50925050505b9392505050565b60008073ffffffffffffffffffffffffffffffffffffffff8416610508576040517fdc2e5e8d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8373ffffffffffffffffffffffffffffffffffffffff16636f307dc36040518163ffffffff1660e01b81526004016020604051808303816000875af1158015610555573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610579919061234c565b91508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16638fd903f56040518163ffffffff1660e01b81526004016020604051808303816000875af11580156105df573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610603919061234c565b73ffffffffffffffffffffffffffffffffffffffff1614905080158161063d575073ffffffffffffffffffffffffffffffffffffffff8216155b15610646578391505b9250929050565b8260800151460361068a576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b801561073d57602083015160408085015185516060870151608088015193517fa5e5657100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff9283166004820152908216602482015260448101939093529092169163a5e56571916064016000604051808303818588803b15801561071f57600080fd5b505af1158015610733573d6000803e3d6000fd5b5050505050505050565b6107508284602001518560400151610d8a565b8173ffffffffffffffffffffffffffffffffffffffff16836000015173ffffffffffffffffffffffffffffffffffffffff161461083557602083015183516060850151604080870151608088015191517fedbdf5e200000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff948516600482015292841660248401526044830152606482015291169063edbdf5e290608401600060405180830381600087803b15801561081857600080fd5b505af115801561082c573d6000803e3d6000fd5b50505050505050565b602083015183516060850151604080870151608088015191517f241dc2df00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff948516600482015292841660248401526044830152606482015291169063241dc2df90608401600060405180830381600087803b15801561081857600080fd5b505050565b6108ed828273ffffffffffffffffffffffffffffffffffffffff821615610ecc565b5050565b600073ffffffffffffffffffffffffffffffffffffffff8216156109a2576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610979573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061099d9190612369565b6109a4565b475b92915050565b81818060018114610c375760006109c18484610fe1565b9050600084846109d2600186612335565b8181106109e1576109e1612166565b90506020028101906109f39190612195565b610a04906080810190606001612149565b90506000805b87811015610b525736898983818110610a2557610a25612166565b9050602002810190610a379190612195565b9050600080610a4c6040840160208501612149565b73ffffffffffffffffffffffffffffffffffffffff16815260208101919091526040016000205460ff168015610ab85750600080610a8d6020840184612149565b73ffffffffffffffffffffffffffffffffffffffff16815260208101919091526040016000205460ff165b8015610afd575060016000610ad060a08401846120e4565b610adf91600891600091612382565b610ae8916123ac565b815260208101919091526040016000205460ff165b610b33576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8a51610b3f9082611102565b5080610b4a816123e8565b915050610a0a565b5060005b610b61600186612335565b811015610c2e576000878783818110610b7c57610b7c612166565b9050602002810190610b8e9190612195565b610b9f906080810190606001612149565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610bda5750610c1c565b848281518110610bec57610bec612166565b6020026020010151610bfd826108f1565b610c079190612335565b92508215610c1a57610c1a8133856113df565b505b80610c26816123e8565b915050610b56565b50505050610d82565b60005b8481101561082c5736868683818110610c5557610c55612166565b9050602002810190610c679190612195565b9050600080610c7c6040840160208501612149565b73ffffffffffffffffffffffffffffffffffffffff16815260208101919091526040016000205460ff168015610ce85750600080610cbd6020840184612149565b73ffffffffffffffffffffffffffffffffffffffff16815260208101919091526040016000205460ff165b8015610d2d575060016000610d0060a08401846120e4565b610d0f91600891600091612382565b610d18916123ac565b815260208101919091526040016000205460ff165b610d63576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8751610d6f9082611102565b5080610d7a816123e8565b915050610c3a565b505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610daa57505050565b73ffffffffffffffffffffffffffffffffffffffff8216610df7576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff83811660248301526000919085169063dd62ed3e90604401602060405180830381865afa158015610e6d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e919190612369565b905081811015610ec657610ec684847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611410565b50505050565b81600003610f06576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8015610f45578134146108c6576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3415610f7c576040517e3f45b500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000610f87846108f1565b9050610f95843330866115f2565b8281610fa0866108f1565b610faa9190612335565b14610ec6576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60608160008167ffffffffffffffff811115610fff57610fff611d6c565b604051908082528060200260200182016040528015611028578160200160208202803683370190505b50905060005b828110156110f957600086868381811061104a5761104a612166565b905060200281019061105c9190612195565b61106d906080810190606001612149565b9050600061107a826108f1565b905073ffffffffffffffffffffffffffffffffffffffff82166110c4576110a13482612335565b8484815181106110b3576110b3612166565b6020026020010181815250506110e4565b808484815181106110d7576110d7612166565b6020026020010181815250505b505080806110f1906123e8565b91505061102e565b50949350505050565b6111186111126020830183612149565b3b151590565b61114e576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6080810135600081900361118e576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000806111a16060850160408601612149565b905060006111b56080860160608701612149565b905060006111c2836108f1565b905060006111cf836108f1565b905060008683106111e15760006111eb565b6111eb8388612335565b905073ffffffffffffffffffffffffffffffffffffffff85161561123a576112238561121d60408b0160208c01612149565b89610d8a565b801561123557611235853330846115f2565b61123e565b8695505b60008061124e60208b018b612149565b73ffffffffffffffffffffffffffffffffffffffff168861127260a08d018d6120e4565b604051611280929190612420565b60006040518083038185875af1925050503d80600081146112bd576040519150601f19603f3d011682016040523d82523d6000602084013e6112c2565b606091505b5091509150816113165760006112d782611698565b9050806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161130d919061245c565b60405180910390fd5b6000611321876108f1565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388c61135260208e018e612149565b8d60400160208101906113659190612149565b8a8e8a8711611374578661137e565b61137e8b88612335565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff831615611406576108c683838361170f565b6108c68282611767565b8015806114b057506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa15801561148a573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114ae9190612369565b155b61153c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e636500000000000000000000606482015260840161130d565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526108c69084907f095ea7b300000000000000000000000000000000000000000000000000000000906064015b60408051601f198184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff000000000000000000000000000000000000000000000000000000009093169290921790915261184e565b73ffffffffffffffffffffffffffffffffffffffff841661163f576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661168c576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610ec68484848461195a565b60606044825110156116dd57505060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c79000000602082015290565b60006116f960048085516116f19190612335565b8591906119b8565b9050808060200190518101906104b1919061248f565b73ffffffffffffffffffffffffffffffffffffffff831661175c576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6108c6838383611b13565b73ffffffffffffffffffffffffffffffffffffffff82166117b4576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d806000811461180e576040519150601f19603f3d011682016040523d82523d6000602084013e611813565b606091505b50509050806108c6576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006118b0826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611b699092919063ffffffff16565b8051909150156108c657808060200190518101906118ce9190612506565b6108c6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f74207375636365656400000000000000000000000000000000000000000000606482015260840161130d565b60405173ffffffffffffffffffffffffffffffffffffffff80851660248301528316604482015260648101829052610ec69085907f23b872dd000000000000000000000000000000000000000000000000000000009060840161158e565b6060816119c681601f612528565b1015611a2e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f736c6963655f6f766572666c6f77000000000000000000000000000000000000604482015260640161130d565b611a388284612528565b84511015611aa2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f736c6963655f6f75744f66426f756e6473000000000000000000000000000000604482015260640161130d565b606082158015611ac157604051915060008252602082016040526110f9565b6040519150601f8416801560200281840101858101878315602002848b0101015b81831015611afa578051835260209283019201611ae2565b5050858452601f01601f19166040525050949350505050565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526108c69084907fa9059cbb000000000000000000000000000000000000000000000000000000009060640161158e565b6060611b788484600085611b80565b949350505050565b606082471015611c12576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c0000000000000000000000000000000000000000000000000000606482015260840161130d565b843b611c7a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161130d565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611ca39190612540565b60006040518083038185875af1925050503d8060008114611ce0576040519150601f19603f3d011682016040523d82523d6000602084013e611ce5565b606091505b5091509150611cf5828286611d00565b979650505050505050565b60608315611d0f5750816104b1565b825115611d1f5782518084602001fd5b816040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161130d919061245c565b60006101008284031215611d6657600080fd5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610100810167ffffffffffffffff81118282101715611dbf57611dbf611d6c565b60405290565b604051601f8201601f1916810167ffffffffffffffff81118282101715611dee57611dee611d6c565b604052919050565b73ffffffffffffffffffffffffffffffffffffffff81168114611e1857600080fd5b50565b8035611e2681611df6565b919050565b600060a08284031215611e3d57600080fd5b60405160a0810181811067ffffffffffffffff82111715611e6057611e60611d6c565b6040529050808235611e7181611df6565b81526020830135611e8181611df6565b6020820152604083810135908201526060830135611e9e81611df6565b6060820152608092830135920191909152919050565b60008060008060e08587031215611eca57600080fd5b843567ffffffffffffffff80821115611ee257600080fd5b611eee88838901611d53565b95506020870135915080821115611f0457600080fd5b818701915087601f830112611f1857600080fd5b813581811115611f2757600080fd5b8860208260051b8501011115611f3c57600080fd5b602083019550809450505050611f558660408701611e2b565b905092959194509250565b60008082840360c0811215611f7457600080fd5b833567ffffffffffffffff811115611f8b57600080fd5b611f9786828701611d53565b93505060a0601f1982011215611fac57600080fd5b506020830190509250929050565b600067ffffffffffffffff821115611fd457611fd4611d6c565b50601f01601f191660200190565b600082601f830112611ff357600080fd5b813561200661200182611fba565b611dc5565b81815284602083860101111561201b57600080fd5b816020850160208301376000918101602001919091529392505050565b6000610100823603121561204b57600080fd5b612053611d9b565b82358152602083013567ffffffffffffffff81111561207157600080fd5b61207d36828601611fe2565b60208301525061208f60408401611e1b565b60408201526120a060608401611e1b565b60608201526120b160808401611e1b565b60808201526120c260a08401611e1b565b60a082015260c083013560c082015260e083013560e082015280915050919050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261211957600080fd5b83018035915067ffffffffffffffff82111561213457600080fd5b60200191503681900382131561064657600080fd5b60006020828403121561215b57600080fd5b81356104b181611df6565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff418336030181126121c957600080fd5b9190910192915050565b6000610160808352600781840152507f616e7973776170000000000000000000000000000000000000000000000000006101808301526101a0806020840152600081840152506101c08060408401528b81840152506101e08b8d8285013760008c840182015273ffffffffffffffffffffffffffffffffffffffff8b166060840152601f19601f8d0116830101905073ffffffffffffffffffffffffffffffffffffffff8916608083015273ffffffffffffffffffffffffffffffffffffffff881660a083015273ffffffffffffffffffffffffffffffffffffffff871660c08301528560e0830152846101008301526122d261012083018515159052565b8215156101408301529b9a5050505050505050505050565b600060a082840312156122fc57600080fd5b6104b18383611e2b565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60008282101561234757612347612306565b500390565b60006020828403121561235e57600080fd5b81516104b181611df6565b60006020828403121561237b57600080fd5b5051919050565b6000808585111561239257600080fd5b8386111561239f57600080fd5b5050820193919092039150565b803560208310156109a4577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff602084900360031b1b1692915050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361241957612419612306565b5060010190565b8183823760009101908152919050565b60005b8381101561244b578181015183820152602001612433565b83811115610ec65750506000910152565b602081526000825180602084015261247b816040850160208701612430565b601f01601f19169190910160400192915050565b6000602082840312156124a157600080fd5b815167ffffffffffffffff8111156124b857600080fd5b8201601f810184136124c957600080fd5b80516124d761200182611fba565b8181528560208385010111156124ec57600080fd5b6124fd826020830160208601612430565b95945050505050565b60006020828403121561251857600080fd5b815180151581146104b157600080fd5b6000821982111561253b5761253b612306565b500190565b600082516121c981846020870161243056fea26469706673582212204764b6a55f71fc425bc6bc89080aa238678fb497b537e4d4be967963c433fa3864736f6c634300080d0033";
var isSuperArgs = function (xs) { return xs.length > 1; };
var AnyswapFacet__factory = /** @class */ (function (_super) {
    __extends(AnyswapFacet__factory, _super);
    function AnyswapFacet__factory() {
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
    AnyswapFacet__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    AnyswapFacet__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    AnyswapFacet__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    AnyswapFacet__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    AnyswapFacet__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    AnyswapFacet__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    AnyswapFacet__factory.bytecode = _bytecode;
    AnyswapFacet__factory.abi = _abi;
    return AnyswapFacet__factory;
}(ethers_1.ContractFactory));
exports.AnyswapFacet__factory = AnyswapFacet__factory;
