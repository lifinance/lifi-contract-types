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
exports.LiFiDiamond__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
var ethers_1 = require("ethers");
var _abi = [
    {
        type: "constructor",
        inputs: [
            {
                name: "_contractOwner",
                type: "address",
                internalType: "address",
            },
            {
                name: "_diamondCutFacet",
                type: "address",
                internalType: "address",
            },
        ],
        stateMutability: "payable",
    },
    {
        type: "fallback",
        stateMutability: "payable",
    },
    {
        type: "receive",
        stateMutability: "payable",
    },
    {
        type: "error",
        name: "CalldataEmptyButInitNotZero",
        inputs: [],
    },
    {
        type: "error",
        name: "FacetAddressIsNotZero",
        inputs: [],
    },
    {
        type: "error",
        name: "FacetAddressIsZero",
        inputs: [],
    },
    {
        type: "error",
        name: "FacetContainsNoCode",
        inputs: [],
    },
    {
        type: "error",
        name: "FunctionAlreadyExists",
        inputs: [],
    },
    {
        type: "error",
        name: "FunctionDoesNotExist",
        inputs: [],
    },
    {
        type: "error",
        name: "FunctionIsImmutable",
        inputs: [],
    },
    {
        type: "error",
        name: "IncorrectFacetCutAction",
        inputs: [],
    },
    {
        type: "error",
        name: "InitReverted",
        inputs: [],
    },
    {
        type: "error",
        name: "InitZeroButCalldataNotEmpty",
        inputs: [],
    },
    {
        type: "error",
        name: "NoSelectorsInFace",
        inputs: [],
    },
];
var _bytecode = "0x60806040526040516200243438038062002434833981016040819052620000269162000d95565b6200003c826200015660201b620000d21760201c565b604080516001808252818301909252600091816020015b60408051606080820183526000808352602083015291810191909152815260200190600190039081620000535750506040805160018082528183019092529192506000919060208083019080368337019050509050631f931c1c60e01b81600081518110620000c657620000c662000dcd565b6001600160e01b031990921660209283029190910182015260408051606081019091526001600160a01b038516815290810160008152602001828152508260008151811062000119576200011962000dcd565b60200260200101819052506200014c82600060405180602001604052806000815250620001da60201b6200018c1760201c565b5050505062000fcc565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c132080546001600160a01b031981166001600160a01b0384811691821790935560405160008051602062002414833981519152939092169182907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3505050565b60005b835181101562000396576000848281518110620001fe57620001fe62000dcd565b60200260200101516020015190506000600281111562000222576200022262000de3565b81600281111562000237576200023762000de3565b0362000295576200028f85838151811062000256576200025662000dcd565b60200260200101516000015186848151811062000277576200027762000dcd565b602002602001015160400151620003e560201b60201c565b6200038c565b6001816002811115620002ac57620002ac62000de3565b0362000304576200028f858381518110620002cb57620002cb62000dcd565b602002602001015160000151868481518110620002ec57620002ec62000dcd565b602002602001015160400151620005c160201b60201c565b60028160028111156200031b576200031b62000de3565b0362000373576200028f8583815181106200033a576200033a62000dcd565b6020026020010151600001518684815181106200035b576200035b62000dcd565b6020026020010151604001516200079560201b60201c565b60405163e548e6b560e01b815260040160405180910390fd5b50600101620001dd565b507f8faa70878671ccd212d20771b795c50af8fd3ff6cf27f4bde57e5d4de0aeb673838383604051620003cc9392919062000e4d565b60405180910390a1620003e0828262000874565b505050565b805160000362000408576040516307bc559560e41b815260040160405180910390fd5b60006000805160206200241483398151915290506200043283620009a460201b6200036d1760201c565b156200045157604051636347641d60e11b815260040160405180910390fd5b6001600160a01b0383166000908152600182016020526040812054906001600160601b03821690036200048a576200048a8285620009b1565b60005b8351811015620005ba576000848281518110620004ae57620004ae62000dcd565b6020908102919091018101516001600160e01b03198116600090815286835260409020549092506001600160a01b031690620004f59082906200036d620009a4821b17901c565b620005135760405163a023275d60e01b815260040160405180910390fd5b6001600160e01b0319821660008181526020878152604080832080546001600160a01b03908116600160a01b6001600160601b038c16021782558c168085526001808c0185529285208054938401815585528385206008840401805463ffffffff60079095166004026101000a948502191660e08a901c94909402939093179092559390925287905281546001600160a01b0319161790555050600191820191016200048d565b5050505050565b8051600003620005e4576040516307bc559560e41b815260040160405180910390fd5b60006000805160206200241483398151915290506200060e83620009a460201b6200036d1760201c565b156200062d57604051636347641d60e11b815260040160405180910390fd5b6001600160a01b0383166000908152600182016020526040812054906001600160601b03821690036200066657620006668285620009b1565b60005b8351811015620005ba5760008482815181106200068a576200068a62000dcd565b6020908102919091018101516001600160e01b031981166000908152918690526040909120549091506001600160a01b039081169087168103620006e15760405163a023275d60e01b815260040160405180910390fd5b620006ee85828462000a04565b6001600160e01b0319821660008181526020878152604080832080546001600160a01b03908116600160a01b6001600160601b038c16021782558c168085526001808c0185529285208054938401815585528385206008840401805463ffffffff60079095166004026101000a948502191660e08a901c94909402939093179092559390925287905281546001600160a01b03191617905550506001918201910162000669565b8051600003620007b8576040516307bc559560e41b815260040160405180910390fd5b6000600080516020620024148339815191529050620007e283620009a460201b6200036d1760201c565b6200080057604051633ce4ef9160e11b815260040160405180910390fd5b60005b82518110156200086e57600083828151811062000824576200082462000dcd565b6020908102919091018101516001600160e01b031981166000908152918590526040909120549091506001600160a01b03166200086384828462000a04565b505060010162000803565b50505050565b6200088a82620009a460201b6200036d1760201c565b15620008b557805115620008b1576040516304c08b4360e51b815260040160405180910390fd5b5050565b8051600003620008d85760405163211002b360e11b815260040160405180910390fd5b6001600160a01b0382163014620008f457620008f48262000d54565b600080836001600160a01b03168360405162000911919062000f54565b600060405180830381855af49150503d80600081146200094e576040519150601f19603f3d011682016040523d82523d6000602084013e62000953565b606091505b5091509150816200086e578051156200098b578060405162461bcd60e51b815260040162000982919062000f72565b60405180910390fd5b60405163c53ebed560e01b815260040160405180910390fd5b6001600160a01b03161590565b620009bc8162000d54565b6002820180546001600160a01b0390921660008181526001948501602090815260408220860185905594840183559182529290200180546001600160a01b0319169091179055565b62000a1a82620009a460201b6200036d1760201c565b1562000a3957604051631535ac5f60e31b815260040160405180910390fd5b306001600160a01b0383160362000a635760405163c3c5ec3760e01b815260040160405180910390fd5b6001600160e01b03198116600090815260208481526040808320546001600160a01b0386168452600180880190935290832054600160a01b9091046001600160601b0316929162000ab49162000f8e565b905080821462000bad576001600160a01b0384166000908152600186016020526040812080548390811062000aed5762000aed62000dcd565b600091825260208083206008830401546001600160a01b038916845260018a019091526040909220805460079092166004026101000a90920460e01b92508291908590811062000b415762000b4162000dcd565b600091825260208083206008830401805463ffffffff60079094166004026101000a938402191660e09590951c929092029390931790556001600160e01b03199290921682528690526040902080546001600160a01b0316600160a01b6001600160601b038516021790555b6001600160a01b0384166000908152600186016020526040902080548062000bd95762000bd962000fb6565b60008281526020808220600860001990940193840401805463ffffffff600460078716026101000a0219169055919092556001600160e01b03198516825286905260408120819055819003620005ba57600285015460009062000c3f9060019062000f8e565b6001600160a01b038616600090815260018089016020526040909120015490915080821462000cf557600087600201838154811062000c825762000c8262000dcd565b6000918252602090912001546002890180546001600160a01b03909216925082918490811062000cb65762000cb662000dcd565b600091825260208083209190910180546001600160a01b0319166001600160a01b03948516179055929091168152600189810190925260409020018190555b8660020180548062000d0b5762000d0b62000fb6565b60008281526020808220830160001990810180546001600160a01b03191690559092019092556001600160a01b0388168252600189810190915260408220015550505050505050565b803b6000819003620008b1576040516271a80360e91b815260040160405180910390fd5b80516001600160a01b038116811462000d9057600080fd5b919050565b6000806040838503121562000da957600080fd5b62000db48362000d78565b915062000dc46020840162000d78565b90509250929050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052602160045260246000fd5b60005b8381101562000e1657818101518382015260200162000dfc565b50506000910152565b6000815180845262000e3981602086016020860162000df9565b601f01601f19169290920160200192915050565b60006060808301818452808751808352608092508286019150828160051b8701016020808b0160005b8481101562000f2257898403607f19018652815180516001600160a01b0316855283810151898601906003811062000ebe57634e487b7160e01b600052602160045260246000fd5b868601526040918201519186018a905281519081905290840190600090898701905b8083101562000f0c5783516001600160e01b031916825292860192600192909201919086019062000ee0565b5097850197955050509082019060010162000e76565b50506001600160a01b038a1690880152868103604088015262000f46818962000e1f565b9a9950505050505050505050565b6000825162000f6881846020870162000df9565b9190910192915050565b60208152600062000f87602083018462000e1f565b9392505050565b8181038181111562000fb057634e487b7160e01b600052601160045260246000fd5b92915050565b634e487b7160e01b600052603160045260246000fd5b6114388062000fdc6000396000f3fe60806040523661000b57005b600080357fffffffff000000000000000000000000000000000000000000000000000000001681527fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c6020819052604090912054819073ffffffffffffffffffffffffffffffffffffffff16806100ae576040517fa9ad62f800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3660008037600080366000845af43d6000803e8080156100cd573d6000f35b3d6000fd5b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c132080547fffffffffffffffffffffffff0000000000000000000000000000000000000000811673ffffffffffffffffffffffffffffffffffffffff8481169182179093556040517fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c939092169182907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3505050565b60005b83518110156103225760008482815181106101ac576101ac611129565b6020026020010151602001519050600060028111156101cd576101cd611158565b8160028111156101df576101df611158565b0361022d576102288583815181106101f9576101f9611129565b60200260200101516000015186848151811061021757610217611129565b602002602001015160400151610387565b610319565b600181600281111561024157610241611158565b0361028a5761022885838151811061025b5761025b611129565b60200260200101516000015186848151811061027957610279611129565b602002602001015160400151610627565b600281600281111561029e5761029e611158565b036102e7576102288583815181106102b8576102b8611129565b6020026020010151600001518684815181106102d6576102d6611129565b6020026020010151604001516108d0565b6040517fe548e6b500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5060010161018f565b507f8faa70878671ccd212d20771b795c50af8fd3ff6cf27f4bde57e5d4de0aeb673838383604051610356939291906111f5565b60405180910390a16103688282610a0c565b505050565b73ffffffffffffffffffffffffffffffffffffffff161590565b80516000036103c2576040517f7bc5595000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c73ffffffffffffffffffffffffffffffffffffffff8316610430576040517fc68ec83a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff83166000908152600182016020526040812054906bffffffffffffffffffffffff82169003610478576104788285610bad565b60005b835181101561062057600084828151811061049857610498611129565b6020908102919091018101517fffffffff00000000000000000000000000000000000000000000000000000000811660009081529186905260409091205490915073ffffffffffffffffffffffffffffffffffffffff168015610527576040517fa023275d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b7fffffffff000000000000000000000000000000000000000000000000000000008216600081815260208781526040808320805473ffffffffffffffffffffffffffffffffffffffff908116740100000000000000000000000000000000000000006bffffffffffffffffffffffff8c16021782558c168085526001808c0185529285208054938401815585528385206008840401805463ffffffff60079095166004026101000a948502191660e08a901c94909402939093179092559390925287905281547fffffffffffffffffffffffff00000000000000000000000000000000000000001617905550506001918201910161047b565b5050505050565b8051600003610662576040517f7bc5595000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c73ffffffffffffffffffffffffffffffffffffffff83166106d0576040517fc68ec83a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff83166000908152600182016020526040812054906bffffffffffffffffffffffff82169003610718576107188285610bad565b60005b835181101561062057600084828151811061073857610738611129565b6020908102919091018101517fffffffff00000000000000000000000000000000000000000000000000000000811660009081529186905260409091205490915073ffffffffffffffffffffffffffffffffffffffff90811690871681036107cc576040517fa023275d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6107d7858284610c23565b7fffffffff000000000000000000000000000000000000000000000000000000008216600081815260208781526040808320805473ffffffffffffffffffffffffffffffffffffffff908116740100000000000000000000000000000000000000006bffffffffffffffffffffffff8c16021782558c168085526001808c0185529285208054938401815585528385206008840401805463ffffffff60079095166004026101000a948502191660e08a901c94909402939093179092559390925287905281547fffffffffffffffffffffffff00000000000000000000000000000000000000001617905550506001918201910161071b565b805160000361090b576040517f7bc5595000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c73ffffffffffffffffffffffffffffffffffffffff83161561097a576040517f79c9df2200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60005b8251811015610a0657600083828151811061099a5761099a611129565b6020908102919091018101517fffffffff00000000000000000000000000000000000000000000000000000000811660009081529185905260409091205490915073ffffffffffffffffffffffffffffffffffffffff166109fc848284610c23565b505060010161097d565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8216610a6457805115610a60576040517f9811686000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b8051600003610a9f576040517f4220056600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82163014610ac557610ac5826110ec565b6000808373ffffffffffffffffffffffffffffffffffffffff1683604051610aed919061135d565b600060405180830381855af49150503d8060008114610b28576040519150601f19603f3d011682016040523d82523d6000602084013e610b2d565b606091505b509150915081610a0657805115610b7b57806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b729190611379565b60405180910390fd5b6040517fc53ebed500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610bb6816110ec565b60028201805473ffffffffffffffffffffffffffffffffffffffff90921660008181526001948501602090815260408220860185905594840183559182529290200180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169091179055565b73ffffffffffffffffffffffffffffffffffffffff8216610c70576040517fa9ad62f800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3073ffffffffffffffffffffffffffffffffffffffff831603610cbf576040517fc3c5ec3700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b7fffffffff0000000000000000000000000000000000000000000000000000000081166000908152602084815260408083205473ffffffffffffffffffffffffffffffffffffffff86168452600180880190935290832054740100000000000000000000000000000000000000009091046bffffffffffffffffffffffff169291610d4991611393565b9050808214610e905773ffffffffffffffffffffffffffffffffffffffff841660009081526001860160205260408120805483908110610d8b57610d8b611129565b6000918252602080832060088304015473ffffffffffffffffffffffffffffffffffffffff8916845260018a019091526040909220805460079092166004026101000a90920460e01b925082919085908110610de957610de9611129565b600091825260208083206008830401805463ffffffff60079094166004026101000a938402191660e09590951c929092029390931790557fffffffff0000000000000000000000000000000000000000000000000000000092909216825286905260409020805473ffffffffffffffffffffffffffffffffffffffff16740100000000000000000000000000000000000000006bffffffffffffffffffffffff8516021790555b73ffffffffffffffffffffffffffffffffffffffff841660009081526001860160205260409020805480610ec657610ec66113d3565b6000828152602080822060087fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff90940193840401805463ffffffff600460078716026101000a0219169055919092557fffffffff000000000000000000000000000000000000000000000000000000008516825286905260408120819055819003610620576002850154600090610f5f90600190611393565b73ffffffffffffffffffffffffffffffffffffffff8616600090815260018089016020526040909120015490915080821461104d576000876002018381548110610fab57610fab611129565b60009182526020909120015460028901805473ffffffffffffffffffffffffffffffffffffffff9092169250829184908110610fe957610fe9611129565b600091825260208083209190910180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff948516179055929091168152600189810190925260409020018190555b86600201805480611060576110606113d3565b6000828152602080822083017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff90810180547fffffffffffffffffffffffff000000000000000000000000000000000000000016905590920190925573ffffffffffffffffffffffffffffffffffffffff88168252600189810190915260408220015550505050505050565b803b6000819003610a60576040517fe350060000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b60005b838110156111a257818101518382015260200161118a565b50506000910152565b600081518084526111c3816020860160208601611187565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b60006060808301818452808751808352608092508286019150828160051b8701016020808b0160005b84811015611320577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff808a8503018652815188850173ffffffffffffffffffffffffffffffffffffffff825116865284820151600381106112a7577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b868601526040918201519186018a905281519081905290840190600090898701905b8083101561130b5783517fffffffff000000000000000000000000000000000000000000000000000000001682529286019260019290920191908601906112c9565b5097850197955050509082019060010161121e565b505073ffffffffffffffffffffffffffffffffffffffff8a1690880152868103604088015261134f81896111ab565b9a9950505050505050505050565b6000825161136f818460208701611187565b9190910192915050565b60208152600061138c60208301846111ab565b9392505050565b818103818111156113cd577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fdfea2646970667358221220208b51c18c0236768ee892b19e3f96f4d3711f2096aa25e5fa9e5483d365038264736f6c63430008110033c8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c";
var isSuperArgs = function (xs) { return xs.length > 1; };
var LiFiDiamond__factory = /** @class */ (function (_super) {
    __extends(LiFiDiamond__factory, _super);
    function LiFiDiamond__factory() {
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
    LiFiDiamond__factory.prototype.deploy = function (_contractOwner, _diamondCutFacet, overrides) {
        return _super.prototype.deploy.call(this, _contractOwner, _diamondCutFacet, overrides || {});
    };
    LiFiDiamond__factory.prototype.getDeployTransaction = function (_contractOwner, _diamondCutFacet, overrides) {
        return _super.prototype.getDeployTransaction.call(this, _contractOwner, _diamondCutFacet, overrides || {});
    };
    LiFiDiamond__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    LiFiDiamond__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    LiFiDiamond__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    LiFiDiamond__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    LiFiDiamond__factory.bytecode = _bytecode;
    LiFiDiamond__factory.abi = _abi;
    return LiFiDiamond__factory;
}(ethers_1.ContractFactory));
exports.LiFiDiamond__factory = LiFiDiamond__factory;
