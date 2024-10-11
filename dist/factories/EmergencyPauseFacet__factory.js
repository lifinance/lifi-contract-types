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
exports.EmergencyPauseFacet__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
var ethers_1 = require("ethers");
var _abi = [
    {
        type: "constructor",
        inputs: [
            {
                name: "_pauserWallet",
                type: "address",
                internalType: "address",
            },
        ],
        stateMutability: "nonpayable",
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
        type: "function",
        name: "pauseDiamond",
        inputs: [],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "pauserWallet",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "address",
                internalType: "address",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "removeFacet",
        inputs: [
            {
                name: "_facetAddress",
                type: "address",
                internalType: "address",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "unpauseDiamond",
        inputs: [
            {
                name: "_blacklist",
                type: "address[]",
                internalType: "address[]",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "event",
        name: "EmergencyFacetRemoved",
        inputs: [
            {
                name: "facetAddress",
                type: "address",
                indexed: true,
                internalType: "address",
            },
            {
                name: "msgSender",
                type: "address",
                indexed: true,
                internalType: "address",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "EmergencyPaused",
        inputs: [
            {
                name: "msgSender",
                type: "address",
                indexed: true,
                internalType: "address",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "EmergencyUnpaused",
        inputs: [
            {
                name: "msgSender",
                type: "address",
                indexed: true,
                internalType: "address",
            },
        ],
        anonymous: false,
    },
    {
        type: "error",
        name: "CalldataEmptyButInitNotZero",
        inputs: [],
    },
    {
        type: "error",
        name: "DiamondIsPaused",
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
        name: "FacetIsNotRegistered",
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
        name: "InvalidCallData",
        inputs: [],
    },
    {
        type: "error",
        name: "NoFacetToPause",
        inputs: [],
    },
    {
        type: "error",
        name: "NoSelectorsInFace",
        inputs: [],
    },
    {
        type: "error",
        name: "OnlyContractOwner",
        inputs: [],
    },
    {
        type: "error",
        name: "UnAuthorized",
        inputs: [],
    },
];
var _bytecode = "0x60c060405234801561001057600080fd5b506040516200240b3803806200240b83398101604081905261003191610046565b6001600160a01b03166080523060a052610076565b60006020828403121561005857600080fd5b81516001600160a01b038116811461006f57600080fd5b9392505050565b60805160a051612354620000b7600039600081816101e60152818161086c015261115201526000818160d001528181610148015261075701526123546000f3fe6080604052600436106100435760003560e01c80630340e9051461007c5780632fc487ae1461009e5780635ad317a4146100be578063f86368ae1461011b5761004a565b3661004a57005b6040517f0149422e00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b34801561008857600080fd5b5061009c610097366004611f6b565b610130565b005b3480156100aa57600080fd5b5061009c6100b9366004611fa8565b61047d565b3480156100ca57600080fd5b506100f27f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b34801561012757600080fd5b5061009c61073f565b3373ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016148015906101ad57507fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c13205473ffffffffffffffffffffffffffffffffffffffff163314155b156101e4576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610269576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff811660009081527fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131d6020908152604080832080548251818502810185019093528083527fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c949383018282801561035557602002820191906000526020600020906000905b82829054906101000a900460e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190600401906020826003010492830192600103820291508084116103025790505b505050505090508051600003610397576040517f40d4c9d900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b80517f1f931c1c000000000000000000000000000000000000000000000000000000009082906000906103cc576103cc61201d565b60200260200101517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19160361042a576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610435600082610984565b604051339073ffffffffffffffffffffffffffffffffffffffff8516907f706807c5bad215e3dcb9056c9bcb73bbede85a028c0256ae6ab6d04c7181336090600090a3505050565b610485610ac0565b7f363d25a6b563e4e505e09cc7b49c0772239b412c54b5ffbf5d7c1d77a49f57f260005b81548110156105b7576105af8260000182815481106104ca576104ca61201d565b6000918252602090912060029091020154835473ffffffffffffffffffffffffffffffffffffffff909116908490849081106105085761050861201d565b90600052602060002090600202016001018054806020026020016040519081016040528092919081815260200182805480156105a557602002820191906000526020600020906000905b82829054906101000a900460e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190600401906020826003010492830192600103820291508084116105525790505b5050505050610b35565b6001016104a9565b50606060005b83811015610702576105f48585838181106105da576105da61201d565b90506020020160208101906105ef9190611f6b565b610de5565b80519092507f1f931c1c0000000000000000000000000000000000000000000000000000000090839060009061062c5761062c61201d565b60200260200101517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191603156105bd57604080516001808252818301909252600091816020015b6040805160608082018352600080835260208301529181019190915281526020019060019003908161067057905050604080516060810190915260008152909150602081016002815260200184815250816000815181106106d3576106d361201d565b60200260200101819052506106f981600060405180602001604052806000815250610ee5565b506001016105bd565b5061070e826000611e1b565b60405133907ff5cbf596165cc457b2cd92e8d8450827ee314968160a5696402d75766fc52caf90600090a250505050565b3373ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016148015906107bc57507fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c13205473ffffffffffffffffffffffffffffffffffffffff163314155b156107f3576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b7f363d25a6b563e4e505e09cc7b49c0772239b412c54b5ffbf5d7c1d77a49f57f2600061081e6110c6565b9050805160000361085b576040517f8bce42e700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60005b8151811015610954576108ae7f000000000000000000000000000000000000000000000000000000000000000083838151811061089d5761089d61201d565b602002602001015160200151610b35565b826000018282815181106108c4576108c461201d565b602090810291909101810151825460018082018555600094855293839020825160029092020180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff909216919091178155818301518051929491936109469392850192910190611e3f565b50505080600101905061085e565b5060405133907fb8fad2fa0ed7a383e747c309ef2c4391d7b65592a48893e57ccc1fab7079145690600090a25050565b80516000036109bf576040517f7bc5595000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c73ffffffffffffffffffffffffffffffffffffffff831615610a2e576040517f79c9df2200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60005b8251811015610aba576000838281518110610a4e57610a4e61201d565b6020908102919091018101517fffffffff00000000000000000000000000000000000000000000000000000000811660009081529185905260409091205490915073ffffffffffffffffffffffffffffffffffffffff16610ab084828461126b565b5050600101610a31565b50505050565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c6004015473ffffffffffffffffffffffffffffffffffffffff163314610b33576040517f277d76f800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b8051600003610b70576040517f7bc5595000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c73ffffffffffffffffffffffffffffffffffffffff8316610bde576040517fc68ec83a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff83166000908152600182016020526040812054906bffffffffffffffffffffffff82169003610c2657610c268285611734565b60005b8351811015610dde576000848281518110610c4657610c4661201d565b6020908102919091018101517fffffffff00000000000000000000000000000000000000000000000000000000811660009081529186905260409091205490915073ffffffffffffffffffffffffffffffffffffffff9081169087168103610cda576040517fa023275d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610ce585828461126b565b7fffffffff000000000000000000000000000000000000000000000000000000008216600081815260208781526040808320805473ffffffffffffffffffffffffffffffffffffffff908116740100000000000000000000000000000000000000006bffffffffffffffffffffffff8c16021782558c168085526001808c0185529285208054938401815585528385206008840401805463ffffffff60079095166004026101000a948502191660e08a901c94909402939093179092559390925287905281547fffffffffffffffffffffffff000000000000000000000000000000000000000016179055505060019182019101610c29565b5050505050565b73ffffffffffffffffffffffffffffffffffffffff811660009081527fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131d602090815260409182902080548351818402810184019094528084526060937fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c9390929190830182828015610ed857602002820191906000526020600020906000905b82829054906101000a900460e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191681526020019060040190602082600301049283019260010382029150808411610e855790505b5050505050915050919050565b60005b835181101561107b576000848281518110610f0557610f0561201d565b602002602001015160200151905060006002811115610f2657610f2661207b565b816002811115610f3857610f3861207b565b03610f8657610f81858381518110610f5257610f5261201d565b602002602001015160000151868481518110610f7057610f7061201d565b6020026020010151604001516117aa565b611072565b6001816002811115610f9a57610f9a61207b565b03610fe357610f81858381518110610fb457610fb461201d565b602002602001015160000151868481518110610fd257610fd261201d565b602002602001015160400151610b35565b6002816002811115610ff757610ff761207b565b0361104057610f818583815181106110115761101161201d565b60200260200101516000015186848151811061102f5761102f61201d565b602002602001015160400151610984565b6040517fe548e6b500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50600101610ee8565b507f8faa70878671ccd212d20771b795c50af8fd3ff6cf27f4bde57e5d4de0aeb6738383836040516110af93929190612118565b60405180910390a16110c18282611a43565b505050565b606060006110d2611be4565b9050600181516110e29190612280565b67ffffffffffffffff8111156110fa576110fa61204c565b60405190808252806020026020018201604052801561114057816020015b6040805180820190915260008152606060208201528152602001906001900390816111185790505b5091506000805b8251811015611265577f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168382815181106111995761119961201d565b60200260200101516000015173ffffffffffffffffffffffffffffffffffffffff161461125d578281815181106111d2576111d261201d565b6020026020010151600001518483815181106111f0576111f061201d565b602090810291909101015173ffffffffffffffffffffffffffffffffffffffff909116905282518390829081106112295761122961201d565b6020026020010151602001518483815181106112475761124761201d565b6020026020010151602001819052508160010191505b600101611147565b50505090565b73ffffffffffffffffffffffffffffffffffffffff82166112b8576040517fa9ad62f800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3073ffffffffffffffffffffffffffffffffffffffff831603611307576040517fc3c5ec3700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b7fffffffff0000000000000000000000000000000000000000000000000000000081166000908152602084815260408083205473ffffffffffffffffffffffffffffffffffffffff86168452600180880190935290832054740100000000000000000000000000000000000000009091046bffffffffffffffffffffffff16929161139191612280565b90508082146114d85773ffffffffffffffffffffffffffffffffffffffff8416600090815260018601602052604081208054839081106113d3576113d361201d565b6000918252602080832060088304015473ffffffffffffffffffffffffffffffffffffffff8916845260018a019091526040909220805460079092166004026101000a90920460e01b9250829190859081106114315761143161201d565b600091825260208083206008830401805463ffffffff60079094166004026101000a938402191660e09590951c929092029390931790557fffffffff0000000000000000000000000000000000000000000000000000000092909216825286905260409020805473ffffffffffffffffffffffffffffffffffffffff16740100000000000000000000000000000000000000006bffffffffffffffffffffffff8516021790555b73ffffffffffffffffffffffffffffffffffffffff84166000908152600186016020526040902080548061150e5761150e6122c0565b6000828152602080822060087fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff90940193840401805463ffffffff600460078716026101000a0219169055919092557fffffffff000000000000000000000000000000000000000000000000000000008516825286905260408120819055819003610dde5760028501546000906115a790600190612280565b73ffffffffffffffffffffffffffffffffffffffff861660009081526001808901602052604090912001549091508082146116955760008760020183815481106115f3576115f361201d565b60009182526020909120015460028901805473ffffffffffffffffffffffffffffffffffffffff90921692508291849081106116315761163161201d565b600091825260208083209190910180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff948516179055929091168152600189810190925260409020018190555b866002018054806116a8576116a86122c0565b6000828152602080822083017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff90810180547fffffffffffffffffffffffff000000000000000000000000000000000000000016905590920190925573ffffffffffffffffffffffffffffffffffffffff88168252600189810190915260408220015550505050505050565b61173d81611dde565b60028201805473ffffffffffffffffffffffffffffffffffffffff90921660008181526001948501602090815260408220860185905594840183559182529290200180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169091179055565b80516000036117e5576040517f7bc5595000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c73ffffffffffffffffffffffffffffffffffffffff8316611853576040517fc68ec83a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff83166000908152600182016020526040812054906bffffffffffffffffffffffff8216900361189b5761189b8285611734565b60005b8351811015610dde5760008482815181106118bb576118bb61201d565b6020908102919091018101517fffffffff00000000000000000000000000000000000000000000000000000000811660009081529186905260409091205490915073ffffffffffffffffffffffffffffffffffffffff16801561194a576040517fa023275d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b7fffffffff000000000000000000000000000000000000000000000000000000008216600081815260208781526040808320805473ffffffffffffffffffffffffffffffffffffffff908116740100000000000000000000000000000000000000006bffffffffffffffffffffffff8c16021782558c168085526001808c0185529285208054938401815585528385206008840401805463ffffffff60079095166004026101000a948502191660e08a901c94909402939093179092559390925287905281547fffffffffffffffffffffffff00000000000000000000000000000000000000001617905550506001918201910161189e565b73ffffffffffffffffffffffffffffffffffffffff8216611a9b57805115611a97576040517f9811686000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b8051600003611ad6576040517f4220056600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82163014611afc57611afc82611dde565b6000808373ffffffffffffffffffffffffffffffffffffffff1683604051611b2491906122ef565b600060405180830381855af49150503d8060008114611b5f576040519150601f19603f3d011682016040523d82523d6000602084013e611b64565b606091505b509150915081610aba57805115611bb257806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611ba9919061230b565b60405180910390fd5b6040517fc53ebed500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131e546060907fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c908067ffffffffffffffff811115611c4457611c4461204c565b604051908082528060200260200182016040528015611c8a57816020015b604080518082019091526000815260606020820152815260200190600190039081611c625790505b50925060005b81811015611265576000836002018281548110611caf57611caf61201d565b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905080858381518110611cef57611cef61201d565b60209081029190910181015173ffffffffffffffffffffffffffffffffffffffff9283169052908216600090815260018601825260409081902080548251818502810185019093528083529192909190830182828015611db057602002820191906000526020600020906000905b82829054906101000a900460e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191681526020019060040190602082600301049283019260010382029150808411611d5d5790505b5050505050858381518110611dc757611dc761201d565b602090810291909101810151015250600101611c90565b803b6000819003611a97576040517fe350060000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5080546000825560020290600052602060002090810190611e3c9190611eeb565b50565b82805482825590600052602060002090600701600890048101928215611edb5791602002820160005b83821115611ea957835183826101000a81548163ffffffff021916908360e01c02179055509260200192600401602081600301049283019260010302611e68565b8015611ed95782816101000a81549063ffffffff0219169055600401602081600301049283019260010302611ea9565b505b50611ee7929150611f31565b5090565b80821115611ee75780547fffffffffffffffffffffffff00000000000000000000000000000000000000001681556000611f286001830182611f46565b50600201611eeb565b5b80821115611ee75760008155600101611f32565b508054600082556007016008900490600052602060002090810190611e3c9190611f31565b600060208284031215611f7d57600080fd5b813573ffffffffffffffffffffffffffffffffffffffff81168114611fa157600080fd5b9392505050565b60008060208385031215611fbb57600080fd5b823567ffffffffffffffff80821115611fd357600080fd5b818501915085601f830112611fe757600080fd5b813581811115611ff657600080fd5b8660208260051b850101111561200b57600080fd5b60209290920196919550909350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b60005b838110156120c55781810151838201526020016120ad565b50506000910152565b600081518084526120e68160208601602086016120aa565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b60006060808301818452808751808352608092508286019150828160051b8701016020808b0160005b84811015612243577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff808a8503018652815188850173ffffffffffffffffffffffffffffffffffffffff825116865284820151600381106121ca577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b868601526040918201519186018a905281519081905290840190600090898701905b8083101561222e5783517fffffffff000000000000000000000000000000000000000000000000000000001682529286019260019290920191908601906121ec565b50978501979550505090820190600101612141565b505073ffffffffffffffffffffffffffffffffffffffff8a1690880152868103604088015261227281896120ce565b9a9950505050505050505050565b818103818111156122ba577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b600082516123018184602087016120aa565b9190910192915050565b602081526000611fa160208301846120ce56fea2646970667358221220e196ae03121b8214bd9ef8a96a99f8831509a9f9f3b48fc00d3b3f5fd705012a64736f6c63430008110033";
var isSuperArgs = function (xs) { return xs.length > 1; };
var EmergencyPauseFacet__factory = /** @class */ (function (_super) {
    __extends(EmergencyPauseFacet__factory, _super);
    function EmergencyPauseFacet__factory() {
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
    EmergencyPauseFacet__factory.prototype.deploy = function (_pauserWallet, overrides) {
        return _super.prototype.deploy.call(this, _pauserWallet, overrides || {});
    };
    EmergencyPauseFacet__factory.prototype.getDeployTransaction = function (_pauserWallet, overrides) {
        return _super.prototype.getDeployTransaction.call(this, _pauserWallet, overrides || {});
    };
    EmergencyPauseFacet__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    EmergencyPauseFacet__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    EmergencyPauseFacet__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    EmergencyPauseFacet__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    EmergencyPauseFacet__factory.bytecode = _bytecode;
    EmergencyPauseFacet__factory.abi = _abi;
    return EmergencyPauseFacet__factory;
}(ethers_1.ContractFactory));
exports.EmergencyPauseFacet__factory = EmergencyPauseFacet__factory;
