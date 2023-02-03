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
exports.DeployScript__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        inputs: [],
        name: "IS_SCRIPT",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "run",
        outputs: [
            {
                internalType: "contract MultichainFacet",
                name: "deployed",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "vm",
        outputs: [
            {
                internalType: "contract Vm",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
var _bytecode = "0x60806040526000805460ff191660011790553480156200001e57600080fd5b50604080518082018252600f81526e135d5b1d1a58da185a5b919858d95d608a1b60208201529051634bca482160e11b8152600080516020620040928339815191529063979490429062000094906004016020808252600b908201526a505249564154455f4b455960a81b604082015260600190565b6020604051808303816000875af1158015620000b4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000da919062000583565b60018190556040516001625e79b760e01b031981526004810191909152600080516020620040928339815191529063ffa18649906024016020604051808303816000875af115801562000131573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200015791906200059d565b600280546001600160a01b0319166001600160a01b039290921691909117905560405163350d56bf60e01b815260206004820152601760248201527f435245415445335f464143544f52595f414444524553530000000000000000006044820152600090600080516020620040928339815191529063350d56bf906064016020604051808303816000875af1158015620001f5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200021b91906200059d565b60405163f877cb1960e01b8152909150600090600080516020620040928339815191529063f877cb19906200026b9060040160208082526004908201526314d0531560e21b604082015260600190565b6000604051808303816000875af11580156200028b573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052620002b591908101906200060b565b90507f885cb69240a935d632d79c317109709ecfa91a80626ff3989d68f67f5b1dd12d60001c60601b60601c6001600160a01b031663d930a0e66040518163ffffffff1660e01b81526004016000604051808303816000875af115801562000321573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526200034b91908101906200060b565b6006906200035a908262000752565b5060405163f877cb1960e01b81526020600482015260076024820152664e4554574f524b60c81b6044820152600080516020620040928339815191529063f877cb19906064016000604051808303816000875af1158015620003c0573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052620003ea91908101906200060b565b600790620003f9908262000752565b5060405163f877cb1960e01b815260206004820152600b60248201526a08c92988abea6aa8c8c92b60ab1b6044820152600080516020620040928339815191529063f877cb19906064016000604051808303816000875af115801562000463573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526200048d91908101906200060b565b6008906200049c908262000752565b508083604051602001620004b29291906200081e565b60408051808303601f190181529082905280516020909101206005819055600480546001600160a01b0319166001600160a01b03868116918217835560025463143c711960e21b865216918401919091526024830191909152906350f1c46490604401602060405180830381865afa15801562000533573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200055991906200059d565b600380546001600160a01b0319166001600160a01b03929092169190911790555062000851915050565b6000602082840312156200059657600080fd5b5051919050565b600060208284031215620005b057600080fd5b81516001600160a01b0381168114620005c857600080fd5b9392505050565b634e487b7160e01b600052604160045260246000fd5b60005b8381101562000602578181015183820152602001620005e8565b50506000910152565b6000602082840312156200061e57600080fd5b81516001600160401b03808211156200063657600080fd5b818401915084601f8301126200064b57600080fd5b815181811115620006605762000660620005cf565b604051601f8201601f19908116603f011681019083821181831017156200068b576200068b620005cf565b81604052828152876020848701011115620006a557600080fd5b620006b8836020830160208801620005e5565b979650505050505050565b600181811c90821680620006d857607f821691505b602082108103620006f957634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200074d57600081815260208120601f850160051c81016020861015620007285750805b601f850160051c820191505b81811015620007495782815560010162000734565b5050505b505050565b81516001600160401b038111156200076e576200076e620005cf565b62000786816200077f8454620006c3565b84620006ff565b602080601f831160018114620007be5760008415620007a55750858301515b600019600386901b1c1916600185901b17855562000749565b600085815260208120601f198616915b82811015620007ef57888601518255948401946001909101908401620007ce565b50858210156200080e5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6000835162000832818460208801620005e5565b83519083019062000848818360208801620005e5565b01949350505050565b61383180620008616000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80633a76846314610046578063c04062261461008b578063f8ccbf4714610093575b600080fd5b610061737109709ecfa91a80626ff3989d68f67f5b1dd12d81565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b6100616100b0565b6000546100a09060ff1681565b6040519015158152602001610082565b6001546040517fce817d47000000000000000000000000000000000000000000000000000000008152600091737109709ecfa91a80626ff3989d68f67f5b1dd12d9163ce817d47916101089160040190815260200190565b600060405180830381600087803b15801561012257600080fd5b505af1158015610136573d6000803e3d6000fd5b5050505061015c60035473ffffffffffffffffffffffffffffffffffffffff163b151590565b1561017e575060035473ffffffffffffffffffffffffffffffffffffffff1690565b60045460055460405173ffffffffffffffffffffffffffffffffffffffff9092169163cdcb760a91906101b3602082016102b5565b6020820181038252601f19601f820116604052506040518363ffffffff1660e01b81526004016101e49291906102c2565b6020604051808303816000875af1158015610203573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102279190610336565b90507f885cb69240a935d632d79c317109709ecfa91a80626ff3989d68f67f5b1dd12d60001c60601b60601c73ffffffffffffffffffffffffffffffffffffffff166376eadd366040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561029a57600080fd5b505af11580156102ae573d6000803e3d6000fd5b5050505090565b6134888061037483390190565b82815260006020604081840152835180604085015260005b818110156102f6578581018301518582016060015282016102da565b5060006060828601015260607fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f830116850101925050509392505050565b60006020828403121561034857600080fd5b815173ffffffffffffffffffffffffffffffffffffffff8116811461036c57600080fd5b939250505056fe608060405234801561001057600080fd5b50613468806100206000396000f3fe60806040526004361061005a5760003560e01c8063dcd5733b11610043578063dcd5733b14610094578063dfd83090146100b4578063ef55f6dd146100d457600080fd5b8063a342d3ff1461005f578063bcd733b314610074575b600080fd5b61007261006d366004612c0b565b6100e7565b005b34801561008057600080fd5b5061007261008f366004612c87565b6103af565b3480156100a057600080fd5b506100726100af366004612cfc565b610552565b3480156100c057600080fd5b506100726100cf366004612d68565b61074b565b6100726100e2366004612dbb565b6109b1565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610162576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006101733447612e62565b9050868061010001516101b2576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b87806101200151156101f0576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886102138160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561024a576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c00151600003610288576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036102c5576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b865173ffffffffffffffffffffffffffffffffffffffff1660009081527f1ee407b3d26d6d639b123c41c4a76edbb0ed1dd9e1bbd835fcab743f9a070b72602081905260409091205460ff16610347576040517f466d7fef00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61035c8b600001518c60c001518c8c33610cad565b60c08c015261036b8b89610df5565b50479250600091505082821161038257600061038c565b61038c8383612e62565b905080156103a0576103a060008583611141565b50506000909255505050505050565b6103b7611177565b7f1ee407b3d26d6d639b123c41c4a76edbb0ed1dd9e1bbd835fcab743f9a070b73547f1ee407b3d26d6d639b123c41c4a76edbb0ed1dd9e1bbd835fcab743f9a070b729060ff16610434576040517f87138d5c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60005b67ffffffffffffffff81168311156105135783838267ffffffffffffffff1681811061046557610465612e75565b905060400201602001602081019061047d9190612ea4565b82600201600086868567ffffffffffffffff1681811061049f5761049f612e75565b6104b59260206040909202019081019150612ea4565b73ffffffffffffffffffffffffffffffffffffffff9081168252602082019290925260400160002080547fffffffffffffffffffffffff00000000000000000000000000000000000000001692909116919091179055600101610437565b507fbcc160cb920b2b041ee8915122941375065d36950ffc1d026789ac3db33d7efc8383604051610545929190612ebf565b60405180910390a1505050565b61055a611177565b7f1ee407b3d26d6d639b123c41c4a76edbb0ed1dd9e1bbd835fcab743f9a070b73547f1ee407b3d26d6d639b123c41c4a76edbb0ed1dd9e1bbd835fcab743f9a070b729060ff166105d7576040517f87138d5c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8360005b818110156107055760008787838181106105f7576105f7612e75565b905060200201602081019061060c9190612ea4565b73ffffffffffffffffffffffffffffffffffffffff1603610659576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b84848281811061066b5761066b612e75565b90506020020160208101906106809190612f2e565b83600089898581811061069557610695612e75565b90506020020160208101906106aa9190612ea4565b73ffffffffffffffffffffffffffffffffffffffff168152602081019190915260400160002080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00169115159190911790556001016105db565b507f2c54db8b386392c78501cad30dd4571a5a59d23826fc1053f2f620621909c3da8686868660405161073b9493929190612f4b565b60405180910390a1505050505050565b610753611177565b7f1ee407b3d26d6d639b123c41c4a76edbb0ed1dd9e1bbd835fcab743f9a070b7273ffffffffffffffffffffffffffffffffffffffff84166107c1576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018101805473ffffffffffffffffffffffffffffffffffffffff8616610100027fffffffffffffffffffffff0000000000000000000000000000000000000000ff8216811790925560ff91821691161715610849576040517f0dc149f000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8160005b8181101561095257600085858381811061086957610869612e75565b905060200201602081019061087e9190612ea4565b73ffffffffffffffffffffffffffffffffffffffff16036108cb576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018360008787858181106108e2576108e2612e75565b90506020020160208101906108f79190612ea4565b73ffffffffffffffffffffffffffffffffffffffff168152602081019190915260400160002080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001691151591909117905560010161084d565b50600182810180547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001690911790556040517fe51c1d2eff84ab6f9ee1bd80996062dc0cb46f36d7becb600280a7083294908890600090a15050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610a2c576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155336000610a3d3447612e62565b90508480610100015115610a7d576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8580610120015115610abb576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b86610ade8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610b15576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c00151600003610b53576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610b90576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b7f1ee407b3d26d6d639b123c41c4a76edbb0ed1dd9e1bbd835fcab743f9a070b72806000610bc160208b018b612ea4565b73ffffffffffffffffffffffffffffffffffffffff16815260208101919091526040016000205460ff16610c21576040517f466d7fef00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608089015173ffffffffffffffffffffffffffffffffffffffff1615610c5357610c5389608001518a60c001516111ec565b610c6b89610c66368b90038b018b612fe6565b610df5565b504792506000915050828211610c82576000610c8c565b610c8c8383612e62565b90508015610ca057610ca060008583611141565b5050600090925550505050565b600082808203610ce9576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008585610cf8600185612e62565b818110610d0757610d07612e75565b9050602002810190610d199190613002565b610d2a906080810190606001612ea4565b90506000610d3782611362565b905073ffffffffffffffffffffffffffffffffffffffff8216610d6157610d5e3482612e62565b90505b6000610d6d888861141b565b9050610d798888611527565b610d868a89898985611588565b600082610d9285611362565b610d9c9190612e62565b905089811015610de7576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044015b60405180910390fd5b9a9950505050505050505050565b816080015173ffffffffffffffffffffffffffffffffffffffff16816000015173ffffffffffffffffffffffffffffffffffffffff1603610ee057608082015160c083015160a08401516040517f628d6cba000000000000000000000000000000000000000000000000000000008152600481019290925273ffffffffffffffffffffffffffffffffffffffff90811660248301529091169063628d6cba906044016020604051808303816000875af1158015610eb6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610eda9190613040565b50611106565b60808201517f1ee407b3d26d6d639b123c41c4a76edbb0ed1dd9e1bbd835fcab743f9a070b729073ffffffffffffffffffffffffffffffffffffffff16610fd057815160c0840151600183015460a086015160e08701516040517fa5e5657100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff610100909404841660048201529183166024830152604482015292169163a5e5657191906064016000604051808303818588803b158015610fb257600080fd5b505af1158015610fc6573d6000803e3d6000fd5b5050505050611104565b610fe7836080015183600001518560c0015161193a565b8151608084015173ffffffffffffffffffffffffffffffffffffffff90811660009081526002840160205260409020549181169163edbdf5e29116611030578460800151611060565b608085015173ffffffffffffffffffffffffffffffffffffffff9081166000908152600285016020526040902054165b60a086015160c087015160e0808901516040519186901b7fffffffff0000000000000000000000000000000000000000000000000000000016825273ffffffffffffffffffffffffffffffffffffffff948516600483015293909216602483015260448201526064810191909152608401600060405180830381600087803b1580156110eb57600080fd5b505af11580156110ff573d6000803e3d6000fd5b505050505b505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f18260405161113591906130cb565b60405180910390a15050565b73ffffffffffffffffffffffffffffffffffffffff83161561116d57611168838383611a85565b505050565b6111688282611bb4565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c6004015473ffffffffffffffffffffffffffffffffffffffff1633146111ea576040517f277d76f800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b73ffffffffffffffffffffffffffffffffffffffff82166112455780341015611241576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b8060000361127f576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa1580156112ec573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061131091906131de565b905081811015611356576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610dde565b61116883333085611cde565b600073ffffffffffffffffffffffffffffffffffffffff821615611413576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa1580156113ea573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061140e91906131de565b611415565b475b92915050565b60608160008167ffffffffffffffff811115611439576114396128e2565b604051908082528060200260200182016040528015611462578160200160208202803683370190505b5090506000805b8381101561151c5786868281811061148357611483612e75565b90506020028101906114959190613002565b6114a6906080810190606001612ea4565b91506114b182611362565b8382815181106114c3576114c3612e75565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff821661151457348382815181106114fc576114fc612e75565b602002602001018181516115109190612e62565b9052505b600101611469565b509095945050505050565b60005b8181101561116857600083838381811061154657611546612e75565b90506020028101906115589190613002565b611561906131f7565b90508060c001511561157f5761157f816040015182608001516111ec565b5060010161152a565b83838383826001811461185557600085856115a4600185612e62565b8181106115b3576115b3612e75565b90506020028101906115c59190613002565b6115d6906080810190606001612ea4565b9050600089815b8181101561178157368d8d838181106115f8576115f8612e75565b905060200281019061160a9190613002565b905061163961161f6060830160408401612ea4565b73ffffffffffffffffffffffffffffffffffffffff161590565b8061169c575061169c6116526040830160208401612ea4565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b80156116b357506116b36116526020830183612ea4565b801561173857506117386116ca60a083018361329c565b6116d991600491600091613301565b6116e29161332b565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b61176e576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6117788f82611ef8565b506001016115dd565b505060005b611791600185612e62565b81101561184d5760008888838181106117ac576117ac612e75565b90506020028101906117be9190613002565b6117cf906080810190606001612ea4565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146118445785828151811061181657611816612e75565b602002602001015161182782611362565b6118319190612e62565b9250821561184457611844818885611141565b50600101611786565b50505061192e565b8760005b8181101561192b57368b8b8381811061187457611874612e75565b90506020028101906118869190613002565b905061189b61161f6060830160408401612ea4565b806118b457506118b46116526040830160208401612ea4565b80156118cb57506118cb6116526020830183612ea4565b80156118e257506118e26116ca60a083018361329c565b611918576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6119228d82611ef8565b50600101611859565b50505b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff831661195a57505050565b73ffffffffffffffffffffffffffffffffffffffff82166119a7576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff83811660248301526000919085169063dd62ed3e90604401602060405180830381865afa158015611a1d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a4191906131de565b905081811015611a7f57611a7f8484611a7a847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff612e62565b61220e565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8316611ad2576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015611b3f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611b6391906131de565b905080821115611ba9576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610dde565b611a7f84848461238a565b73ffffffffffffffffffffffffffffffffffffffff8216611c01576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b47811115611c44576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101829052476024820152604401610dde565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114611c9e576040519150601f19603f3d011682016040523d82523d6000602084013e611ca3565b606091505b5050905080611168576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8416611d2b576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216611d78576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015611de9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611e0d91906131de565b9050611e1b828686866123e0565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015611e8b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611eaf91906131de565b611eb99190612e62565b14611ef0576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b611f0e611f086020830183612ea4565b3b151590565b611f44576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101356000819003611f84576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000611f9961161f6060850160408601612ea4565b611fa4576000611faa565b82608001355b90506000611fc6611fc16060860160408701612ea4565b611362565b90506000611fdd611fc16080870160608801612ea4565b90508260000361201457612014611ffa6060870160408801612ea4565b61200a6040880160208901612ea4565b876080013561193a565b846080013582101561205f576040517fcf4791810000000000000000000000000000000000000000000000000000000081526080860135600482015260248101839052604401610dde565b60008061206f6020880188612ea4565b73ffffffffffffffffffffffffffffffffffffffff168561209360a08a018a61329c565b6040516120a1929190613373565b60006040518083038185875af1925050503d80600081146120de576040519150601f19603f3d011682016040523d82523d6000602084013e6120e3565b606091505b50915091508161212e5760006120f88261243e565b9050806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610dde9190613383565b6000612143611fc160808a0160608b01612ea4565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388961217460208b018b612ea4565b61218460608c0160408d01612ea4565b61219460808d0160608e01612ea4565b8c608001358987116121a657866121b0565b6121b08a88612e62565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8381166024830152600091839186169063dd62ed3e90604401602060405180830381865afa158015612285573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906122a991906131de565b6122b39190613396565b60405173ffffffffffffffffffffffffffffffffffffffff8516602482015260448101829052909150611a7f9085907f095ea7b300000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff00000000000000000000000000000000000000000000000000000000909316929092179091526124bc565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526111689084907fa9059cbb0000000000000000000000000000000000000000000000000000000090606401612308565b60405173ffffffffffffffffffffffffffffffffffffffff80851660248301528316604482015260648101829052611a7f9085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401612308565b606060448251101561248357505060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c79000000602082015290565b600061249f60048085516124979190612e62565b8591906125c8565b9050808060200190518101906124b591906133a9565b9392505050565b600061251e826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166126e29092919063ffffffff16565b805190915015611168578080602001905181019061253c9190613040565b611168576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610dde565b6060816125d681601f613396565b101561260e576040517f47aaf07a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6126188284613396565b84511015612652576040517f3b99b53d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60608215801561267157604051915060008252602082016040526126d9565b6040519150601f8416801560200281840101858101878315602002848b0101015b818310156126aa578051835260209283019201612692565b5050858452601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016604052505b50949350505050565b60606126f184846000856126f9565b949350505050565b60608247101561278b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610dde565b73ffffffffffffffffffffffffffffffffffffffff85163b612809576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610dde565b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516128329190613420565b60006040518083038185875af1925050503d806000811461286f576040519150601f19603f3d011682016040523d82523d6000602084013e612874565b606091505b509150915061288482828661288f565b979650505050505050565b6060831561289e5750816124b5565b8251156128ae5782518084602001fd5b816040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610dde9190613383565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff81118282101715612935576129356128e2565b60405290565b60405160e0810167ffffffffffffffff81118282101715612935576129356128e2565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff811182821017156129a5576129a56128e2565b604052919050565b600067ffffffffffffffff8211156129c7576129c76128e2565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600082601f830112612a0457600080fd5b8135612a17612a12826129ad565b61295e565b818152846020838601011115612a2c57600080fd5b816020850160208301376000918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114612a6d57600080fd5b919050565b8015158114612a8057600080fd5b50565b8035612a6d81612a72565b60006101408284031215612aa157600080fd5b612aa9612911565b905081358152602082013567ffffffffffffffff80821115612aca57600080fd5b612ad6858386016129f3565b60208401526040840135915080821115612aef57600080fd5b50612afc848285016129f3565b604083015250612b0e60608301612a49565b6060820152612b1f60808301612a49565b6080820152612b3060a08301612a49565b60a082015260c082013560c082015260e082013560e0820152610100612b57818401612a83565b90820152610120612b69838201612a83565b9082015292915050565b60008083601f840112612b8557600080fd5b50813567ffffffffffffffff811115612b9d57600080fd5b6020830191508360208260051b8501011115612bb857600080fd5b9250929050565b600060208284031215612bd157600080fd5b6040516020810181811067ffffffffffffffff82111715612bf457612bf46128e2565b604052905080612c0383612a49565b905292915050565b60008060008060608587031215612c2157600080fd5b843567ffffffffffffffff80821115612c3957600080fd5b612c4588838901612a8e565b95506020870135915080821115612c5b57600080fd5b50612c6887828801612b73565b9094509250612c7c90508660408701612bbf565b905092959194509250565b60008060208385031215612c9a57600080fd5b823567ffffffffffffffff80821115612cb257600080fd5b818501915085601f830112612cc657600080fd5b813581811115612cd557600080fd5b8660208260061b8501011115612cea57600080fd5b60209290920196919550909350505050565b60008060008060408587031215612d1257600080fd5b843567ffffffffffffffff80821115612d2a57600080fd5b612d3688838901612b73565b90965094506020870135915080821115612d4f57600080fd5b50612d5c87828801612b73565b95989497509550505050565b600080600060408486031215612d7d57600080fd5b612d8684612a49565b9250602084013567ffffffffffffffff811115612da257600080fd5b612dae86828701612b73565b9497909650939450505050565b6000808284036040811215612dcf57600080fd5b833567ffffffffffffffff811115612de657600080fd5b612df286828701612a8e565b93505060207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe082011215612e2557600080fd5b506020830190509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b8181038181111561141557611415612e33565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600060208284031215612eb657600080fd5b6124b582612a49565b6020808252818101839052600090604080840186845b87811015612f215773ffffffffffffffffffffffffffffffffffffffff80612efc84612a49565b16845280612f0b878501612a49565b1684870152509183019190830190600101612ed5565b5090979650505050505050565b600060208284031215612f4057600080fd5b81356124b581612a72565b6040808252810184905260008560608301825b87811015612f995773ffffffffffffffffffffffffffffffffffffffff612f8484612a49565b16825260209283019290910190600101612f5e565b5083810360208581019190915285825291508590820160005b86811015612fd9578235612fc581612a72565b151582529183019190830190600101612fb2565b5098975050505050505050565b600060208284031215612ff857600080fd5b6124b58383612bbf565b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2183360301811261303657600080fd5b9190910192915050565b60006020828403121561305257600080fd5b81516124b581612a72565b60005b83811015613078578181015183820152602001613060565b50506000910152565b6000815180845261309981602086016020860161305d565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815281516020820152600060208301516101408060408501526130f4610160850183613081565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe085840301606086015261312f8382613081565b9250506060850151613159608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206131cc8187018315159052565b90950151151593019290925250919050565b6000602082840312156131f057600080fd5b5051919050565b600060e0823603121561320957600080fd5b61321161293b565b61321a83612a49565b815261322860208401612a49565b602082015261323960408401612a49565b604082015261324a60608401612a49565b60608201526080830135608082015260a083013567ffffffffffffffff81111561327357600080fd5b61327f368286016129f3565b60a08301525061329160c08401612a83565b60c082015292915050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126132d157600080fd5b83018035915067ffffffffffffffff8211156132ec57600080fd5b602001915036819003821315612bb857600080fd5b6000808585111561331157600080fd5b8386111561331e57600080fd5b5050820193919092039150565b7fffffffff00000000000000000000000000000000000000000000000000000000813581811691600485101561336b5780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b6020815260006124b56020830184613081565b8082018082111561141557611415612e33565b6000602082840312156133bb57600080fd5b815167ffffffffffffffff8111156133d257600080fd5b8201601f810184136133e357600080fd5b80516133f1612a12826129ad565b81815285602083850101111561340657600080fd5b61341782602083016020860161305d565b95945050505050565b6000825161303681846020870161305d56fea26469706673582212207bcc6409f61d036efa0a5fb8b9eb9d51cd56a0d919c3a5bcb28feeb3c4e21ea664736f6c63430008110033a264697066735822122063bc3019aef1b091850e8d57ea2319be0f1813ce543978c58b972cd4f0ef6be964736f6c634300081100330000000000000000000000007109709ecfa91a80626ff3989d68f67f5b1dd12d";
var isSuperArgs = function (xs) { return xs.length > 1; };
var DeployScript__factory = /** @class */ (function (_super) {
    __extends(DeployScript__factory, _super);
    function DeployScript__factory() {
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
    DeployScript__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    DeployScript__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    DeployScript__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    DeployScript__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    DeployScript__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    DeployScript__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    DeployScript__factory.bytecode = _bytecode;
    DeployScript__factory.abi = _abi;
    return DeployScript__factory;
}(ethers_1.ContractFactory));
exports.DeployScript__factory = DeployScript__factory;
