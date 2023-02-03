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
                internalType: "contract NXTPFacet",
                name: "deployed",
                type: "address",
            },
            {
                internalType: "bytes",
                name: "constructorArgs",
                type: "bytes",
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
var _bytecode = "0x60806040526000805460ff191660011790553480156200001e57600080fd5b50604080518082018252600981526813961514119858d95d60ba1b60208201529051634bca482160e11b815260008051602062004335833981519152906397949042906200008e906004016020808252600b908201526a505249564154455f4b455960a81b604082015260600190565b6020604051808303816000875af1158015620000ae573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000d491906200057d565b60018190556040516001625e79b760e01b031981526004810191909152600080516020620043358339815191529063ffa18649906024016020604051808303816000875af11580156200012b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000151919062000597565b600280546001600160a01b0319166001600160a01b039290921691909117905560405163350d56bf60e01b815260206004820152601760248201527f435245415445335f464143544f52595f414444524553530000000000000000006044820152600090600080516020620043358339815191529063350d56bf906064016020604051808303816000875af1158015620001ef573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000215919062000597565b60405163f877cb1960e01b8152909150600090600080516020620043358339815191529063f877cb1990620002659060040160208082526004908201526314d0531560e21b604082015260600190565b6000604051808303816000875af115801562000285573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052620002af919081019062000605565b90507f885cb69240a935d632d79c317109709ecfa91a80626ff3989d68f67f5b1dd12d60001c60601b60601c6001600160a01b031663d930a0e66040518163ffffffff1660e01b81526004016000604051808303816000875af11580156200031b573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405262000345919081019062000605565b6006906200035490826200074c565b5060405163f877cb1960e01b81526020600482015260076024820152664e4554574f524b60c81b6044820152600080516020620043358339815191529063f877cb19906064016000604051808303816000875af1158015620003ba573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052620003e4919081019062000605565b600790620003f390826200074c565b5060405163f877cb1960e01b815260206004820152600b60248201526a08c92988abea6aa8c8c92b60ab1b6044820152600080516020620043358339815191529063f877cb19906064016000604051808303816000875af11580156200045d573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405262000487919081019062000605565b6008906200049690826200074c565b508083604051602001620004ac92919062000818565b60408051808303601f190181529082905280516020909101206005819055600480546001600160a01b0319166001600160a01b03868116918217835560025463143c711960e21b865216918401919091526024830191909152906350f1c46490604401602060405180830381865afa1580156200052d573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000553919062000597565b600380546001600160a01b0319166001600160a01b0392909216919091179055506200084b915050565b6000602082840312156200059057600080fd5b5051919050565b600060208284031215620005aa57600080fd5b81516001600160a01b0381168114620005c257600080fd5b9392505050565b634e487b7160e01b600052604160045260246000fd5b60005b83811015620005fc578181015183820152602001620005e2565b50506000910152565b6000602082840312156200061857600080fd5b81516001600160401b03808211156200063057600080fd5b818401915084601f8301126200064557600080fd5b8151818111156200065a576200065a620005c9565b604051601f8201601f19908116603f01168101908382118183101715620006855762000685620005c9565b816040528281528760208487010111156200069f57600080fd5b620006b2836020830160208801620005df565b979650505050505050565b600181811c90821680620006d257607f821691505b602082108103620006f357634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200074757600081815260208120601f850160051c81016020861015620007225750805b601f850160051c820191505b8181101562000743578281556001016200072e565b5050505b505050565b81516001600160401b03811115620007685762000768620005c9565b6200078081620007798454620006bd565b84620006f9565b602080601f831160018114620007b857600084156200079f5750858301515b600019600386901b1c1916600185901b17855562000743565b600085815260208120601f198616915b82811015620007e957888601518255948401946001909101908401620007c8565b5085821015620008085787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b600083516200082c818460208801620005df565b83519083019062000842818360208801620005df565b01949350505050565b613ada806200085b6000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80633a76846314610046578063c04062261461008b578063f8ccbf47146100a1575b600080fd5b610061737109709ecfa91a80626ff3989d68f67f5b1dd12d81565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b6100936100be565b6040516100829291906106a5565b6000546100ae9060ff1681565b6040519015158152602001610082565b6000606060007f885cb69240a935d632d79c317109709ecfa91a80626ff3989d68f67f5b1dd12d60001c60601b60601c73ffffffffffffffffffffffffffffffffffffffff1663d930a0e66040518163ffffffff1660e01b81526004016000604051808303816000875af115801561013a573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610180919081019061079d565b60405160200161019091906107e6565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152908290527f60f9bb110000000000000000000000000000000000000000000000000000000082529150600090737109709ecfa91a80626ff3989d68f67f5b1dd12d906360f9bb1190610211908590600401610827565b6000604051808303816000875af1158015610230573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610276919081019061079d565b905060006102c4600760405160200161028f919061083a565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190528390610556565b6040805173ffffffffffffffffffffffffffffffffffffffff8316602082015291925001604080518083037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0018152908290526001547fce817d4700000000000000000000000000000000000000000000000000000000835260048301529450737109709ecfa91a80626ff3989d68f67f5b1dd12d9063ce817d4790602401600060405180830381600087803b15801561037d57600080fd5b505af1158015610391573d6000803e3d6000fd5b505050506103b760035473ffffffffffffffffffffffffffffffffffffffff163b151590565b156103de57505060035473ffffffffffffffffffffffffffffffffffffffff169391925050565b60045460055460405173ffffffffffffffffffffffffffffffffffffffff9092169163cdcb760a91906104136020820161062a565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe082820381018352601f90910116604081905261045591908990602001610967565b6040516020818303038152906040526040518363ffffffff1660e01b8152600401610481929190610996565b6020604051808303816000875af11580156104a0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104c491906109d4565b94507f885cb69240a935d632d79c317109709ecfa91a80626ff3989d68f67f5b1dd12d60001c60601b60601c73ffffffffffffffffffffffffffffffffffffffff166376eadd366040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561053757600080fd5b505af115801561054b573d6000803e3d6000fd5b505050505050509091565b6040517f85940ef1000000000000000000000000000000000000000000000000000000008152600090737109709ecfa91a80626ff3989d68f67f5b1dd12d906385940ef1906105ab90869086906004016109f1565b6000604051808303816000875af11580156105ca573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610610919081019061079d565b80602001905181019061062391906109d4565b9392505050565b61308580610a2083390190565b60005b8381101561065257818101518382015260200161063a565b50506000910152565b60008151808452610673816020860160208601610637565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b73ffffffffffffffffffffffffffffffffffffffff831681526040602082015260006106d4604083018461065b565b949350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600067ffffffffffffffff80841115610726576107266106dc565b604051601f85017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810190828211818310171561076c5761076c6106dc565b8160405280935085815286868601111561078557600080fd5b610793866020830187610637565b5050509392505050565b6000602082840312156107af57600080fd5b815167ffffffffffffffff8111156107c657600080fd5b8201601f810184136107d757600080fd5b6106d48482516020840161070b565b600082516107f8818460208701610637565b7f2f636f6e6669672f6e7874702e6a736f6e000000000000000000000000000000920191825250601101919050565b602081526000610623602083018461065b565b7f2e00000000000000000000000000000000000000000000000000000000000000815260006001600084548181841c90508382168061087a57607f821691505b602080831082036108b2577f4e487b710000000000000000000000000000000000000000000000000000000085526022600452602485fd5b8180156108c657600181146108fd5761092e565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff008516878a01528684151585028a0101955061092e565b60008a81526020902060005b858110156109245781548b82018a0152908801908301610909565b505086848a010195505b505050505061095c817f2e74784d616e61676572416464726573730000000000000000000000000000009052565b601101949350505050565b60008351610979818460208801610637565b83519083019061098d818360208801610637565b01949350505050565b8281526040602082015260006106d4604083018461065b565b73ffffffffffffffffffffffffffffffffffffffff811681146109d157600080fd5b50565b6000602082840312156109e657600080fd5b8151610623816109af565b604081526000610a04604083018561065b565b8281036020840152610a16818561065b565b9594505050505056fe60a06040523480156200001157600080fd5b506040516200308538038062003085833981016040819052620000349162000046565b6001600160a01b031660805262000078565b6000602082840312156200005957600080fd5b81516001600160a01b03811681146200007157600080fd5b9392505050565b608051612fea6200009b6000396000818161084a015261091a0152612fea6000f3fe6080604052600436106100295760003560e01c80639c70d7e61461002e578063c9fb76b114610043575b600080fd5b61004161003c3660046124b5565b610056565b005b610041610051366004612574565b6102c4565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100d1576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006100e23447612607565b905086806101000151610121576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b876101448160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561017b576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036101b9576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036101f6576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610120890151151561021461020a886126ff565b6040015151151590565b15151461024d576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610257868a610525565b61026c89600001518a60c001518a8a336106f4565b60c08a01526102838961027e886126ff565b610837565b5047905060008282116102975760006102a1565b6102a18383612607565b905080156102b5576102b560008583610a6f565b50506000909255505050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0161033f576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006103503447612607565b90508480610100015115610390576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b856103b38160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156103ea576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c00151600003610428576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610465576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610120870151151561047961020a886126ff565b1515146104b2576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6104bc8688610525565b6104d96104cf60a08801608089016127d8565b8860c00151610aa5565b6104e68761027e886126ff565b5047905060008282116104fa576000610504565b6105048383612607565b905080156105185761051860008583610a6f565b5050600090925550505050565b806080015173ffffffffffffffffffffffffffffffffffffffff1682608001602081019061055391906127d8565b73ffffffffffffffffffffffffffffffffffffffff16146105d5576040517f90d4ad8f00000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f73656e64696e674173736574496400000000000000000000000000000000000060448201526064015b60405180910390fd5b60a081015173ffffffffffffffffffffffffffffffffffffffff16610601610100840160e085016127d8565b73ffffffffffffffffffffffffffffffffffffffff161461067e576040517f90d4ad8f00000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f726563656976696e67416464726573730000000000000000000000000000000060448201526064016105cc565b8060e00151826101400135146106f0576040517f90d4ad8f00000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f726563656976696e67436861696e49640000000000000000000000000000000060448201526064016105cc565b5050565b600082808203610730576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000858561073f600185612607565b81811061074e5761074e6127f5565b90506020028101906107609190612824565b6107719060808101906060016127d8565b9050600061077e82610c17565b905073ffffffffffffffffffffffffffffffffffffffff82166107a8576107a53482612607565b90505b60006107b48888610cd0565b90506107c08888610ddc565b6107cd8a89898985610e3d565b6000826107d985610c17565b6107e39190612607565b905089811015610829576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044016105cc565b9a9950505050505050505050565b80516080015160c083015161086f9082907f0000000000000000000000000000000000000000000000000000000000000000906111ef565b815160c081015160e09091015173ffffffffffffffffffffffffffffffffffffffff82166108c9576040517fd7a2b02200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8116610916576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663d94593726109728373ffffffffffffffffffffffffffffffffffffffff161590565b61097d576000610983565b8460c001515b6040518060e00160405280866000015181526020018760c001518152602001866020015181526020018660400151815260200186606001518152602001866080015181526020018660a001518152506040518363ffffffff1660e01b81526004016109ee9190612a50565b6102006040518083038185885af1158015610a0d573d6000803e3d6000fd5b50505050506040513d601f19601f82011682018060405250810190610a329190612b24565b507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f183604051610a629190612c29565b60405180910390a1505050565b73ffffffffffffffffffffffffffffffffffffffff831615610a9b57610a9683838361133a565b505050565b610a968282611469565b73ffffffffffffffffffffffffffffffffffffffff8216610afa57803410156106f0576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b80600003610b34576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa158015610ba1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bc59190612d3c565b905081811015610c0b576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044016105cc565b610a9683333085611593565b600073ffffffffffffffffffffffffffffffffffffffff821615610cc8576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610c9f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cc39190612d3c565b610cca565b475b92915050565b60608160008167ffffffffffffffff811115610cee57610cee612197565b604051908082528060200260200182016040528015610d17578160200160208202803683370190505b5090506000805b83811015610dd157868682818110610d3857610d386127f5565b9050602002810190610d4a9190612824565b610d5b9060808101906060016127d8565b9150610d6682610c17565b838281518110610d7857610d786127f5565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610dc95734838281518110610db157610db16127f5565b60200260200101818151610dc59190612607565b9052505b600101610d1e565b509095945050505050565b60005b81811015610a96576000838383818110610dfb57610dfb6127f5565b9050602002810190610e0d9190612824565b610e1690612d55565b90508060c0015115610e3457610e3481604001518260800151610aa5565b50600101610ddf565b83838383826001811461110a5760008585610e59600185612607565b818110610e6857610e686127f5565b9050602002810190610e7a9190612824565b610e8b9060808101906060016127d8565b9050600089815b8181101561103657368d8d83818110610ead57610ead6127f5565b9050602002810190610ebf9190612824565b9050610eee610ed460608301604084016127d8565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610f515750610f51610f0760408301602084016127d8565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610f685750610f68610f0760208301836127d8565b8015610fed5750610fed610f7f60a0830183612dfa565b610f8e91600491600091612e66565b610f9791612e90565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b611023576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61102d8f826117ad565b50600101610e92565b505060005b611046600185612607565b811015611102576000888883818110611061576110616127f5565b90506020028101906110739190612824565b6110849060808101906060016127d8565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146110f9578582815181106110cb576110cb6127f5565b60200260200101516110dc82610c17565b6110e69190612607565b925082156110f9576110f9818885610a6f565b5060010161103b565b5050506111e3565b8760005b818110156111e057368b8b83818110611129576111296127f5565b905060200281019061113b9190612824565b9050611150610ed460608301604084016127d8565b806111695750611169610f0760408301602084016127d8565b80156111805750611180610f0760208301836127d8565b80156111975750611197610f7f60a0830183612dfa565b6111cd576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6111d78d826117ad565b5060010161110e565b50505b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff831661120f57505050565b73ffffffffffffffffffffffffffffffffffffffff821661125c576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff83811660248301526000919085169063dd62ed3e90604401602060405180830381865afa1580156112d2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112f69190612d3c565b90508181101561133457611334848461132f847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff612607565b611ac3565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8316611387576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa1580156113f4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114189190612d3c565b90508082111561145e576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044016105cc565b611334848484611c3f565b73ffffffffffffffffffffffffffffffffffffffff82166114b6576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b478111156114f9576040517fcf479181000000000000000000000000000000000000000000000000000000008152600481018290524760248201526044016105cc565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114611553576040519150601f19603f3d011682016040523d82523d6000602084013e611558565b606091505b5050905080610a96576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff84166115e0576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661162d576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa15801561169e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116c29190612d3c565b90506116d082868686611c95565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015611740573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117649190612d3c565b61176e9190612607565b146117a5576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b6117c36117bd60208301836127d8565b3b151590565b6117f9576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101356000819003611839576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600061184e610ed460608501604086016127d8565b61185957600061185f565b82608001355b9050600061187b61187660608601604087016127d8565b610c17565b9050600061189261187660808701606088016127d8565b9050826000036118c9576118c96118af60608701604088016127d8565b6118bf60408801602089016127d8565b87608001356111ef565b8460800135821015611914576040517fcf47918100000000000000000000000000000000000000000000000000000000815260808601356004820152602481018390526044016105cc565b60008061192460208801886127d8565b73ffffffffffffffffffffffffffffffffffffffff168561194860a08a018a612dfa565b604051611956929190612ed8565b60006040518083038185875af1925050503d8060008114611993576040519150601f19603f3d011682016040523d82523d6000602084013e611998565b606091505b5091509150816119e35760006119ad82611cf3565b9050806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105cc9190612ee8565b60006119f861187660808a0160608b016127d8565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b3889611a2960208b018b6127d8565b611a3960608c0160408d016127d8565b611a4960808d0160608e016127d8565b8c60800135898711611a5b5786611a65565b611a658a88612607565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8381166024830152600091839186169063dd62ed3e90604401602060405180830381865afa158015611b3a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611b5e9190612d3c565b611b689190612efb565b60405173ffffffffffffffffffffffffffffffffffffffff85166024820152604481018290529091506113349085907f095ea7b300000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611d71565b60405173ffffffffffffffffffffffffffffffffffffffff8316602482015260448101829052610a969084907fa9059cbb0000000000000000000000000000000000000000000000000000000090606401611bbd565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526113349085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401611bbd565b6060604482511015611d3857505060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c79000000602082015290565b6000611d546004808551611d4c9190612607565b859190611e7d565b905080806020019051810190611d6a9190612f0e565b9392505050565b6000611dd3826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611f979092919063ffffffff16565b805190915015610a965780806020019051810190611df19190612f85565b610a96576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084016105cc565b606081611e8b81601f612efb565b1015611ec3576040517f47aaf07a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611ecd8284612efb565b84511015611f07576040517f3b99b53d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b606082158015611f265760405191506000825260208201604052611f8e565b6040519150601f8416801560200281840101858101878315602002848b0101015b81831015611f5f578051835260209283019201611f47565b5050858452601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016604052505b50949350505050565b6060611fa68484600085611fae565b949350505050565b606082471015612040576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c000000000000000000000000000000000000000000000000000060648201526084016105cc565b73ffffffffffffffffffffffffffffffffffffffff85163b6120be576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016105cc565b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516120e79190612fa2565b60006040518083038185875af1925050503d8060008114612124576040519150601f19603f3d011682016040523d82523d6000602084013e612129565b606091505b5091509150612139828286612144565b979650505050505050565b60608315612153575081611d6a565b8251156121635782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105cc9190612ee8565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff811182821017156121ea576121ea612197565b60405290565b6040516101a0810167ffffffffffffffff811182821017156121ea576121ea612197565b60405160c0810167ffffffffffffffff811182821017156121ea576121ea612197565b604051610200810167ffffffffffffffff811182821017156121ea576121ea612197565b60405160e0810167ffffffffffffffff811182821017156121ea576121ea612197565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff811182821017156122c5576122c5612197565b604052919050565b600067ffffffffffffffff8211156122e7576122e7612197565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600082601f83011261232457600080fd5b8135612337612332826122cd565b61227e565b81815284602083860101111561234c57600080fd5b816020850160208301376000918101602001919091529392505050565b73ffffffffffffffffffffffffffffffffffffffff8116811461238b57600080fd5b50565b803561239981612369565b919050565b801515811461238b57600080fd5b80356123998161239e565b600061014082840312156123ca57600080fd5b6123d26121c6565b905081358152602082013567ffffffffffffffff808211156123f357600080fd5b6123ff85838601612313565b6020840152604084013591508082111561241857600080fd5b5061242584828501612313565b6040830152506124376060830161238e565b60608201526124486080830161238e565b608082015261245960a0830161238e565b60a082015260c082013560c082015260e082013560e08201526101006124808184016123ac565b908201526101206124928382016123ac565b9082015292915050565b600061024082840312156124af57600080fd5b50919050565b600080600080606085870312156124cb57600080fd5b843567ffffffffffffffff808211156124e357600080fd5b6124ef888389016123b7565b9550602087013591508082111561250557600080fd5b818701915087601f83011261251957600080fd5b81358181111561252857600080fd5b8860208260051b850101111561253d57600080fd5b60208301955080945050604087013591508082111561255b57600080fd5b506125688782880161249c565b91505092959194509250565b6000806040838503121561258757600080fd5b823567ffffffffffffffff8082111561259f57600080fd5b6125ab868387016123b7565b935060208501359150808211156125c157600080fd5b506125ce8582860161249c565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b81810381811115610cca57610cca6125d8565b60006101a0828403121561262d57600080fd5b6126356121f0565b90506126408261238e565b815261264e6020830161238e565b602082015261265f6040830161238e565b60408201526126706060830161238e565b60608201526126816080830161238e565b608082015261269260a0830161238e565b60a08201526126a360c0830161238e565b60c08201526126b460e0830161238e565b60e08201526101006126c781840161238e565b908201526101208281013590820152610140808301359082015261016080830135908201526101809182013591810191909152919050565b6000610240823603121561271257600080fd5b61271a612214565b612724368461261a565b81526101a083013560208201526101c083013567ffffffffffffffff8082111561274d57600080fd5b61275936838701612313565b60408401526101e085013591508082111561277357600080fd5b61277f36838701612313565b606084015261020085013591508082111561279957600080fd5b6127a536838701612313565b60808401526102208501359150808211156127bf57600080fd5b506127cc36828601612313565b60a08301525092915050565b6000602082840312156127ea57600080fd5b8135611d6a81612369565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2183360301811261285857600080fd5b9190910192915050565b805173ffffffffffffffffffffffffffffffffffffffff16825260208101516128a3602084018273ffffffffffffffffffffffffffffffffffffffff169052565b5060408101516128cb604084018273ffffffffffffffffffffffffffffffffffffffff169052565b5060608101516128f3606084018273ffffffffffffffffffffffffffffffffffffffff169052565b50608081015161291b608084018273ffffffffffffffffffffffffffffffffffffffff169052565b5060a081015161294360a084018273ffffffffffffffffffffffffffffffffffffffff169052565b5060c081015161296b60c084018273ffffffffffffffffffffffffffffffffffffffff169052565b5060e081015161299360e084018273ffffffffffffffffffffffffffffffffffffffff169052565b506101008181015173ffffffffffffffffffffffffffffffffffffffff169083015261012080820151908301526101408082015190830152610160808201519083015261018090810151910152565b60005b838110156129fd5781810151838201526020016129e5565b50506000910152565b60008151808452612a1e8160208601602086016129e2565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b60208152612a62602082018351612862565b60208201516101c082015260408201516101e08201526000606083015161026080610200850152612a97610280850183612a06565b915060808501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08086850301610220870152612ad48483612a06565b935060a087015191508086850301610240870152612af28483612a06565b935060c0870151915080868503018387015250612b0f8382612a06565b9695505050505050565b805161239981612369565b60006102008284031215612b3757600080fd5b612b3f612237565b612b4883612b19565b8152612b5660208401612b19565b6020820152612b6760408401612b19565b6040820152612b7860608401612b19565b6060820152612b8960808401612b19565b6080820152612b9a60a08401612b19565b60a0820152612bab60c08401612b19565b60c0820152612bbc60e08401612b19565b60e0820152610100612bcf818501612b19565b9082015261012083810151908201526101408084015190820152610160808401519082015261018080840151908201526101a080840151908201526101c080840151908201526101e0928301519281019290925250919050565b602081528151602082015260006020830151610140806040850152612c52610160850183612a06565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0858403016060860152612c8d8382612a06565b9250506060850151612cb7608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e0850151610100818187015280870151915050610120612d2a8187018315159052565b90950151151593019290925250919050565b600060208284031215612d4e57600080fd5b5051919050565b600060e08236031215612d6757600080fd5b612d6f61225b565b612d788361238e565b8152612d866020840161238e565b6020820152612d976040840161238e565b6040820152612da86060840161238e565b60608201526080830135608082015260a083013567ffffffffffffffff811115612dd157600080fd5b612ddd36828601612313565b60a083015250612def60c084016123ac565b60c082015292915050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112612e2f57600080fd5b83018035915067ffffffffffffffff821115612e4a57600080fd5b602001915036819003821315612e5f57600080fd5b9250929050565b60008085851115612e7657600080fd5b83861115612e8357600080fd5b5050820193919092039150565b7fffffffff000000000000000000000000000000000000000000000000000000008135818116916004851015612ed05780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b602081526000611d6a6020830184612a06565b80820180821115610cca57610cca6125d8565b600060208284031215612f2057600080fd5b815167ffffffffffffffff811115612f3757600080fd5b8201601f81018413612f4857600080fd5b8051612f56612332826122cd565b818152856020838501011115612f6b57600080fd5b612f7c8260208301602086016129e2565b95945050505050565b600060208284031215612f9757600080fd5b8151611d6a8161239e565b600082516128588184602087016129e256fea26469706673582212205dcb0f57e9693fa2531361ed5fef4142df90498111497dfe06843f8536b3a88f64736f6c63430008110033a26469706673582212201d89930364f79305117359c9089a13bf77839f41a855145273d1f63b6f02425964736f6c634300081100330000000000000000000000007109709ecfa91a80626ff3989d68f67f5b1dd12d";
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
