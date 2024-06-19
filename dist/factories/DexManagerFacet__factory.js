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
exports.DexManagerFacet__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
var ethers_1 = require("ethers");
var _abi = [
    {
        type: "function",
        name: "addDex",
        inputs: [
            {
                name: "_dex",
                type: "address",
                internalType: "address",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "approvedDexs",
        inputs: [],
        outputs: [
            {
                name: "addresses",
                type: "address[]",
                internalType: "address[]",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "batchAddDex",
        inputs: [
            {
                name: "_dexs",
                type: "address[]",
                internalType: "address[]",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "batchRemoveDex",
        inputs: [
            {
                name: "_dexs",
                type: "address[]",
                internalType: "address[]",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "batchSetFunctionApprovalBySignature",
        inputs: [
            {
                name: "_signatures",
                type: "bytes4[]",
                internalType: "bytes4[]",
            },
            {
                name: "_approval",
                type: "bool",
                internalType: "bool",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "isFunctionApproved",
        inputs: [
            {
                name: "_signature",
                type: "bytes4",
                internalType: "bytes4",
            },
        ],
        outputs: [
            {
                name: "approved",
                type: "bool",
                internalType: "bool",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "removeDex",
        inputs: [
            {
                name: "_dex",
                type: "address",
                internalType: "address",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "setFunctionApprovalBySignature",
        inputs: [
            {
                name: "_signature",
                type: "bytes4",
                internalType: "bytes4",
            },
            {
                name: "_approval",
                type: "bool",
                internalType: "bool",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "event",
        name: "DexAdded",
        inputs: [
            {
                name: "dexAddress",
                type: "address",
                indexed: true,
                internalType: "address",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "DexRemoved",
        inputs: [
            {
                name: "dexAddress",
                type: "address",
                indexed: true,
                internalType: "address",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "FunctionSignatureApprovalChanged",
        inputs: [
            {
                name: "functionSignature",
                type: "bytes4",
                indexed: true,
                internalType: "bytes4",
            },
            {
                name: "approved",
                type: "bool",
                indexed: true,
                internalType: "bool",
            },
        ],
        anonymous: false,
    },
    {
        type: "error",
        name: "CannotAuthoriseSelf",
        inputs: [],
    },
    {
        type: "error",
        name: "InvalidContract",
        inputs: [],
    },
    {
        type: "error",
        name: "UnAuthorized",
        inputs: [],
    },
];
var _bytecode = "0x608060405234801561001057600080fd5b50610fe6806100206000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c80639afc19c71161005b5780639afc19c7146100f0578063c3a6a96b14610103578063fbb2d38114610116578063fcd8e49e1461012b57600080fd5b8063124f1ead1461008d5780632d2506a9146100a257806344e2b18c146100ca578063536db266146100dd575b600080fd5b6100a061009b366004610ccc565b61013e565b005b6100b56100b0366004610d3e565b6101d1565b60405190151581526020015b60405180910390f35b6100a06100d8366004610db5565b61022c565b6100a06100eb366004610ccc565b610327565b6100a06100fe366004610e09565b610409565b6100a0610111366004610e4b565b610501565b61011e6105b9565b6040516100c19190610e7e565b6100a0610139366004610e09565b6105c8565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c13205473ffffffffffffffffffffffffffffffffffffffff1633146101845761018461073a565b61018d816107da565b60405173ffffffffffffffffffffffffffffffffffffffff8216907f78e0a2ffcdfbbb49ba5c8050d8630fab2176d825e8360809db049cd98f462a7890600090a250565b7fffffffff00000000000000000000000000000000000000000000000000000000811660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604081205460ff165b92915050565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c13205473ffffffffffffffffffffffffffffffffffffffff1633146102725761027261073a565b8160005b8181101561032057600085858381811061029257610292610ed8565b90506020020160208101906102a79190610d3e565b905083156102bd576102b8816109fe565b6102c6565b6102c681610a88565b604051841515907fffffffff000000000000000000000000000000000000000000000000000000008316907f9167f6a23d52a4522e9211205d62ce63f02d928227ae0fe00326f51e152a3c4590600090a350600101610276565b5050505050565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c13205473ffffffffffffffffffffffffffffffffffffffff16331461036d5761036d61073a565b3073ffffffffffffffffffffffffffffffffffffffff8216036103bc576040517fa9cefcae00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6103c581610ab0565b60405173ffffffffffffffffffffffffffffffffffffffff8216907f7e0058dd0cbc0a8b7beaa013a4825655d8e9e81a5e2cc6582818deded0a41b9990600090a250565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c13205473ffffffffffffffffffffffffffffffffffffffff16331461044f5761044f61073a565b8060005b818110156104fb5761048a84848381811061047057610470610ed8565b90506020020160208101906104859190610ccc565b6107da565b83838281811061049c5761049c610ed8565b90506020020160208101906104b19190610ccc565b73ffffffffffffffffffffffffffffffffffffffff167f78e0a2ffcdfbbb49ba5c8050d8630fab2176d825e8360809db049cd98f462a7860405160405180910390a2600101610453565b50505050565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c13205473ffffffffffffffffffffffffffffffffffffffff1633146105475761054761073a565b801561055b57610556826109fe565b610564565b61056482610a88565b604051811515907fffffffff000000000000000000000000000000000000000000000000000000008416907f9167f6a23d52a4522e9211205d62ce63f02d928227ae0fe00326f51e152a3c4590600090a35050565b60606105c3610b9d565b905090565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c13205473ffffffffffffffffffffffffffffffffffffffff16331461060e5761060e61073a565b8060005b818110156104fb57600084848381811061062e5761062e610ed8565b90506020020160208101906106439190610ccc565b90503073ffffffffffffffffffffffffffffffffffffffff821603610694576040517fa9cefcae00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff811660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff16156106e75750610612565b6106f081610ab0565b60405173ffffffffffffffffffffffffffffffffffffffff8216907f7e0058dd0cbc0a8b7beaa013a4825655d8e9e81a5e2cc6582818deded0a41b9990600090a250600101610612565b600080357fffffffff000000000000000000000000000000000000000000000000000000001681527fdf05114fe8fad5d7cd2d71c5651effc2a4c21f13ee8b4a462e2a3bd4e140c73e6020818152604080842033855290915290912054600160ff9091161515146107d7576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50565b73ffffffffffffffffffffffffffffffffffffffff811660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602081905260409091205460ff1661082d575050565b73ffffffffffffffffffffffffffffffffffffffff8216600090815260208290526040812080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001690556002820154905b818110156104fb578373ffffffffffffffffffffffffffffffffffffffff168360020182815481106108b3576108b3610ed8565b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff16036109ec57600283016108e9600184610f36565b815481106108f9576108f9610ed8565b60009182526020909120015460028401805473ffffffffffffffffffffffffffffffffffffffff909216918390811061093457610934610ed8565b9060005260206000200160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508260020180548061098f5761098f610f49565b60008281526020902081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff90810180547fffffffffffffffffffffffff00000000000000000000000000000000000000001690550190556104fb565b806109f681610f78565b91505061087f565b60017f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e5b7fffffffff000000000000000000000000000000000000000000000000000000009290921660009081526001909201602052604090912080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016911515919091179055565b60007f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e610a22565b610ab981610c2e565b73ffffffffffffffffffffffffffffffffffffffff811660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602081905260409091205460ff1615610b0d575050565b73ffffffffffffffffffffffffffffffffffffffff909116600081815260208381526040822080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660019081179091556002909401805494850181558252902090910180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169091179055565b60607f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e600201805480602002602001604051908101604052809291908181526020018280548015610c2457602002820191906000526020600020905b815473ffffffffffffffffffffffffffffffffffffffff168152600190910190602001808311610bf9575b5050505050905090565b73ffffffffffffffffffffffffffffffffffffffff8116610c7b576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff163b6000036107d7576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600060208284031215610cde57600080fd5b813573ffffffffffffffffffffffffffffffffffffffff81168114610d0257600080fd5b9392505050565b80357fffffffff0000000000000000000000000000000000000000000000000000000081168114610d3957600080fd5b919050565b600060208284031215610d5057600080fd5b610d0282610d09565b60008083601f840112610d6b57600080fd5b50813567ffffffffffffffff811115610d8357600080fd5b6020830191508360208260051b8501011115610d9e57600080fd5b9250929050565b80358015158114610d3957600080fd5b600080600060408486031215610dca57600080fd5b833567ffffffffffffffff811115610de157600080fd5b610ded86828701610d59565b9094509250610e00905060208501610da5565b90509250925092565b60008060208385031215610e1c57600080fd5b823567ffffffffffffffff811115610e3357600080fd5b610e3f85828601610d59565b90969095509350505050565b60008060408385031215610e5e57600080fd5b610e6783610d09565b9150610e7560208401610da5565b90509250929050565b6020808252825182820181905260009190848201906040850190845b81811015610ecc57835173ffffffffffffffffffffffffffffffffffffffff1683529284019291840191600101610e9a565b50909695505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b8181038181111561022657610226610f07565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203610fa957610fa9610f07565b506001019056fea2646970667358221220a46e0672c898a3da09362046dc48190987e7e1ad35e2cfdfcef17bc9f10eb77664736f6c63430008110033";
var isSuperArgs = function (xs) { return xs.length > 1; };
var DexManagerFacet__factory = /** @class */ (function (_super) {
    __extends(DexManagerFacet__factory, _super);
    function DexManagerFacet__factory() {
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
    DexManagerFacet__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    DexManagerFacet__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    DexManagerFacet__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    DexManagerFacet__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    DexManagerFacet__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    DexManagerFacet__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    DexManagerFacet__factory.bytecode = _bytecode;
    DexManagerFacet__factory.abi = _abi;
    return DexManagerFacet__factory;
}(ethers_1.ContractFactory));
exports.DexManagerFacet__factory = DexManagerFacet__factory;
