import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { AmarokFacet, AmarokFacetInterface } from "../AmarokFacet";
declare type AmarokFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class AmarokFacet__factory extends ContractFactory {
    constructor(...args: AmarokFacetConstructorParams);
    deploy(_connextHandler: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<AmarokFacet>;
    getDeployTransaction(_connextHandler: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): AmarokFacet;
    connect(signer: Signer): AmarokFacet__factory;
    static readonly bytecode = "0x60a06040523480156200001157600080fd5b5060405162002a3438038062002a34833981016040819052620000349162000046565b6001600160a01b031660805262000078565b6000602082840312156200005957600080fd5b81516001600160a01b03811681146200007157600080fd5b9392505050565b6080516129996200009b60003960008181610733015261079b01526129996000f3fe6080604052600436106100295760003560e01c8063123cc1171461002e578063b506907114610043575b600080fd5b61004161003c366004612289565b610056565b005b610041610051366004612348565b610301565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100d1576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006100e234476123e4565b905086806101000151610121576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b876101448160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561017b576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036101b9576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036101f6576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b88610219816080015173ffffffffffffffffffffffffffffffffffffffff161590565b15610250576040517f5ded599700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8961012001511515610261886105ca565b15151461029a576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102af8a600001518b60c001518b8b336105e1565b60c08b01526102be8a88610729565b50479150600090508282116102d45760006102de565b6102de83836123e4565b905080156102f2576102f2600085836108a5565b50506000909255505050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0161037c576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815533600061038d34476123e4565b9050610398856123f7565b806101000151156103d5576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6103de866123f7565b60a081015173ffffffffffffffffffffffffffffffffffffffff1661042f576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c0015160000361046d576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036104aa576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6104b3876123f7565b608081015173ffffffffffffffffffffffffffffffffffffffff16610504576040517f5ded599700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61051661014089016101208a01612403565b1515610521886105ca565b15151461055a576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61057761056d60a08a0160808b01612420565b8960c001356108db565b610589610583896123f7565b88610729565b504791506000905082821161059f5760006105a9565b6105a983836123e4565b905080156105bd576105bd600085836108a5565b5050600090925550505050565b6000806105d7838061243b565b9050119050919050565b60008280820361061d576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000858561062c6001856123e4565b81811061063b5761063b6124a7565b905060200281019061064d91906124d6565b61065e906080810190606001612420565b9050600061066b82610a51565b905073ffffffffffffffffffffffffffffffffffffffff82166106955761069234826123e4565b90505b60006106a18888610b0a565b90506106ad8888610c16565b6106ba8a89898985610c77565b6000826106c685610a51565b6106d091906123e4565b90508981101561071b576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044015b60405180910390fd5b9a9950505050505050505050565b61075c82608001517f00000000000000000000000000000000000000000000000000000000000000008460c00151611029565b6000826101200151610772578260a00151610782565b6107826040830160208401612420565b905073ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016638aac16ba60408401356107d560c0860160a08701612514565b8487608001518760800160208101906107ee9190612420565b60c08a015160608a01356108028b8061243b565b6040518a63ffffffff1660e01b815260040161082598979695949392919061253a565b60206040518083038185885af1158015610843573d6000803e3d6000fd5b50505050506040513d601f19601f8201168201806040525081019061086891906125d6565b507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f183604051610898919061265d565b60405180910390a1505050565b73ffffffffffffffffffffffffffffffffffffffff8316156108d1576108cc838383611174565b505050565b6108cc82826112a3565b73ffffffffffffffffffffffffffffffffffffffff82166109345780341015610930576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b8060000361096e576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa1580156109db573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109ff91906125d6565b905081811015610a45576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610712565b6108cc833330856113cd565b600073ffffffffffffffffffffffffffffffffffffffff821615610b02576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610ad9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610afd91906125d6565b610b04565b475b92915050565b60608160008167ffffffffffffffff811115610b2857610b28611fe0565b604051908082528060200260200182016040528015610b51578160200160208202803683370190505b5090506000805b83811015610c0b57868682818110610b7257610b726124a7565b9050602002810190610b8491906124d6565b610b95906080810190606001612420565b9150610ba082610a51565b838281518110610bb257610bb26124a7565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610c035734838281518110610beb57610beb6124a7565b60200260200101818151610bff91906123e4565b9052505b600101610b58565b509095945050505050565b60005b818110156108cc576000838383818110610c3557610c356124a7565b9050602002810190610c4791906124d6565b610c5090612770565b90508060c0015115610c6e57610c6e816040015182608001516108db565b50600101610c19565b838383838260018114610f445760008585610c936001856123e4565b818110610ca257610ca26124a7565b9050602002810190610cb491906124d6565b610cc5906080810190606001612420565b9050600089815b81811015610e7057368d8d83818110610ce757610ce76124a7565b9050602002810190610cf991906124d6565b9050610d28610d0e6060830160408401612420565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610d8b5750610d8b610d416040830160208401612420565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610da25750610da2610d416020830183612420565b8015610e275750610e27610db960a083018361243b565b610dc891600491600091612815565b610dd19161283f565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610e5d576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610e678f826115e7565b50600101610ccc565b505060005b610e806001856123e4565b811015610f3c576000888883818110610e9b57610e9b6124a7565b9050602002810190610ead91906124d6565b610ebe906080810190606001612420565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610f3357858281518110610f0557610f056124a7565b6020026020010151610f1682610a51565b610f2091906123e4565b92508215610f3357610f338188856108a5565b50600101610e75565b50505061101d565b8760005b8181101561101a57368b8b83818110610f6357610f636124a7565b9050602002810190610f7591906124d6565b9050610f8a610d0e6060830160408401612420565b80610fa35750610fa3610d416040830160208401612420565b8015610fba5750610fba610d416020830183612420565b8015610fd15750610fd1610db960a083018361243b565b611007576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6110118d826115e7565b50600101610f48565b50505b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff831661104957505050565b73ffffffffffffffffffffffffffffffffffffffff8216611096576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff83811660248301526000919085169063dd62ed3e90604401602060405180830381865afa15801561110c573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061113091906125d6565b90508181101561116e5761116e8484611169847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6123e4565b6118fd565b50505050565b73ffffffffffffffffffffffffffffffffffffffff83166111c1576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa15801561122e573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061125291906125d6565b905080821115611298576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610712565b61116e848484611a79565b73ffffffffffffffffffffffffffffffffffffffff82166112f0576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b47811115611333576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101829052476024820152604401610712565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d806000811461138d576040519150601f19603f3d011682016040523d82523d6000602084013e611392565b606091505b50509050806108cc576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff841661141a576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216611467576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa1580156114d8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114fc91906125d6565b905061150a82868686611acf565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa15801561157a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061159e91906125d6565b6115a891906123e4565b146115df576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b6115fd6115f76020830183612420565b3b151590565b611633576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101356000819003611673576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000611688610d0e6060850160408601612420565b611693576000611699565b82608001355b905060006116b56116b06060860160408701612420565b610a51565b905060006116cc6116b06080870160608801612420565b905082600003611703576117036116e96060870160408801612420565b6116f96040880160208901612420565b8760800135611029565b846080013582101561174e576040517fcf4791810000000000000000000000000000000000000000000000000000000081526080860135600482015260248101839052604401610712565b60008061175e6020880188612420565b73ffffffffffffffffffffffffffffffffffffffff168561178260a08a018a61243b565b604051611790929190612887565b60006040518083038185875af1925050503d80600081146117cd576040519150601f19603f3d011682016040523d82523d6000602084013e6117d2565b606091505b50915091508161181d5760006117e782611b2d565b9050806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107129190612897565b60006118326116b060808a0160608b01612420565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388961186360208b018b612420565b61187360608c0160408d01612420565b61188360808d0160608e01612420565b8c60800135898711611895578661189f565b61189f8a886123e4565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8381166024830152600091839186169063dd62ed3e90604401602060405180830381865afa158015611974573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061199891906125d6565b6119a291906128aa565b60405173ffffffffffffffffffffffffffffffffffffffff851660248201526044810182905290915061116e9085907f095ea7b300000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611bab565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526108cc9084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064016119f7565b60405173ffffffffffffffffffffffffffffffffffffffff8085166024830152831660448201526064810182905261116e9085907f23b872dd00000000000000000000000000000000000000000000000000000000906084016119f7565b6060604482511015611b7257505060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c79000000602082015290565b6000611b8e6004808551611b8691906123e4565b859190611cb7565b905080806020019051810190611ba491906128bd565b9392505050565b6000611c0d826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611dd19092919063ffffffff16565b8051909150156108cc5780806020019051810190611c2b9190612934565b6108cc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610712565b606081611cc581601f6128aa565b1015611cfd576040517f47aaf07a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611d0782846128aa565b84511015611d41576040517f3b99b53d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b606082158015611d605760405191506000825260208201604052611dc8565b6040519150601f8416801560200281840101858101878315602002848b0101015b81831015611d99578051835260209283019201611d81565b5050858452601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016604052505b50949350505050565b6060611de08484600085611de8565b949350505050565b606082471015611e7a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610712565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611ea39190612951565b60006040518083038185875af1925050503d8060008114611ee0576040519150601f19603f3d011682016040523d82523d6000602084013e611ee5565b606091505b5091509150611ef687838387611f01565b979650505050505050565b60608315611f97578251600003611f905773ffffffffffffffffffffffffffffffffffffffff85163b611f90576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610712565b5081611de0565b611de08383815115611fac5781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107129190612897565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff8111828210171561203357612033611fe0565b60405290565b60405160e0810167ffffffffffffffff8111828210171561203357612033611fe0565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff811182821017156120a3576120a3611fe0565b604052919050565b600067ffffffffffffffff8211156120c5576120c5611fe0565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600082601f83011261210257600080fd5b8135612115612110826120ab565b61205c565b81815284602083860101111561212a57600080fd5b816020850160208301376000918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461216b57600080fd5b919050565b801515811461217e57600080fd5b50565b803561216b81612170565b6000610140828403121561219f57600080fd5b6121a761200f565b905081358152602082013567ffffffffffffffff808211156121c857600080fd5b6121d4858386016120f1565b602084015260408401359150808211156121ed57600080fd5b506121fa848285016120f1565b60408301525061220c60608301612147565b606082015261221d60808301612147565b608082015261222e60a08301612147565b60a082015260c082013560c082015260e082013560e0820152610100612255818401612181565b90820152610120612267838201612181565b9082015292915050565b600060c0828403121561228357600080fd5b50919050565b6000806000806060858703121561229f57600080fd5b843567ffffffffffffffff808211156122b757600080fd5b6122c38883890161218c565b955060208701359150808211156122d957600080fd5b818701915087601f8301126122ed57600080fd5b8135818111156122fc57600080fd5b8860208260051b850101111561231157600080fd5b60208301955080945050604087013591508082111561232f57600080fd5b5061233c87828801612271565b91505092959194509250565b6000806040838503121561235b57600080fd5b823567ffffffffffffffff8082111561237357600080fd5b90840190610140828703121561238857600080fd5b9092506020840135908082111561239e57600080fd5b506123ab85828601612271565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b81810381811115610b0457610b046123b5565b6000610b04368361218c565b60006020828403121561241557600080fd5b8135611ba481612170565b60006020828403121561243257600080fd5b611ba482612147565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261247057600080fd5b83018035915067ffffffffffffffff82111561248b57600080fd5b6020019150368190038213156124a057600080fd5b9250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2183360301811261250a57600080fd5b9190910192915050565b60006020828403121561252657600080fd5b813563ffffffff81168114611ba457600080fd5b63ffffffff89168152600073ffffffffffffffffffffffffffffffffffffffff808a16602084015280891660408401528088166060840152508560808301528460a083015260e060c08301528260e08301526101008385828501376000838501820152601f9093017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01690910190910198975050505050505050565b6000602082840312156125e857600080fd5b5051919050565b60005b8381101561260a5781810151838201526020016125f2565b50506000910152565b6000815180845261262b8160208601602086016125ef565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b602081528151602082015260006020830151610140806040850152612686610160850183612613565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08584030160608601526126c18382612613565b92505060608501516126eb608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e085015161010081818701528087015191505061012061275e8187018315159052565b90950151151593019290925250919050565b600060e0823603121561278257600080fd5b61278a612039565b61279383612147565b81526127a160208401612147565b60208201526127b260408401612147565b60408201526127c360608401612147565b60608201526080830135608082015260a083013567ffffffffffffffff8111156127ec57600080fd5b6127f8368286016120f1565b60a08301525061280a60c08401612181565b60c082015292915050565b6000808585111561282557600080fd5b8386111561283257600080fd5b5050820193919092039150565b7fffffffff00000000000000000000000000000000000000000000000000000000813581811691600485101561287f5780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b602081526000611ba46020830184612613565b80820180821115610b0457610b046123b5565b6000602082840312156128cf57600080fd5b815167ffffffffffffffff8111156128e657600080fd5b8201601f810184136128f757600080fd5b8051612905612110826120ab565b81815285602083850101111561291a57600080fd5b61292b8260208301602086016125ef565b95945050505050565b60006020828403121561294657600080fd5b8151611ba481612170565b6000825161250a8184602087016125ef56fea26469706673582212207d053a39fd5ace72021f620b608af757549fee2e03194228888ead0ee0241f5f64736f6c63430008110033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "contract IConnextHandler";
            readonly name: "_connextHandler";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [];
        readonly name: "CannotBridgeToSameNetwork";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "ContractCallNotAllowed";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "minAmount";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "receivedAmount";
            readonly type: "uint256";
        }];
        readonly name: "CumulativeSlippageTooHigh";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InformationMismatch";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "required";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "balance";
            readonly type: "uint256";
        }];
        readonly name: "InsufficientBalance";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidAmount";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidContract";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidReceiver";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NativeAssetNotSupported";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NativeAssetTransferFailed";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NoSwapDataProvided";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NoSwapFromZeroBalance";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NoTransferToNullAddress";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NullAddrIsNotAValidSpender";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NullAddrIsNotAnERC20Token";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "ReentrancyError";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "SliceOutOfBounds";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "SliceOverflow";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "transactionId";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "integrator";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "referrer";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "fromAssetId";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "toAssetId";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "fromAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "toAmount";
            readonly type: "uint256";
        }];
        readonly name: "LiFiGenericSwapCompleted";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "transactionId";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "integrator";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "referrer";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "fromAssetId";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "toAssetId";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "fromAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "toAmount";
            readonly type: "uint256";
        }];
        readonly name: "LiFiSwappedGeneric";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "transactionId";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "receivingAssetId";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "timestamp";
            readonly type: "uint256";
        }];
        readonly name: "LiFiTransferCompleted";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "transactionId";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "receivingAssetId";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "timestamp";
            readonly type: "uint256";
        }];
        readonly name: "LiFiTransferRecovered";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "bytes32";
                readonly name: "transactionId";
                readonly type: "bytes32";
            }, {
                readonly internalType: "string";
                readonly name: "bridge";
                readonly type: "string";
            }, {
                readonly internalType: "string";
                readonly name: "integrator";
                readonly type: "string";
            }, {
                readonly internalType: "address";
                readonly name: "referrer";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "sendingAssetId";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "receiver";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "minAmount";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "destinationChainId";
                readonly type: "uint256";
            }, {
                readonly internalType: "bool";
                readonly name: "hasSourceSwaps";
                readonly type: "bool";
            }, {
                readonly internalType: "bool";
                readonly name: "hasDestinationCall";
                readonly type: "bool";
            }];
            readonly indexed: false;
            readonly internalType: "struct ILiFi.BridgeData";
            readonly name: "bridgeData";
            readonly type: "tuple";
        }];
        readonly name: "LiFiTransferStarted";
        readonly type: "event";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "bytes32";
                readonly name: "transactionId";
                readonly type: "bytes32";
            }, {
                readonly internalType: "string";
                readonly name: "bridge";
                readonly type: "string";
            }, {
                readonly internalType: "string";
                readonly name: "integrator";
                readonly type: "string";
            }, {
                readonly internalType: "address";
                readonly name: "referrer";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "sendingAssetId";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "receiver";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "minAmount";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "destinationChainId";
                readonly type: "uint256";
            }, {
                readonly internalType: "bool";
                readonly name: "hasSourceSwaps";
                readonly type: "bool";
            }, {
                readonly internalType: "bool";
                readonly name: "hasDestinationCall";
                readonly type: "bool";
            }];
            readonly internalType: "struct ILiFi.BridgeData";
            readonly name: "_bridgeData";
            readonly type: "tuple";
        }, {
            readonly components: readonly [{
                readonly internalType: "bytes";
                readonly name: "callData";
                readonly type: "bytes";
            }, {
                readonly internalType: "address";
                readonly name: "callTo";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "relayerFee";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "slippageTol";
                readonly type: "uint256";
            }, {
                readonly internalType: "address";
                readonly name: "delegate";
                readonly type: "address";
            }, {
                readonly internalType: "uint32";
                readonly name: "destChainDomainId";
                readonly type: "uint32";
            }];
            readonly internalType: "struct AmarokFacet.AmarokData";
            readonly name: "_amarokData";
            readonly type: "tuple";
        }];
        readonly name: "startBridgeTokensViaAmarok";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "bytes32";
                readonly name: "transactionId";
                readonly type: "bytes32";
            }, {
                readonly internalType: "string";
                readonly name: "bridge";
                readonly type: "string";
            }, {
                readonly internalType: "string";
                readonly name: "integrator";
                readonly type: "string";
            }, {
                readonly internalType: "address";
                readonly name: "referrer";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "sendingAssetId";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "receiver";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "minAmount";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "destinationChainId";
                readonly type: "uint256";
            }, {
                readonly internalType: "bool";
                readonly name: "hasSourceSwaps";
                readonly type: "bool";
            }, {
                readonly internalType: "bool";
                readonly name: "hasDestinationCall";
                readonly type: "bool";
            }];
            readonly internalType: "struct ILiFi.BridgeData";
            readonly name: "_bridgeData";
            readonly type: "tuple";
        }, {
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "callTo";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "approveTo";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "sendingAssetId";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "receivingAssetId";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "fromAmount";
                readonly type: "uint256";
            }, {
                readonly internalType: "bytes";
                readonly name: "callData";
                readonly type: "bytes";
            }, {
                readonly internalType: "bool";
                readonly name: "requiresDeposit";
                readonly type: "bool";
            }];
            readonly internalType: "struct LibSwap.SwapData[]";
            readonly name: "_swapData";
            readonly type: "tuple[]";
        }, {
            readonly components: readonly [{
                readonly internalType: "bytes";
                readonly name: "callData";
                readonly type: "bytes";
            }, {
                readonly internalType: "address";
                readonly name: "callTo";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "relayerFee";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "slippageTol";
                readonly type: "uint256";
            }, {
                readonly internalType: "address";
                readonly name: "delegate";
                readonly type: "address";
            }, {
                readonly internalType: "uint32";
                readonly name: "destChainDomainId";
                readonly type: "uint32";
            }];
            readonly internalType: "struct AmarokFacet.AmarokData";
            readonly name: "_amarokData";
            readonly type: "tuple";
        }];
        readonly name: "swapAndStartBridgeTokensViaAmarok";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }];
    static createInterface(): AmarokFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): AmarokFacet;
}
export {};
