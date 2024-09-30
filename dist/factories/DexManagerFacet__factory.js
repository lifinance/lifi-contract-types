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
        name: "isContractApproved",
        inputs: [
            {
                name: "_contract",
                type: "address",
                internalType: "address",
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
var _bytecode = "0x608060405234801561001057600080fd5b50611012806100206000396000f3fe608060405234801561001057600080fd5b50600436106100a35760003560e01c8063536db26611610076578063c3a6a96b1161005b578063c3a6a96b14610131578063fbb2d38114610144578063fcd8e49e1461015957600080fd5b8063536db2661461010b5780639afc19c71461011e57600080fd5b8063070d39d9146100a8578063124f1ead146100d05780632d2506a9146100e557806344e2b18c146100f8575b600080fd5b6100bb6100b6366004610cf8565b61016c565b60405190151581526020015b60405180910390f35b6100e36100de366004610cf8565b6101bb565b005b6100bb6100f3366004610d6a565b61024e565b6100e3610106366004610de1565b6102a7565b6100e3610119366004610cf8565b6103a2565b6100e361012c366004610e35565b610435565b6100e361013f366004610e77565b61052d565b61014c6105e5565b6040516100c79190610eaa565b6100e3610167366004610e35565b6105f4565b73ffffffffffffffffffffffffffffffffffffffff811660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604081205460ff165b92915050565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c13205473ffffffffffffffffffffffffffffffffffffffff16331461020157610201610766565b61020a81610806565b60405173ffffffffffffffffffffffffffffffffffffffff8216907f78e0a2ffcdfbbb49ba5c8050d8630fab2176d825e8360809db049cd98f462a7890600090a250565b7fffffffff00000000000000000000000000000000000000000000000000000000811660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604081205460ff166101b5565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c13205473ffffffffffffffffffffffffffffffffffffffff1633146102ed576102ed610766565b8160005b8181101561039b57600085858381811061030d5761030d610f04565b90506020020160208101906103229190610d6a565b905083156103385761033381610a2a565b610341565b61034181610ab4565b604051841515907fffffffff000000000000000000000000000000000000000000000000000000008316907f9167f6a23d52a4522e9211205d62ce63f02d928227ae0fe00326f51e152a3c4590600090a3506001016102f1565b5050505050565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c13205473ffffffffffffffffffffffffffffffffffffffff1633146103e8576103e8610766565b6103f181610adc565b60405173ffffffffffffffffffffffffffffffffffffffff8216907f7e0058dd0cbc0a8b7beaa013a4825655d8e9e81a5e2cc6582818deded0a41b9990600090a250565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c13205473ffffffffffffffffffffffffffffffffffffffff16331461047b5761047b610766565b8060005b81811015610527576104b684848381811061049c5761049c610f04565b90506020020160208101906104b19190610cf8565b610806565b8383828181106104c8576104c8610f04565b90506020020160208101906104dd9190610cf8565b73ffffffffffffffffffffffffffffffffffffffff167f78e0a2ffcdfbbb49ba5c8050d8630fab2176d825e8360809db049cd98f462a7860405160405180910390a260010161047f565b50505050565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c13205473ffffffffffffffffffffffffffffffffffffffff16331461057357610573610766565b80156105875761058282610a2a565b610590565b61059082610ab4565b604051811515907fffffffff000000000000000000000000000000000000000000000000000000008416907f9167f6a23d52a4522e9211205d62ce63f02d928227ae0fe00326f51e152a3c4590600090a35050565b60606105ef610bc9565b905090565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c13205473ffffffffffffffffffffffffffffffffffffffff16331461063a5761063a610766565b8060005b8181101561052757600084848381811061065a5761065a610f04565b905060200201602081019061066f9190610cf8565b90503073ffffffffffffffffffffffffffffffffffffffff8216036106c0576040517fa9cefcae00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff811660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1615610713575061063e565b61071c81610adc565b60405173ffffffffffffffffffffffffffffffffffffffff8216907f7e0058dd0cbc0a8b7beaa013a4825655d8e9e81a5e2cc6582818deded0a41b9990600090a25060010161063e565b600080357fffffffff000000000000000000000000000000000000000000000000000000001681527fdf05114fe8fad5d7cd2d71c5651effc2a4c21f13ee8b4a462e2a3bd4e140c73e6020818152604080842033855290915290912054600160ff909116151514610803576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50565b73ffffffffffffffffffffffffffffffffffffffff811660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602081905260409091205460ff16610859575050565b73ffffffffffffffffffffffffffffffffffffffff8216600090815260208290526040812080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001690556002820154905b81811015610527578373ffffffffffffffffffffffffffffffffffffffff168360020182815481106108df576108df610f04565b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff1603610a185760028301610915600184610f62565b8154811061092557610925610f04565b60009182526020909120015460028401805473ffffffffffffffffffffffffffffffffffffffff909216918390811061096057610960610f04565b9060005260206000200160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550826002018054806109bb576109bb610f75565b60008281526020902081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff90810180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055019055610527565b80610a2281610fa4565b9150506108ab565b60017f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e5b7fffffffff000000000000000000000000000000000000000000000000000000009290921660009081526001909201602052604090912080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016911515919091179055565b60007f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e610a4e565b610ae581610c5a565b73ffffffffffffffffffffffffffffffffffffffff811660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602081905260409091205460ff1615610b39575050565b73ffffffffffffffffffffffffffffffffffffffff909116600081815260208381526040822080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660019081179091556002909401805494850181558252902090910180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169091179055565b60607f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e600201805480602002602001604051908101604052809291908181526020018280548015610c5057602002820191906000526020600020905b815473ffffffffffffffffffffffffffffffffffffffff168152600190910190602001808311610c25575b5050505050905090565b73ffffffffffffffffffffffffffffffffffffffff8116610ca7576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff163b600003610803576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600060208284031215610d0a57600080fd5b813573ffffffffffffffffffffffffffffffffffffffff81168114610d2e57600080fd5b9392505050565b80357fffffffff0000000000000000000000000000000000000000000000000000000081168114610d6557600080fd5b919050565b600060208284031215610d7c57600080fd5b610d2e82610d35565b60008083601f840112610d9757600080fd5b50813567ffffffffffffffff811115610daf57600080fd5b6020830191508360208260051b8501011115610dca57600080fd5b9250929050565b80358015158114610d6557600080fd5b600080600060408486031215610df657600080fd5b833567ffffffffffffffff811115610e0d57600080fd5b610e1986828701610d85565b9094509250610e2c905060208501610dd1565b90509250925092565b60008060208385031215610e4857600080fd5b823567ffffffffffffffff811115610e5f57600080fd5b610e6b85828601610d85565b90969095509350505050565b60008060408385031215610e8a57600080fd5b610e9383610d35565b9150610ea160208401610dd1565b90509250929050565b6020808252825182820181905260009190848201906040850190845b81811015610ef857835173ffffffffffffffffffffffffffffffffffffffff1683529284019291840191600101610ec6565b50909695505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b818103818111156101b5576101b5610f33565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203610fd557610fd5610f33565b506001019056fea2646970667358221220c48b98b2e3d2a25d3b8afd84709bba63555f1c1358885633bcb80305f4bf45b464736f6c63430008110033";
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
