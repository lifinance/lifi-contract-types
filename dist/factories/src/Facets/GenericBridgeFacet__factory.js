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
exports.GenericBridgeFacet__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
var ethers_1 = require("ethers");
var _abi = [
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
                        internalType: "uint256",
                        name: "amount",
                        type: "uint256",
                    },
                    {
                        internalType: "address",
                        name: "assetId",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "callTo",
                        type: "address",
                    },
                    {
                        internalType: "bytes",
                        name: "callData",
                        type: "bytes",
                    },
                ],
                internalType: "struct GenericBridgeFacet.BridgeData",
                name: "_bridgeData",
                type: "tuple",
            },
        ],
        name: "startBridgeTokensGeneric",
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
                        internalType: "uint256",
                        name: "amount",
                        type: "uint256",
                    },
                    {
                        internalType: "address",
                        name: "assetId",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "callTo",
                        type: "address",
                    },
                    {
                        internalType: "bytes",
                        name: "callData",
                        type: "bytes",
                    },
                ],
                internalType: "struct GenericBridgeFacet.BridgeData",
                name: "_bridgeData",
                type: "tuple",
            },
        ],
        name: "swapAndStartBridgeTokensGeneric",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
];
var _bytecode = "0x608060405234801561001057600080fd5b50611a22806100206000396000f3fe6080604052600436106100295760003560e01c8063cc512aad1461002e578063f72fa0cb14610043575b600080fd5b61004161003c366004611181565b610056565b005b61004161005136600461141f565b610261565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100d1576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815560006100e76040840160208501611540565b905073ffffffffffffffffffffffffffffffffffffffff8116610143573483351461013e576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6101ac565b600061014e8261041b565b905061015d82333087356104d4565b8335816101698461041b565b610173919061158a565b146101aa576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505b6101bd6101b8846115a1565b610580565b83357f438f81f3fe94456cd9d98e9073524f1c2bafb3ce75def8ced69f708061ddd5c46101ed60208701876115ad565b6101fd6060890160408a01611540565b61020d60808a0160608b01611540565b61021d60a08b0160808c01611540565b61022d60c08c0160a08d01611540565b8b60e001358c60c001356000806040516102509a99989796959493929190611612565b60405180910390a250600090555050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016102dc576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155602082015160006102f08261041b565b905060005b60ff811686111561034457875161033290888860ff851681811061031b5761031b611739565b905060200281019061032d9190611768565b610692565b8061033c816117a6565b9150506102f5565b506000816103518461041b565b61035b919061158a565b905080600003610397576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8085526103a385610580565b87600001517f438f81f3fe94456cd9d98e9073524f1c2bafb3ce75def8ced69f708061ddd5c489602001518a604001518b606001518c608001518d60a001518e60e001518f60c00151600160006040516104059998979695949392919061181d565b60405180910390a2505060009091555050505050565b600073ffffffffffffffffffffffffffffffffffffffff8216156104cc576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa1580156104a3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104c791906118ed565b6104ce565b475b92915050565b73ffffffffffffffffffffffffffffffffffffffff8416610521576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661056e576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61057a84848484610930565b50505050565b6105978160200151826040015183600001516109ee565b60006105bb826020015173ffffffffffffffffffffffffffffffffffffffff161590565b6105c65760006105c9565b81515b9050600080836040015173ffffffffffffffffffffffffffffffffffffffff168385606001516040516105fc9190611906565b60006040518083038185875af1925050503d8060008114610639576040519150601f19603f3d011682016040523d82523d6000602084013e61063e565b606091505b50915091508161057a57600061065382610b2a565b9050806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106899190611918565b60405180910390fd5b6106a86106a26020830183611540565b3b151590565b6106de576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6080810135600081900361071e576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000806107316060850160408601611540565b905060006107456080860160608701611540565b905060006107528361041b565b9050600061075f8361041b565b9050600086831061077157600061077b565b61077b838861158a565b905073ffffffffffffffffffffffffffffffffffffffff8516156107ca576107b3856107ad60408b0160208c01611540565b896109ee565b80156107c5576107c5853330846104d4565b6107ce565b8695505b6000806107de60208b018b611540565b73ffffffffffffffffffffffffffffffffffffffff168861080260a08d018d6115ad565b60405161081092919061192b565b60006040518083038185875af1925050503d806000811461084d576040519150601f19603f3d011682016040523d82523d6000602084013e610852565b606091505b50915091508161086757600061065382610b2a565b60006108728761041b565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388c6108a360208e018e611540565b8d60400160208101906108b69190611540565b8a8e8a87116108c557866108cf565b6108cf8b8861158a565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050505050565b60405173ffffffffffffffffffffffffffffffffffffffff8085166024830152831660448201526064810182905261057a9085907f23b872dd00000000000000000000000000000000000000000000000000000000906084015b60408051601f198184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152610ba8565b73ffffffffffffffffffffffffffffffffffffffff8316610a0e57505050565b73ffffffffffffffffffffffffffffffffffffffff8216610a5b576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff83811660248301526000919085169063dd62ed3e90604401602060405180830381865afa158015610ad1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610af591906118ed565b90508181101561057a5761057a84847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff610cb9565b6060604482511015610b6f57505060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c79000000602082015290565b6000610b8b6004808551610b83919061158a565b859190610e3b565b905080806020019051810190610ba1919061193b565b9392505050565b6000610c0a826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16610f979092919063ffffffff16565b805190915015610cb45780806020019051810190610c2891906119b2565b610cb4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610689565b505050565b801580610d5957506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa158015610d33573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d5791906118ed565b155b610de5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e6365000000000000000000006064820152608401610689565b60405173ffffffffffffffffffffffffffffffffffffffff8316602482015260448101829052610cb49084907f095ea7b3000000000000000000000000000000000000000000000000000000009060640161098a565b606081610e4981601f6119d4565b1015610eb1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f736c6963655f6f766572666c6f770000000000000000000000000000000000006044820152606401610689565b610ebb82846119d4565b84511015610f25576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f736c6963655f6f75744f66426f756e64730000000000000000000000000000006044820152606401610689565b606082158015610f445760405191506000825260208201604052610f8e565b6040519150601f8416801560200281840101858101878315602002848b0101015b81831015610f7d578051835260209283019201610f65565b5050858452601f01601f1916604052505b50949350505050565b6060610fa68484600085610fae565b949350505050565b606082471015611040576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610689565b843b6110a8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610689565b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516110d19190611906565b60006040518083038185875af1925050503d806000811461110e576040519150601f19603f3d011682016040523d82523d6000602084013e611113565b606091505b509150915061112382828661112e565b979650505050505050565b6060831561113d575081610ba1565b82511561114d5782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106899190611918565b6000806040838503121561119457600080fd5b823567ffffffffffffffff808211156111ac57600080fd5b9084019061010082870312156111c157600080fd5b909250602084013590808211156111d757600080fd5b508301608081860312156111ea57600080fd5b809150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610100810167ffffffffffffffff81118282101715611248576112486111f5565b60405290565b604051601f8201601f1916810167ffffffffffffffff81118282101715611277576112776111f5565b604052919050565b600067ffffffffffffffff821115611299576112996111f5565b50601f01601f191660200190565b60006112ba6112b58461127f565b61124e565b90508281528383830111156112ce57600080fd5b828260208301376000602084830101529392505050565b600082601f8301126112f657600080fd5b610ba1838335602085016112a7565b803573ffffffffffffffffffffffffffffffffffffffff8116811461132957600080fd5b919050565b60008083601f84011261134057600080fd5b50813567ffffffffffffffff81111561135857600080fd5b6020830191508360208260051b850101111561137357600080fd5b9250929050565b60006080828403121561138c57600080fd5b6040516080810167ffffffffffffffff82821081831117156113b0576113b06111f5565b81604052829350843583526113c760208601611305565b60208401526113d860408601611305565b604084015260608501359150808211156113f157600080fd5b508301601f8101851361140357600080fd5b611412858235602084016112a7565b6060830152505092915050565b6000806000806060858703121561143557600080fd5b843567ffffffffffffffff8082111561144d57600080fd5b90860190610100828903121561146257600080fd5b61146a611224565b8235815260208301358281111561148057600080fd5b61148c8a8286016112e5565b60208301525061149e60408401611305565b60408201526114af60608401611305565b60608201526114c060808401611305565b60808201526114d160a08401611305565b60a082015260c083013560c082015260e083013560e082015280965050602087013591508082111561150257600080fd5b61150e8883890161132e565b9095509350604087013591508082111561152757600080fd5b506115348782880161137a565b91505092959194509250565b60006020828403121561155257600080fd5b610ba182611305565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60008282101561159c5761159c61155b565b500390565b60006104ce368361137a565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126115e257600080fd5b83018035915067ffffffffffffffff8211156115fd57600080fd5b60200191503681900382131561137357600080fd5b6000610160808352611650818401600781527f67656e6572696300000000000000000000000000000000000000000000000000602082015260400190565b905082810380602085015260008252602081016040850152508b60208201528b8d6040830137600060408d830101526040601f19601f8e01168201019150506116b1606083018b73ffffffffffffffffffffffffffffffffffffffff169052565b73ffffffffffffffffffffffffffffffffffffffff8916608083015273ffffffffffffffffffffffffffffffffffffffff881660a083015273ffffffffffffffffffffffffffffffffffffffff871660c08301528560e08301528461010083015261172161012083018515159052565b8215156101408301529b9a5050505050505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4183360301811261179c57600080fd5b9190910192915050565b600060ff821660ff81036117bc576117bc61155b565b60010192915050565b60005b838110156117e05781810151838201526020016117c8565b8381111561057a5750506000910152565b600081518084526118098160208601602086016117c5565b601f01601f19169290920160200192915050565b600061016080835261185b818401600781527f67656e6572696300000000000000000000000000000000000000000000000000602082015260400190565b90508281038060208501526000825260208101604085015250611881602082018d6117f1565b91505073ffffffffffffffffffffffffffffffffffffffff808b166060840152808a16608084015280891660a084015280881660c0840152508560e0830152846101008301528315156101208301526118df61014083018415159052565b9a9950505050505050505050565b6000602082840312156118ff57600080fd5b5051919050565b6000825161179c8184602087016117c5565b602081526000610ba160208301846117f1565b8183823760009101908152919050565b60006020828403121561194d57600080fd5b815167ffffffffffffffff81111561196457600080fd5b8201601f8101841361197557600080fd5b80516119836112b58261127f565b81815285602083850101111561199857600080fd5b6119a98260208301602086016117c5565b95945050505050565b6000602082840312156119c457600080fd5b81518015158114610ba157600080fd5b600082198211156119e7576119e761155b565b50019056fea26469706673582212201783ec38f626aae37b7a6afb25c36caa35b7296b0021a0a672e7c25dfff5038164736f6c634300080d0033";
var isSuperArgs = function (xs) { return xs.length > 1; };
var GenericBridgeFacet__factory = /** @class */ (function (_super) {
    __extends(GenericBridgeFacet__factory, _super);
    function GenericBridgeFacet__factory() {
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
    GenericBridgeFacet__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    GenericBridgeFacet__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    GenericBridgeFacet__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    GenericBridgeFacet__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    GenericBridgeFacet__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    GenericBridgeFacet__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    GenericBridgeFacet__factory.bytecode = _bytecode;
    GenericBridgeFacet__factory.abi = _abi;
    return GenericBridgeFacet__factory;
}(ethers_1.ContractFactory));
exports.GenericBridgeFacet__factory = GenericBridgeFacet__factory;
