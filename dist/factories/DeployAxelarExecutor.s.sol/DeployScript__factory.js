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
                internalType: "contract AxelarExecutor",
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
var _bytecode = "0x60806040526000805460ff191660011790553480156200001e57600080fd5b50604080518082018252600e81526d20bc32b630b922bc32b1baba37b960911b60208201529051634bca482160e11b815260008051602062002f038339815191529063979490429062000093906004016020808252600b908201526a505249564154455f4b455960a81b604082015260600190565b6020604051808303816000875af1158015620000b3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000d9919062000582565b60018190556040516001625e79b760e01b03198152600481019190915260008051602062002f038339815191529063ffa18649906024016020604051808303816000875af115801562000130573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200015691906200059c565b600280546001600160a01b0319166001600160a01b039290921691909117905560405163350d56bf60e01b815260206004820152601760248201527f435245415445335f464143544f52595f41444452455353000000000000000000604482015260009060008051602062002f038339815191529063350d56bf906064016020604051808303816000875af1158015620001f4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200021a91906200059c565b60405163f877cb1960e01b815290915060009060008051602062002f038339815191529063f877cb19906200026a9060040160208082526004908201526314d0531560e21b604082015260600190565b6000604051808303816000875af11580156200028a573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052620002b491908101906200060a565b90507f885cb69240a935d632d79c317109709ecfa91a80626ff3989d68f67f5b1dd12d60001c60601b60601c6001600160a01b031663d930a0e66040518163ffffffff1660e01b81526004016000604051808303816000875af115801562000320573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526200034a91908101906200060a565b60069062000359908262000751565b5060405163f877cb1960e01b81526020600482015260076024820152664e4554574f524b60c81b604482015260008051602062002f038339815191529063f877cb19906064016000604051808303816000875af1158015620003bf573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052620003e991908101906200060a565b600790620003f8908262000751565b5060405163f877cb1960e01b815260206004820152600b60248201526a08c92988abea6aa8c8c92b60ab1b604482015260008051602062002f038339815191529063f877cb19906064016000604051808303816000875af115801562000462573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526200048c91908101906200060a565b6008906200049b908262000751565b508083604051602001620004b19291906200081d565b60408051808303601f190181529082905280516020909101206005819055600480546001600160a01b0319166001600160a01b03868116918217835560025463143c711960e21b865216918401919091526024830191909152906350f1c46490604401602060405180830381865afa15801562000532573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200055891906200059c565b600380546001600160a01b0319166001600160a01b03929092169190911790555062000850915050565b6000602082840312156200059557600080fd5b5051919050565b600060208284031215620005af57600080fd5b81516001600160a01b0381168114620005c757600080fd5b9392505050565b634e487b7160e01b600052604160045260246000fd5b60005b8381101562000601578181015183820152602001620005e7565b50506000910152565b6000602082840312156200061d57600080fd5b81516001600160401b03808211156200063557600080fd5b818401915084601f8301126200064a57600080fd5b8151818111156200065f576200065f620005ce565b604051601f8201601f19908116603f011681019083821181831017156200068a576200068a620005ce565b81604052828152876020848701011115620006a457600080fd5b620006b7836020830160208801620005e4565b979650505050505050565b600181811c90821680620006d757607f821691505b602082108103620006f857634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200074c57600081815260208120601f850160051c81016020861015620007275750805b601f850160051c820191505b81811015620007485782815560010162000733565b5050505b505050565b81516001600160401b038111156200076d576200076d620005ce565b62000785816200077e8454620006c2565b84620006fe565b602080601f831160018114620007bd5760008415620007a45750858301515b600019600386901b1c1916600185901b17855562000748565b600085815260208120601f198616915b82811015620007ee57888601518255948401946001909101908401620007cd565b50858210156200080d5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6000835162000831818460208801620005e4565b83519083019062000847818360208801620005e4565b01949350505050565b6126a380620008606000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80633a76846314610046578063c04062261461008b578063f8ccbf47146100a1575b600080fd5b610061737109709ecfa91a80626ff3989d68f67f5b1dd12d81565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b6100936100be565b6040516100829291906106b2565b6000546100ae9060ff1681565b6040519015158152602001610082565b6000606060007f885cb69240a935d632d79c317109709ecfa91a80626ff3989d68f67f5b1dd12d60001c60601b60601c73ffffffffffffffffffffffffffffffffffffffff1663d930a0e66040518163ffffffff1660e01b81526004016000604051808303816000875af115801561013a573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820160405261018091908101906107aa565b60405160200161019091906107f3565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152908290527f60f9bb110000000000000000000000000000000000000000000000000000000082529150600090737109709ecfa91a80626ff3989d68f67f5b1dd12d906360f9bb1190610211908590600401610834565b6000604051808303816000875af1158015610230573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820160405261027691908101906107aa565b905060006102c4600760405160200161028f9190610847565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190528390610563565b6002546040805173ffffffffffffffffffffffffffffffffffffffff928316602082015291831690820152909150606001604080518083037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0018152908290526001547fce817d4700000000000000000000000000000000000000000000000000000000835260048301529450737109709ecfa91a80626ff3989d68f67f5b1dd12d9063ce817d4790602401600060405180830381600087803b15801561038a57600080fd5b505af115801561039e573d6000803e3d6000fd5b505050506103c460035473ffffffffffffffffffffffffffffffffffffffff163b151590565b156103eb57505060035473ffffffffffffffffffffffffffffffffffffffff169391925050565b60045460055460405173ffffffffffffffffffffffffffffffffffffffff9092169163cdcb760a919061042060208201610637565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe082820381018352601f90910116604081905261046291908990602001610974565b6040516020818303038152906040526040518363ffffffff1660e01b815260040161048e9291906109a3565b6020604051808303816000875af11580156104ad573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104d191906109e1565b94507f885cb69240a935d632d79c317109709ecfa91a80626ff3989d68f67f5b1dd12d60001c60601b60601c73ffffffffffffffffffffffffffffffffffffffff166376eadd366040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561054457600080fd5b505af1158015610558573d6000803e3d6000fd5b505050505050509091565b6040517f85940ef1000000000000000000000000000000000000000000000000000000008152600090737109709ecfa91a80626ff3989d68f67f5b1dd12d906385940ef1906105b890869086906004016109fe565b6000604051808303816000875af11580156105d7573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820160405261061d91908101906107aa565b80602001905181019061063091906109e1565b9392505050565b611c4180610a2d83390190565b60005b8381101561065f578181015183820152602001610647565b50506000910152565b60008151808452610680816020860160208601610644565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b73ffffffffffffffffffffffffffffffffffffffff831681526040602082015260006106e16040830184610668565b949350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600067ffffffffffffffff80841115610733576107336106e9565b604051601f85017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f01168101908282118183101715610779576107796106e9565b8160405280935085815286868601111561079257600080fd5b6107a0866020830187610644565b5050509392505050565b6000602082840312156107bc57600080fd5b815167ffffffffffffffff8111156107d357600080fd5b8201601f810184136107e457600080fd5b6106e184825160208401610718565b60008251610805818460208701610644565b7f2f636f6e6669672f6178656c61722e6a736f6e00000000000000000000000000920191825250601301919050565b6020815260006106306020830184610668565b7f2e00000000000000000000000000000000000000000000000000000000000000815260006001600084548181841c90508382168061088757607f821691505b602080831082036108bf577f4e487b710000000000000000000000000000000000000000000000000000000085526022600452602485fd5b8180156108d3576001811461090a5761093b565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff008516878a01528684151585028a0101955061093b565b60008a81526020902060005b858110156109315781548b82018a0152908801908301610916565b505086848a010195505b5050505050610969817f2e676174657761790000000000000000000000000000000000000000000000009052565b600801949350505050565b60008351610986818460208801610644565b83519083019061099a818360208801610644565b01949350505050565b8281526040602082015260006106e16040830184610668565b73ffffffffffffffffffffffffffffffffffffffff811681146109de57600080fd5b50565b6000602082840312156109f357600080fd5b8151610630816109bc565b604081526000610a116040830185610668565b8281036020840152610a238185610668565b9594505050505056fe60806040523480156200001157600080fd5b5060405162001c4138038062001c418339810160408190526200003491620001f8565b600080546001600160a01b0319166001600160a01b038316179055620000616200005b3390565b620000a8565b6200006c82620000fa565b6040516001600160a01b038216907f77113c61b80db60b60930e435e0f6727862501ceee7400d7a765a1dd951b232490600090a2505062000230565b600180546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b620001046200017d565b6001600160a01b0381166200016f5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084015b60405180910390fd5b6200017a81620000a8565b50565b6001546001600160a01b03163314620001d95760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640162000166565b565b80516001600160a01b0381168114620001f357600080fd5b919050565b600080604083850312156200020c57600080fd5b6200021783620001db565b91506200022760208401620001db565b90509250929050565b611a0180620002406000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c8063491606581161005b57806349160658146100f3578063715018a6146101065780638da5cb5b1461010e578063f2fde38b1461012c57600080fd5b8063116191b6146100825780631a98b2e0146100cb578063214ac8d4146100e0575b600080fd5b6000546100a29073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b6100de6100d9366004611558565b61013f565b005b6100de6100ee366004611654565b6102f1565b6100de610101366004611671565b610366565b6100de6104d9565b60015473ffffffffffffffffffffffffffffffffffffffff166100a2565b6100de61013a366004611654565b6104ed565b60008585604051610151929190611715565b6040519081900381206000547f1876eed900000000000000000000000000000000000000000000000000000000835290925073ffffffffffffffffffffffffffffffffffffffff1690631876eed9906101be908e908e908e908e908e9089908d908d908d9060040161176e565b6020604051808303816000875af11580156101dd573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061020191906117cd565b610237576040517f500c44b400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102e48a8a8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050604080516020601f8e018190048102820181019092528c815292508c91508b908190840183828082843760009201919091525050604080516020601f8b018190048102820181019092528981528c93508b9250908a908a90819084018382808284376000920191909152508a92506105a9915050565b5050505050505050505050565b6102f961095a565b600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff8316908117825560405190917f77113c61b80db60b60930e435e0f6727862501ceee7400d7a765a1dd951b232491a250565b60008282604051610378929190611715565b6040519081900381206000547f5f6970c300000000000000000000000000000000000000000000000000000000835290925073ffffffffffffffffffffffffffffffffffffffff1690635f6970c3906103df908b908b908b908b908b9089906004016117ef565b6020604051808303816000875af11580156103fe573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061042291906117cd565b610458576040517f500c44b400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6104cf87878080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050604080516020601f8b0181900481028201810190925289815292508991508890819084018382808284376000920191909152508892508791506109db9050565b5050505050505050565b6104e161095a565b6104eb6000610c66565b565b6104f561095a565b73ffffffffffffffffffffffffffffffffffffffff811661059d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f646472657373000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b6105a681610c66565b50565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610624576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155604080516020601f870181900481028201810190925285815260009161066d91839189908990819084018382808284376000920191909152509293925050610cdd9050565b905060006106b5601488888080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509293925050610cdd9050565b9050600061070860286106c8818a61185f565b8a8a8080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929493925050610d439050565b600080546040517f935b13f6000000000000000000000000000000000000000000000000000000008152929350909173ffffffffffffffffffffffffffffffffffffffff9091169063935b13f690610764908a90600401611896565b602060405180830381865afa158015610781573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107a591906118e7565b60005490915073ffffffffffffffffffffffffffffffffffffffff858116911614806107d05750833b155b156107f3576107ea846107e284611904565b83868a610e5f565b5050505061094e565b61081573ffffffffffffffffffffffffffffffffffffffff8216856000610f1d565b61083673ffffffffffffffffffffffffffffffffffffffff82168588610f1d565b600061085d5a73ffffffffffffffffffffffffffffffffffffffff87169060008087611122565b509050806108845761087a8561087285611904565b84878b610e5f565b505050505061094e565b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff86811660248301526000919084169063dd62ed3e90604401602060405180830381865afa1580156108fa573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061091e9190611954565b905080156109475761094773ffffffffffffffffffffffffffffffffffffffff841686836111ad565b5050505050505b60009055505050505050565b60015473ffffffffffffffffffffffffffffffffffffffff1633146104eb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610594565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610a56576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155604080516020601f8501819004810282018101909252838152600091610a9f91839187908790819084018382808284376000920191909152509293925050610cdd9050565b60005490915073ffffffffffffffffffffffffffffffffffffffff90811690821603610af7576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b803b610b2f576040517f09ee12d500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000610b806014610b40818761185f565b87878080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929493925050610d439050565b90506000610ba95a73ffffffffffffffffffffffffffffffffffffffff85169060008086611122565b50905080610be3576040517facfdb44400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff83167f3efa8a28be57a02aacda95a46a91a4c0607199f0a57d01f4f42f9f39faff244c610c2484611904565b6040517fffffffff00000000000000000000000000000000000000000000000000000000909116815260200160405180910390a2505060009091555050505050565b6001805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6000610cea82601461196d565b83511015610d24576040517f8f95a28a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50818101602001516c0100000000000000000000000090045b92915050565b606081610d5181601f61196d565b1015610d89576040517f47aaf07a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610d93828461196d565b84511015610dcd576040517f3b99b53d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b606082158015610dec5760405191506000825260208201604052610e54565b6040519150601f8416801560200281840101858101878315602002848b0101015b81831015610e25578051835260209283019201610e0d565b5050858452601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016604052505b5090505b9392505050565b604080517fffffffff000000000000000000000000000000000000000000000000000000008616815273ffffffffffffffffffffffffffffffffffffffff84811660208301528716917fcb85a171cc205c04807f94b4de952be30e9acd28e44f63bf7b11bc69741bec83910160405180910390a2610ef573ffffffffffffffffffffffffffffffffffffffff8416866000610f1d565b610f1673ffffffffffffffffffffffffffffffffffffffff841683836111ad565b5050505050565b801580610fbd57506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa158015610f97573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fbb9190611954565b155b611049576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e6365000000000000000000006064820152608401610594565b60405173ffffffffffffffffffffffffffffffffffffffff831660248201526044810182905261111d9084907f095ea7b300000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611203565b505050565b6000606060008060008661ffff1667ffffffffffffffff81111561114857611148611980565b6040519080825280601f01601f191660200182016040528015611172576020820181803683370190505b5090506000808751602089018b8e8ef191503d925086831115611193578692505b828152826000602083013e90999098509650505050505050565b60405173ffffffffffffffffffffffffffffffffffffffff831660248201526044810182905261111d9084907fa9059cbb000000000000000000000000000000000000000000000000000000009060640161109b565b6000611265826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff1661130f9092919063ffffffff16565b80519091501561111d578080602001905181019061128391906117cd565b61111d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610594565b606061131e8484600085611326565b949350505050565b6060824710156113b8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610594565b73ffffffffffffffffffffffffffffffffffffffff85163b611436576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610594565b6000808673ffffffffffffffffffffffffffffffffffffffff16858760405161145f91906119af565b60006040518083038185875af1925050503d806000811461149c576040519150601f19603f3d011682016040523d82523d6000602084013e6114a1565b606091505b50915091506114b18282866114bc565b979650505050505050565b606083156114cb575081610e58565b8251156114db5782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105949190611896565b60008083601f84011261152157600080fd5b50813567ffffffffffffffff81111561153957600080fd5b60208301915083602082850101111561155157600080fd5b9250929050565b60008060008060008060008060008060c08b8d03121561157757600080fd5b8a35995060208b013567ffffffffffffffff8082111561159657600080fd5b6115a28e838f0161150f565b909b50995060408d01359150808211156115bb57600080fd5b6115c78e838f0161150f565b909950975060608d01359150808211156115e057600080fd5b6115ec8e838f0161150f565b909750955060808d013591508082111561160557600080fd5b506116128d828e0161150f565b9150809450508092505060a08b013590509295989b9194979a5092959850565b73ffffffffffffffffffffffffffffffffffffffff811681146105a657600080fd5b60006020828403121561166657600080fd5b8135610e5881611632565b60008060008060008060006080888a03121561168c57600080fd5b87359650602088013567ffffffffffffffff808211156116ab57600080fd5b6116b78b838c0161150f565b909850965060408a01359150808211156116d057600080fd5b6116dc8b838c0161150f565b909650945060608a01359150808211156116f557600080fd5b506117028a828b0161150f565b989b979a50959850939692959293505050565b8183823760009101908152919050565b8183528181602085013750600060208284010152600060207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b89815260c06020820152600061178860c083018a8c611725565b828103604084015261179b81898b611725565b905086606084015282810360808401526117b6818688611725565b9150508260a08301529a9950505050505050505050565b6000602082840312156117df57600080fd5b81518015158114610e5857600080fd5b868152608060208201526000611809608083018789611725565b828103604084015261181c818688611725565b915050826060830152979650505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b81810381811115610d3d57610d3d611830565b60005b8381101561188d578181015183820152602001611875565b50506000910152565b60208152600082518060208401526118b5816040850160208701611872565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169190910160400192915050565b6000602082840312156118f957600080fd5b8151610e5881611632565b6000815160208301517fffffffff000000000000000000000000000000000000000000000000000000008082169350600483101561194c5780818460040360031b1b83161693505b505050919050565b60006020828403121561196657600080fd5b5051919050565b80820180821115610d3d57610d3d611830565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600082516119c1818460208701611872565b919091019291505056fea2646970667358221220e46e79cd43e8fcdac7d99469d8b16049b23a68429af2a9a9c20aeb445efcb01d64736f6c63430008110033a2646970667358221220f39daa945f9af6ce7ea8669a0ee0193fe9186e5cb19e1e3f431e6bbc55dedf8064736f6c634300081100330000000000000000000000007109709ecfa91a80626ff3989d68f67f5b1dd12d";
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
