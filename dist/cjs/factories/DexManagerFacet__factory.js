"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DexManagerFacet__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
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
const _bytecode = "0x608060405234801561001057600080fd5b50610f97806100206000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c80639afc19c71161005b5780639afc19c7146100f0578063c3a6a96b14610103578063fbb2d38114610116578063fcd8e49e1461012b57600080fd5b8063124f1ead1461008d5780632d2506a9146100a257806344e2b18c146100ca578063536db266146100dd575b600080fd5b6100a061009b366004610c7d565b61013e565b005b6100b56100b0366004610cef565b6101d1565b60405190151581526020015b60405180910390f35b6100a06100d8366004610d66565b61022c565b6100a06100eb366004610c7d565b610327565b6100a06100fe366004610dba565b6103ba565b6100a0610111366004610dfc565b6104b2565b61011e61056a565b6040516100c19190610e2f565b6100a0610139366004610dba565b610579565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c13205473ffffffffffffffffffffffffffffffffffffffff163314610184576101846106eb565b61018d8161078b565b60405173ffffffffffffffffffffffffffffffffffffffff8216907f78e0a2ffcdfbbb49ba5c8050d8630fab2176d825e8360809db049cd98f462a7890600090a250565b7fffffffff00000000000000000000000000000000000000000000000000000000811660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604081205460ff165b92915050565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c13205473ffffffffffffffffffffffffffffffffffffffff163314610272576102726106eb565b8160005b8181101561032057600085858381811061029257610292610e89565b90506020020160208101906102a79190610cef565b905083156102bd576102b8816109af565b6102c6565b6102c681610a39565b604051841515907fffffffff000000000000000000000000000000000000000000000000000000008316907f9167f6a23d52a4522e9211205d62ce63f02d928227ae0fe00326f51e152a3c4590600090a350600101610276565b5050505050565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c13205473ffffffffffffffffffffffffffffffffffffffff16331461036d5761036d6106eb565b61037681610a61565b60405173ffffffffffffffffffffffffffffffffffffffff8216907f7e0058dd0cbc0a8b7beaa013a4825655d8e9e81a5e2cc6582818deded0a41b9990600090a250565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c13205473ffffffffffffffffffffffffffffffffffffffff163314610400576104006106eb565b8060005b818110156104ac5761043b84848381811061042157610421610e89565b90506020020160208101906104369190610c7d565b61078b565b83838281811061044d5761044d610e89565b90506020020160208101906104629190610c7d565b73ffffffffffffffffffffffffffffffffffffffff167f78e0a2ffcdfbbb49ba5c8050d8630fab2176d825e8360809db049cd98f462a7860405160405180910390a2600101610404565b50505050565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c13205473ffffffffffffffffffffffffffffffffffffffff1633146104f8576104f86106eb565b801561050c57610507826109af565b610515565b61051582610a39565b604051811515907fffffffff000000000000000000000000000000000000000000000000000000008416907f9167f6a23d52a4522e9211205d62ce63f02d928227ae0fe00326f51e152a3c4590600090a35050565b6060610574610b4e565b905090565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c13205473ffffffffffffffffffffffffffffffffffffffff1633146105bf576105bf6106eb565b8060005b818110156104ac5760008484838181106105df576105df610e89565b90506020020160208101906105f49190610c7d565b90503073ffffffffffffffffffffffffffffffffffffffff821603610645576040517fa9cefcae00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff811660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff161561069857506105c3565b6106a181610a61565b60405173ffffffffffffffffffffffffffffffffffffffff8216907f7e0058dd0cbc0a8b7beaa013a4825655d8e9e81a5e2cc6582818deded0a41b9990600090a2506001016105c3565b600080357fffffffff000000000000000000000000000000000000000000000000000000001681527fdf05114fe8fad5d7cd2d71c5651effc2a4c21f13ee8b4a462e2a3bd4e140c73e6020818152604080842033855290915290912054600160ff909116151514610788576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50565b73ffffffffffffffffffffffffffffffffffffffff811660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602081905260409091205460ff166107de575050565b73ffffffffffffffffffffffffffffffffffffffff8216600090815260208290526040812080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001690556002820154905b818110156104ac578373ffffffffffffffffffffffffffffffffffffffff1683600201828154811061086457610864610e89565b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff160361099d576002830161089a600184610ee7565b815481106108aa576108aa610e89565b60009182526020909120015460028401805473ffffffffffffffffffffffffffffffffffffffff90921691839081106108e5576108e5610e89565b9060005260206000200160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508260020180548061094057610940610efa565b60008281526020902081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff90810180547fffffffffffffffffffffffff00000000000000000000000000000000000000001690550190556104ac565b806109a781610f29565b915050610830565b60017f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e5b7fffffffff000000000000000000000000000000000000000000000000000000009290921660009081526001909201602052604090912080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016911515919091179055565b60007f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e6109d3565b610a6a81610bdf565b73ffffffffffffffffffffffffffffffffffffffff811660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602081905260409091205460ff1615610abe575050565b73ffffffffffffffffffffffffffffffffffffffff909116600081815260208381526040822080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660019081179091556002909401805494850181558252902090910180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169091179055565b60607f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e600201805480602002602001604051908101604052809291908181526020018280548015610bd557602002820191906000526020600020905b815473ffffffffffffffffffffffffffffffffffffffff168152600190910190602001808311610baa575b5050505050905090565b73ffffffffffffffffffffffffffffffffffffffff8116610c2c576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff163b600003610788576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600060208284031215610c8f57600080fd5b813573ffffffffffffffffffffffffffffffffffffffff81168114610cb357600080fd5b9392505050565b80357fffffffff0000000000000000000000000000000000000000000000000000000081168114610cea57600080fd5b919050565b600060208284031215610d0157600080fd5b610cb382610cba565b60008083601f840112610d1c57600080fd5b50813567ffffffffffffffff811115610d3457600080fd5b6020830191508360208260051b8501011115610d4f57600080fd5b9250929050565b80358015158114610cea57600080fd5b600080600060408486031215610d7b57600080fd5b833567ffffffffffffffff811115610d9257600080fd5b610d9e86828701610d0a565b9094509250610db1905060208501610d56565b90509250925092565b60008060208385031215610dcd57600080fd5b823567ffffffffffffffff811115610de457600080fd5b610df085828601610d0a565b90969095509350505050565b60008060408385031215610e0f57600080fd5b610e1883610cba565b9150610e2660208401610d56565b90509250929050565b6020808252825182820181905260009190848201906040850190845b81811015610e7d57835173ffffffffffffffffffffffffffffffffffffffff1683529284019291840191600101610e4b565b50909695505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b8181038181111561022657610226610eb8565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203610f5a57610f5a610eb8565b506001019056fea2646970667358221220a2f6914df3835fb852a5e304efd1c0df1a0a680609202acf9a99ced14e33516f64736f6c63430008110033";
const isSuperArgs = (xs) => xs.length > 1;
class DexManagerFacet__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    deploy(overrides) {
        return super.deploy(overrides || {});
    }
    getDeployTransaction(overrides) {
        return super.getDeployTransaction(overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.DexManagerFacet__factory = DexManagerFacet__factory;
Object.defineProperty(DexManagerFacet__factory, "bytecode", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _bytecode
});
Object.defineProperty(DexManagerFacet__factory, "abi", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _abi
});
//# sourceMappingURL=DexManagerFacet__factory.js.map