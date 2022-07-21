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
exports.CBridgeFacet__factory = void 0;
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
                name: "cBridge",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "chainId",
                type: "uint256",
            },
        ],
        name: "CBridgeInitialized",
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
                name: "_cBridge",
                type: "address",
            },
            {
                internalType: "uint64",
                name: "_chainId",
                type: "uint64",
            },
        ],
        name: "initCbridge",
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
                name: "_lifiData",
                type: "tuple",
            },
            {
                components: [
                    {
                        internalType: "uint32",
                        name: "maxSlippage",
                        type: "uint32",
                    },
                    {
                        internalType: "uint64",
                        name: "dstChainId",
                        type: "uint64",
                    },
                    {
                        internalType: "uint64",
                        name: "nonce",
                        type: "uint64",
                    },
                    {
                        internalType: "uint256",
                        name: "amount",
                        type: "uint256",
                    },
                    {
                        internalType: "address",
                        name: "receiver",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "token",
                        type: "address",
                    },
                ],
                internalType: "struct CBridgeFacet.CBridgeData",
                name: "_cBridgeData",
                type: "tuple",
            },
        ],
        name: "startBridgeTokensViaCBridge",
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
                        internalType: "uint32",
                        name: "maxSlippage",
                        type: "uint32",
                    },
                    {
                        internalType: "uint64",
                        name: "dstChainId",
                        type: "uint64",
                    },
                    {
                        internalType: "uint64",
                        name: "nonce",
                        type: "uint64",
                    },
                    {
                        internalType: "uint256",
                        name: "amount",
                        type: "uint256",
                    },
                    {
                        internalType: "address",
                        name: "receiver",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "token",
                        type: "address",
                    },
                ],
                internalType: "struct CBridgeFacet.CBridgeData",
                name: "_cBridgeData",
                type: "tuple",
            },
        ],
        name: "swapAndStartBridgeTokensViaCBridge",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
];
var _bytecode = "0x608060405234801561001057600080fd5b506125e4806100206000396000f3fe6080604052600436106100345760003560e01c806340e939bb146100395780634fd349071461004e5780636e30a6bd1461006e575b600080fd5b61004c610047366004611d60565b610081565b005b34801561005a57600080fd5b5061004c610069366004611dfb565b6101e2565b61004c61007c366004611f5e565b610301565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100fc576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815561011d61011360c0840160a0850161200b565b8360600135610486565b61013461012f36849003840184612026565b6104ac565b82357f438f81f3fe94456cd9d98e9073524f1c2bafb3ce75def8ced69f708061ddd5c46101646020860186612042565b610174606088016040890161200b565b61018460c0880160a0890161200b565b61019460a08a0160808b0161200b565b6101a460a08a0160808b0161200b565b60608a01356101b960408c0160208d016120ae565b6000806040516101d29a999897969594939291906120c9565b60405180910390a2600090555050565b6101ea61071a565b73ffffffffffffffffffffffffffffffffffffffff8216610237576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b7f86b79a219228d788dd4fea892f48eec79167ea6d19d7f61e274652b2797c5b12805467ffffffffffffffff83167401000000000000000000000000000000000000000081027fffffffff0000000000000000000000000000000000000000000000000000000090921673ffffffffffffffffffffffffffffffffffffffff861690811792909217835560408051928352602083019190915280517f5b114a545b5a08e3628017ac6e1af1f29e3f593dde50a4a93ab76f2a2220cd389281900390910190a1505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0161037c576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815561039361038c86612266565b85856107ea565b60608301526103a1826104ac565b84357f438f81f3fe94456cd9d98e9073524f1c2bafb3ce75def8ced69f708061ddd5c46103d16020880188612042565b6103e160608a0160408b0161200b565b888860008181106103f4576103f4612312565b90506020028101906104069190612341565b61041790606081019060400161200b565b61042760a08c0160808d0161200b565b88608001518b8b600081811061043f5761043f612312565b90506020028101906104519190612341565b608001358a60200151600160006040516104749a999897969594939291906120c9565b60405180910390a26000905550505050565b6104a8828273ffffffffffffffffffffffffffffffffffffffff8216156108ee565b5050565b7f86b79a219228d788dd4fea892f48eec79167ea6d19d7f61e274652b2797c5b128054602083015173ffffffffffffffffffffffffffffffffffffffff82169167ffffffffffffffff918216740100000000000000000000000000000000000000009091049091160361054b576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60a083015173ffffffffffffffffffffffffffffffffffffffff1661063157606083015160808401516020850151604080870151875191517f3f2e5fc300000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff94851660048201526024810186905267ffffffffffffffff93841660448201529216606483015263ffffffff16608482015290831691633f2e5fc39160a4016000604051808303818588803b15801561061357600080fd5b505af1158015610627573d6000803e3d6000fd5b5050505050505050565b6106448360a00151828560600151610a09565b608083015160a084015160608501516020860151604080880151885191517fa5977fbb00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff96871660048201529486166024860152604485019390935267ffffffffffffffff91821660648501529116608483015263ffffffff1660a48201529082169063a5977fbb9060c401600060405180830381600087803b1580156106fc57600080fd5b505af1158015610710573d6000803e3d6000fd5b505050505b505050565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c6004015473ffffffffffffffffffffffffffffffffffffffff1633146107e8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f4c69624469616d6f6e643a204d75737420626520636f6e7472616374206f776e60448201527f657200000000000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b565b600081808203610826576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600084846108356001826123ae565b81811061084457610844612312565b90506020028101906108569190612341565b61086790608081019060600161200b565b9050600061087482610b45565b9050610881878787610bfe565b600061088c83610b45565b905081811161089b57806108a5565b6108a582826123ae565b9150816000036108e1576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50925050505b9392505050565b81600003610928576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b801561096757813414610715576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b341561099e576040517e3f45b500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006109a984610b45565b90506109b784333086610fde565b82816109c286610b45565b6109cc91906123ae565b14610a03576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50505050565b73ffffffffffffffffffffffffffffffffffffffff8316610a2957505050565b73ffffffffffffffffffffffffffffffffffffffff8216610a76576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff83811660248301526000919085169063dd62ed3e90604401602060405180830381865afa158015610aec573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b1091906123c5565b905081811015610a0357610a0384847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611084565b600073ffffffffffffffffffffffffffffffffffffffff821615610bf6576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610bcd573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bf191906123c5565b610bf8565b475b92915050565b81818060018114610e8b576000610c158484611266565b905060008484610c266001866123ae565b818110610c3557610c35612312565b9050602002810190610c479190612341565b610c5890608081019060600161200b565b90506000805b87811015610da65736898983818110610c7957610c79612312565b9050602002810190610c8b9190612341565b9050600080610ca0604084016020850161200b565b73ffffffffffffffffffffffffffffffffffffffff16815260208101919091526040016000205460ff168015610d0c5750600080610ce1602084018461200b565b73ffffffffffffffffffffffffffffffffffffffff16815260208101919091526040016000205460ff165b8015610d51575060016000610d2460a0840184612042565b610d33916008916000916123de565b610d3c91612408565b815260208101919091526040016000205460ff165b610d87576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8a51610d939082611387565b5080610d9e81612444565b915050610c5e565b5060005b610db56001866123ae565b811015610e82576000878783818110610dd057610dd0612312565b9050602002810190610de29190612341565b610df390608081019060600161200b565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610e2e5750610e70565b848281518110610e4057610e40612312565b6020026020010151610e5182610b45565b610e5b91906123ae565b92508215610e6e57610e6e81338561165b565b505b80610e7a81612444565b915050610daa565b50505050610fd6565b60005b848110156107105736868683818110610ea957610ea9612312565b9050602002810190610ebb9190612341565b9050600080610ed0604084016020850161200b565b73ffffffffffffffffffffffffffffffffffffffff16815260208101919091526040016000205460ff168015610f3c5750600080610f11602084018461200b565b73ffffffffffffffffffffffffffffffffffffffff16815260208101919091526040016000205460ff165b8015610f81575060016000610f5460a0840184612042565b610f63916008916000916123de565b610f6c91612408565b815260208101919091526040016000205460ff165b610fb7576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8751610fc39082611387565b5080610fce81612444565b915050610e8e565b505050505050565b73ffffffffffffffffffffffffffffffffffffffff841661102b576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216611078576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610a038484848461168c565b80158061112457506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa1580156110fe573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061112291906123c5565b155b6111b0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e63650000000000000000000060648201526084016107df565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526107159084907f095ea7b300000000000000000000000000000000000000000000000000000000906064015b60408051601f198184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff00000000000000000000000000000000000000000000000000000000909316929092179091526116ea565b60608160008167ffffffffffffffff81111561128457611284611e2e565b6040519080825280602002602001820160405280156112ad578160200160208202803683370190505b50905060005b8281101561137e5760008686838181106112cf576112cf612312565b90506020028101906112e19190612341565b6112f290608081019060600161200b565b905060006112ff82610b45565b905073ffffffffffffffffffffffffffffffffffffffff82166113495761132634826123ae565b84848151811061133857611338612312565b602002602001018181525050611369565b8084848151811061135c5761135c612312565b6020026020010181815250505b5050808061137690612444565b9150506112b3565b50949350505050565b61139d611397602083018361200b565b3b151590565b6113d3576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101356000819003611413576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600080611426606085016040860161200b565b9050600061143a608086016060870161200b565b9050600061144783610b45565b9050600061145483610b45565b90506000868310611466576000611470565b61147083886123ae565b905073ffffffffffffffffffffffffffffffffffffffff8516156114bf576114a8856114a260408b0160208c0161200b565b89610a09565b80156114ba576114ba85333084610fde565b6114c3565b8695505b6000806114d360208b018b61200b565b73ffffffffffffffffffffffffffffffffffffffff16886114f760a08d018d612042565b60405161150592919061247c565b60006040518083038185875af1925050503d8060008114611542576040519150601f19603f3d011682016040523d82523d6000602084013e611547565b606091505b50915091508161159257600061155c826117f6565b9050806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107df91906124b8565b600061159d87610b45565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388c6115ce60208e018e61200b565b8d60400160208101906115e1919061200b565b8a8e8a87116115f057866115fa565b6115fa8b886123ae565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316156116825761071583838361186d565b61071582826118c5565b60405173ffffffffffffffffffffffffffffffffffffffff80851660248301528316604482015260648101829052610a039085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401611202565b600061174c826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166119ac9092919063ffffffff16565b805190915015610715578080602001905181019061176a91906124eb565b610715576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084016107df565b606060448251101561183b57505060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c79000000602082015290565b6000611857600480855161184f91906123ae565b8591906119c3565b9050808060200190518101906108e7919061250d565b73ffffffffffffffffffffffffffffffffffffffff83166118ba576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610715838383611b1e565b73ffffffffffffffffffffffffffffffffffffffff8216611912576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d806000811461196c576040519150601f19603f3d011682016040523d82523d6000602084013e611971565b606091505b5050905080610715576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60606119bb8484600085611b74565b949350505050565b6060816119d181601f612584565b1015611a39576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f736c6963655f6f766572666c6f7700000000000000000000000000000000000060448201526064016107df565b611a438284612584565b84511015611aad576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f736c6963655f6f75744f66426f756e647300000000000000000000000000000060448201526064016107df565b606082158015611acc576040519150600082526020820160405261137e565b6040519150601f8416801560200281840101858101878315602002848b0101015b81831015611b05578051835260209283019201611aed565b5050858452601f01601f19166040525050949350505050565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526107159084907fa9059cbb0000000000000000000000000000000000000000000000000000000090606401611202565b606082471015611c06576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c000000000000000000000000000000000000000000000000000060648201526084016107df565b843b611c6e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016107df565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611c97919061259c565b60006040518083038185875af1925050503d8060008114611cd4576040519150601f19603f3d011682016040523d82523d6000602084013e611cd9565b606091505b5091509150611ce9828286611cf4565b979650505050505050565b60608315611d035750816108e7565b825115611d135782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107df91906124b8565b60006101008284031215611d5a57600080fd5b50919050565b60008082840360e0811215611d7457600080fd5b833567ffffffffffffffff811115611d8b57600080fd5b611d9786828701611d47565b93505060c0601f1982011215611dac57600080fd5b506020830190509250929050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611dde57600080fd5b919050565b803567ffffffffffffffff81168114611dde57600080fd5b60008060408385031215611e0e57600080fd5b611e1783611dba565b9150611e2560208401611de3565b90509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610100810167ffffffffffffffff81118282101715611e8157611e81611e2e565b60405290565b604051601f8201601f1916810167ffffffffffffffff81118282101715611eb057611eb0611e2e565b604052919050565b600060c08284031215611eca57600080fd5b60405160c0810181811067ffffffffffffffff82111715611eed57611eed611e2e565b604052905080823563ffffffff81168114611f0757600080fd5b8152611f1560208401611de3565b6020820152611f2660408401611de3565b604082015260608301356060820152611f4160808401611dba565b6080820152611f5260a08401611dba565b60a08201525092915050565b6000806000806101008587031215611f7557600080fd5b843567ffffffffffffffff80821115611f8d57600080fd5b611f9988838901611d47565b95506020870135915080821115611faf57600080fd5b818701915087601f830112611fc357600080fd5b813581811115611fd257600080fd5b8860208260051b8501011115611fe757600080fd5b6020830195508094505050506120008660408701611eb8565b905092959194509250565b60006020828403121561201d57600080fd5b6108e782611dba565b600060c0828403121561203857600080fd5b6108e78383611eb8565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261207757600080fd5b83018035915067ffffffffffffffff82111561209257600080fd5b6020019150368190038213156120a757600080fd5b9250929050565b6000602082840312156120c057600080fd5b6108e782611de3565b6000610160808352600781840152507f63627269646765000000000000000000000000000000000000000000000000006101808301526101a0806020840152600081840152506101c08060408401528b81840152506101e08b8d8285013760008c840182015273ffffffffffffffffffffffffffffffffffffffff8b166060840152601f19601f8d0116830101905073ffffffffffffffffffffffffffffffffffffffff8916608083015273ffffffffffffffffffffffffffffffffffffffff881660a083015273ffffffffffffffffffffffffffffffffffffffff871660c08301528560e08301526121c961010083018667ffffffffffffffff169052565b9215156101208201529015156101409091015298975050505050505050565b600067ffffffffffffffff82111561220257612202611e2e565b50601f01601f191660200190565b600082601f83011261222157600080fd5b813561223461222f826121e8565b611e87565b81815284602083860101111561224957600080fd5b816020850160208301376000918101602001919091529392505050565b6000610100823603121561227957600080fd5b612281611e5d565b82358152602083013567ffffffffffffffff81111561229f57600080fd5b6122ab36828601612210565b6020830152506122bd60408401611dba565b60408201526122ce60608401611dba565b60608201526122df60808401611dba565b60808201526122f060a08401611dba565b60a082015260c083013560c082015260e083013560e082015280915050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4183360301811261237557600080fd5b9190910192915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000828210156123c0576123c061237f565b500390565b6000602082840312156123d757600080fd5b5051919050565b600080858511156123ee57600080fd5b838611156123fb57600080fd5b5050820193919092039150565b80356020831015610bf8577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff602084900360031b1b1692915050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036124755761247561237f565b5060010190565b8183823760009101908152919050565b60005b838110156124a757818101518382015260200161248f565b83811115610a035750506000910152565b60208152600082518060208401526124d781604085016020870161248c565b601f01601f19169190910160400192915050565b6000602082840312156124fd57600080fd5b815180151581146108e757600080fd5b60006020828403121561251f57600080fd5b815167ffffffffffffffff81111561253657600080fd5b8201601f8101841361254757600080fd5b805161255561222f826121e8565b81815285602083850101111561256a57600080fd5b61257b82602083016020860161248c565b95945050505050565b600082198211156125975761259761237f565b500190565b6000825161237581846020870161248c56fea264697066735822122030aecc46e43cf1f7405f3ae029bfa5d63ee32c7299925bd217fffabc9abd985b64736f6c634300080d0033";
var isSuperArgs = function (xs) { return xs.length > 1; };
var CBridgeFacet__factory = /** @class */ (function (_super) {
    __extends(CBridgeFacet__factory, _super);
    function CBridgeFacet__factory() {
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
    CBridgeFacet__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    CBridgeFacet__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    CBridgeFacet__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    CBridgeFacet__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    CBridgeFacet__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    CBridgeFacet__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    CBridgeFacet__factory.bytecode = _bytecode;
    CBridgeFacet__factory.abi = _abi;
    return CBridgeFacet__factory;
}(ethers_1.ContractFactory));
exports.CBridgeFacet__factory = CBridgeFacet__factory;
