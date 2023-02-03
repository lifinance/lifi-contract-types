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
exports.AxelarExecutor__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "_owner",
                type: "address",
            },
            {
                internalType: "address",
                name: "_gateway",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        inputs: [],
        name: "AddressOutOfBounds",
        type: "error",
    },
    {
        inputs: [],
        name: "ExecutionFailed",
        type: "error",
    },
    {
        inputs: [],
        name: "NotAContract",
        type: "error",
    },
    {
        inputs: [],
        name: "NotApprovedByGateway",
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
        inputs: [],
        name: "UnAuthorized",
        type: "error",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "callTo",
                type: "address",
            },
            {
                indexed: false,
                internalType: "bytes4",
                name: "selector",
                type: "bytes4",
            },
        ],
        name: "AxelarExecutionComplete",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "callTo",
                type: "address",
            },
            {
                indexed: false,
                internalType: "bytes4",
                name: "selector",
                type: "bytes4",
            },
            {
                indexed: false,
                internalType: "address",
                name: "recoveryAddress",
                type: "address",
            },
        ],
        name: "AxelarExecutionFailed",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "gateway",
                type: "address",
            },
        ],
        name: "AxelarGatewaySet",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "previousOwner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "OwnershipTransferred",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "commandId",
                type: "bytes32",
            },
            {
                internalType: "string",
                name: "sourceChain",
                type: "string",
            },
            {
                internalType: "string",
                name: "sourceAddress",
                type: "string",
            },
            {
                internalType: "bytes",
                name: "payload",
                type: "bytes",
            },
        ],
        name: "execute",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "commandId",
                type: "bytes32",
            },
            {
                internalType: "string",
                name: "sourceChain",
                type: "string",
            },
            {
                internalType: "string",
                name: "sourceAddress",
                type: "string",
            },
            {
                internalType: "bytes",
                name: "payload",
                type: "bytes",
            },
            {
                internalType: "string",
                name: "tokenSymbol",
                type: "string",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "executeWithToken",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "gateway",
        outputs: [
            {
                internalType: "contract IAxelarGateway",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "owner",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "renounceOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_gateway",
                type: "address",
            },
        ],
        name: "setAxelarGateway",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
var _bytecode = "0x60806040523480156200001157600080fd5b5060405162001c4138038062001c418339810160408190526200003491620001f8565b600080546001600160a01b0319166001600160a01b038316179055620000616200005b3390565b620000a8565b6200006c82620000fa565b6040516001600160a01b038216907f77113c61b80db60b60930e435e0f6727862501ceee7400d7a765a1dd951b232490600090a2505062000230565b600180546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b620001046200017d565b6001600160a01b0381166200016f5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084015b60405180910390fd5b6200017a81620000a8565b50565b6001546001600160a01b03163314620001d95760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640162000166565b565b80516001600160a01b0381168114620001f357600080fd5b919050565b600080604083850312156200020c57600080fd5b6200021783620001db565b91506200022760208401620001db565b90509250929050565b611a0180620002406000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c8063491606581161005b57806349160658146100f3578063715018a6146101065780638da5cb5b1461010e578063f2fde38b1461012c57600080fd5b8063116191b6146100825780631a98b2e0146100cb578063214ac8d4146100e0575b600080fd5b6000546100a29073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b6100de6100d9366004611558565b61013f565b005b6100de6100ee366004611654565b6102f1565b6100de610101366004611671565b610366565b6100de6104d9565b60015473ffffffffffffffffffffffffffffffffffffffff166100a2565b6100de61013a366004611654565b6104ed565b60008585604051610151929190611715565b6040519081900381206000547f1876eed900000000000000000000000000000000000000000000000000000000835290925073ffffffffffffffffffffffffffffffffffffffff1690631876eed9906101be908e908e908e908e908e9089908d908d908d9060040161176e565b6020604051808303816000875af11580156101dd573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061020191906117cd565b610237576040517f500c44b400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102e48a8a8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050604080516020601f8e018190048102820181019092528c815292508c91508b908190840183828082843760009201919091525050604080516020601f8b018190048102820181019092528981528c93508b9250908a908a90819084018382808284376000920191909152508a92506105a9915050565b5050505050505050505050565b6102f961095a565b600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff8316908117825560405190917f77113c61b80db60b60930e435e0f6727862501ceee7400d7a765a1dd951b232491a250565b60008282604051610378929190611715565b6040519081900381206000547f5f6970c300000000000000000000000000000000000000000000000000000000835290925073ffffffffffffffffffffffffffffffffffffffff1690635f6970c3906103df908b908b908b908b908b9089906004016117ef565b6020604051808303816000875af11580156103fe573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061042291906117cd565b610458576040517f500c44b400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6104cf87878080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050604080516020601f8b0181900481028201810190925289815292508991508890819084018382808284376000920191909152508892508791506109db9050565b5050505050505050565b6104e161095a565b6104eb6000610c66565b565b6104f561095a565b73ffffffffffffffffffffffffffffffffffffffff811661059d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f646472657373000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b6105a681610c66565b50565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610624576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155604080516020601f870181900481028201810190925285815260009161066d91839189908990819084018382808284376000920191909152509293925050610cdd9050565b905060006106b5601488888080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509293925050610cdd9050565b9050600061070860286106c8818a61185f565b8a8a8080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929493925050610d439050565b600080546040517f935b13f6000000000000000000000000000000000000000000000000000000008152929350909173ffffffffffffffffffffffffffffffffffffffff9091169063935b13f690610764908a90600401611896565b602060405180830381865afa158015610781573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107a591906118e7565b60005490915073ffffffffffffffffffffffffffffffffffffffff858116911614806107d05750833b155b156107f3576107ea846107e284611904565b83868a610e5f565b5050505061094e565b61081573ffffffffffffffffffffffffffffffffffffffff8216856000610f1d565b61083673ffffffffffffffffffffffffffffffffffffffff82168588610f1d565b600061085d5a73ffffffffffffffffffffffffffffffffffffffff87169060008087611122565b509050806108845761087a8561087285611904565b84878b610e5f565b505050505061094e565b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff86811660248301526000919084169063dd62ed3e90604401602060405180830381865afa1580156108fa573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061091e9190611954565b905080156109475761094773ffffffffffffffffffffffffffffffffffffffff841686836111ad565b5050505050505b60009055505050505050565b60015473ffffffffffffffffffffffffffffffffffffffff1633146104eb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610594565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610a56576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155604080516020601f8501819004810282018101909252838152600091610a9f91839187908790819084018382808284376000920191909152509293925050610cdd9050565b60005490915073ffffffffffffffffffffffffffffffffffffffff90811690821603610af7576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b803b610b2f576040517f09ee12d500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000610b806014610b40818761185f565b87878080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929493925050610d439050565b90506000610ba95a73ffffffffffffffffffffffffffffffffffffffff85169060008086611122565b50905080610be3576040517facfdb44400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff83167f3efa8a28be57a02aacda95a46a91a4c0607199f0a57d01f4f42f9f39faff244c610c2484611904565b6040517fffffffff00000000000000000000000000000000000000000000000000000000909116815260200160405180910390a2505060009091555050505050565b6001805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6000610cea82601461196d565b83511015610d24576040517f8f95a28a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50818101602001516c0100000000000000000000000090045b92915050565b606081610d5181601f61196d565b1015610d89576040517f47aaf07a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610d93828461196d565b84511015610dcd576040517f3b99b53d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b606082158015610dec5760405191506000825260208201604052610e54565b6040519150601f8416801560200281840101858101878315602002848b0101015b81831015610e25578051835260209283019201610e0d565b5050858452601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016604052505b5090505b9392505050565b604080517fffffffff000000000000000000000000000000000000000000000000000000008616815273ffffffffffffffffffffffffffffffffffffffff84811660208301528716917fcb85a171cc205c04807f94b4de952be30e9acd28e44f63bf7b11bc69741bec83910160405180910390a2610ef573ffffffffffffffffffffffffffffffffffffffff8416866000610f1d565b610f1673ffffffffffffffffffffffffffffffffffffffff841683836111ad565b5050505050565b801580610fbd57506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa158015610f97573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fbb9190611954565b155b611049576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e6365000000000000000000006064820152608401610594565b60405173ffffffffffffffffffffffffffffffffffffffff831660248201526044810182905261111d9084907f095ea7b300000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611203565b505050565b6000606060008060008661ffff1667ffffffffffffffff81111561114857611148611980565b6040519080825280601f01601f191660200182016040528015611172576020820181803683370190505b5090506000808751602089018b8e8ef191503d925086831115611193578692505b828152826000602083013e90999098509650505050505050565b60405173ffffffffffffffffffffffffffffffffffffffff831660248201526044810182905261111d9084907fa9059cbb000000000000000000000000000000000000000000000000000000009060640161109b565b6000611265826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff1661130f9092919063ffffffff16565b80519091501561111d578080602001905181019061128391906117cd565b61111d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610594565b606061131e8484600085611326565b949350505050565b6060824710156113b8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610594565b73ffffffffffffffffffffffffffffffffffffffff85163b611436576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610594565b6000808673ffffffffffffffffffffffffffffffffffffffff16858760405161145f91906119af565b60006040518083038185875af1925050503d806000811461149c576040519150601f19603f3d011682016040523d82523d6000602084013e6114a1565b606091505b50915091506114b18282866114bc565b979650505050505050565b606083156114cb575081610e58565b8251156114db5782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105949190611896565b60008083601f84011261152157600080fd5b50813567ffffffffffffffff81111561153957600080fd5b60208301915083602082850101111561155157600080fd5b9250929050565b60008060008060008060008060008060c08b8d03121561157757600080fd5b8a35995060208b013567ffffffffffffffff8082111561159657600080fd5b6115a28e838f0161150f565b909b50995060408d01359150808211156115bb57600080fd5b6115c78e838f0161150f565b909950975060608d01359150808211156115e057600080fd5b6115ec8e838f0161150f565b909750955060808d013591508082111561160557600080fd5b506116128d828e0161150f565b9150809450508092505060a08b013590509295989b9194979a5092959850565b73ffffffffffffffffffffffffffffffffffffffff811681146105a657600080fd5b60006020828403121561166657600080fd5b8135610e5881611632565b60008060008060008060006080888a03121561168c57600080fd5b87359650602088013567ffffffffffffffff808211156116ab57600080fd5b6116b78b838c0161150f565b909850965060408a01359150808211156116d057600080fd5b6116dc8b838c0161150f565b909650945060608a01359150808211156116f557600080fd5b506117028a828b0161150f565b989b979a50959850939692959293505050565b8183823760009101908152919050565b8183528181602085013750600060208284010152600060207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b89815260c06020820152600061178860c083018a8c611725565b828103604084015261179b81898b611725565b905086606084015282810360808401526117b6818688611725565b9150508260a08301529a9950505050505050505050565b6000602082840312156117df57600080fd5b81518015158114610e5857600080fd5b868152608060208201526000611809608083018789611725565b828103604084015261181c818688611725565b915050826060830152979650505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b81810381811115610d3d57610d3d611830565b60005b8381101561188d578181015183820152602001611875565b50506000910152565b60208152600082518060208401526118b5816040850160208701611872565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169190910160400192915050565b6000602082840312156118f957600080fd5b8151610e5881611632565b6000815160208301517fffffffff000000000000000000000000000000000000000000000000000000008082169350600483101561194c5780818460040360031b1b83161693505b505050919050565b60006020828403121561196657600080fd5b5051919050565b80820180821115610d3d57610d3d611830565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600082516119c1818460208701611872565b919091019291505056fea2646970667358221220cfd8ed7b8b0247921273737c5e27b8d78afb02c89022ffba74b5d3a61e54839964736f6c63430008110033";
var isSuperArgs = function (xs) { return xs.length > 1; };
var AxelarExecutor__factory = /** @class */ (function (_super) {
    __extends(AxelarExecutor__factory, _super);
    function AxelarExecutor__factory() {
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
    AxelarExecutor__factory.prototype.deploy = function (_owner, _gateway, overrides) {
        return _super.prototype.deploy.call(this, _owner, _gateway, overrides || {});
    };
    AxelarExecutor__factory.prototype.getDeployTransaction = function (_owner, _gateway, overrides) {
        return _super.prototype.getDeployTransaction.call(this, _owner, _gateway, overrides || {});
    };
    AxelarExecutor__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    AxelarExecutor__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    AxelarExecutor__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    AxelarExecutor__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    AxelarExecutor__factory.bytecode = _bytecode;
    AxelarExecutor__factory.abi = _abi;
    return AxelarExecutor__factory;
}(ethers_1.ContractFactory));
exports.AxelarExecutor__factory = AxelarExecutor__factory;
