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
    static readonly bytecode = "0x60a06040523480156200001157600080fd5b5060405162002c1438038062002c14833981016040819052620000349162000046565b6001600160a01b031660805262000078565b6000602082840312156200005957600080fd5b81516001600160a01b03811681146200007157600080fd5b9392505050565b608051612b72620000a26000396000818161071e01528181610773015261087c0152612b726000f3fe6080604052600436106100295760003560e01c806383f319171461002e5780638dc9932d14610043575b600080fd5b61004161003c366004612480565b610056565b005b61004161005136600461253f565b6102b3565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100d1576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006100e234476125db565b905086806101000151610121576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b876101448160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561017b576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036101b9576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036101f6576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b88610219816080015173ffffffffffffffffffffffffffffffffffffffff161590565b15610250576040517f5ded599700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61025a8a88610520565b6102748a600001518b60c001518b8b338c60400135610574565b60c08b01526102838a88610714565b5047915050818111156102a5576102a56000846102a085856125db565b610995565b505060009091555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0161032e576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815533600061033f34476125db565b905061034a856125ee565b80610100015115610387576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610390866125ee565b60a081015173ffffffffffffffffffffffffffffffffffffffff166103e1576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c0015160000361041f576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361045c576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610465876125ee565b608081015173ffffffffffffffffffffffffffffffffffffffff166104b6576040517f5ded599700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6104c86104c2896125ee565b88610520565b6104e56104db60a08a0160808b016125fa565b8960c001356109cb565b6104f76104f1896125ee565b88610714565b504791505081811115610514576105146000846102a085856125db565b50506000909155505050565b610120820151151560006105348380612615565b905011151514610570576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6000838082036105b0576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600086866105bf6001856125db565b8181106105ce576105ce612681565b90506020028101906105e091906126b0565b6105f19060808101906060016125fa565b905060006105fe82610b3d565b905073ffffffffffffffffffffffffffffffffffffffff82166106285761062534826125db565b90505b60006106348989610bf6565b90506106408989610d02565b604080516060810182528c815273ffffffffffffffffffffffffffffffffffffffff8916602082015290810187905261067b818b8b85610d6f565b60008361068786610b3d565b61069191906125db565b905073ffffffffffffffffffffffffffffffffffffffff85166106bb576106b888826125db565b90505b8b811015610704576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018d9052602481018290526044015b60405180910390fd5b9c9b505050505050505050505050565b61074782608001517f00000000000000000000000000000000000000000000000000000000000000008460c00151611160565b61075760e0820160c083016126ee565b156108655773ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000166393f18ac56107a860c0840160a0850161270b565b6107b860408501602086016125fa565b85608001518560800160208101906107d091906125fa565b86604001358860c001516107e491906125db565b60608801356107f38980612615565b8a604001356040518a63ffffffff1660e01b815260040161081c9998979695949392919061277a565b6020604051808303816000875af115801561083b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061085f91906127ec565b5061095a565b73ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016638aac16ba60408301356108b660c0850160a0860161270b565b6108c660408601602087016125fa565b86608001518660800160208101906108de91906125fa565b60c089015160608901356108f28a80612615565b6040518a63ffffffff1660e01b8152600401610915989796959493929190612805565b60206040518083038185885af1158015610933573d6000803e3d6000fd5b50505050506040513d601f19601f8201168201806040525081019061095891906127ec565b505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f18260405161098991906128db565b60405180910390a15050565b73ffffffffffffffffffffffffffffffffffffffff8316156109c1576109bc8383836112a3565b505050565b6109bc8282611425565b80600003610a05576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610a5a5780341015610570576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa158015610ac7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610aeb91906127ec565b905081811015610b31576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044016106fb565b6109bc8333308561154f565b600073ffffffffffffffffffffffffffffffffffffffff821615610bee576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610bc5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610be991906127ec565b610bf0565b475b92915050565b60608160008167ffffffffffffffff811115610c1457610c146121fa565b604051908082528060200260200182016040528015610c3d578160200160208202803683370190505b5090506000805b83811015610cf757868682818110610c5e57610c5e612681565b9050602002810190610c7091906126b0565b610c819060808101906060016125fa565b9150610c8c82610b3d565b838281518110610c9e57610c9e612681565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610cef5734838281518110610cd757610cd7612681565b60200260200101818151610ceb91906125db565b9052505b600101610c44565b509095945050505050565b60005b818110156109bc5736838383818110610d2057610d20612681565b9050602002810190610d3291906126b0565b9050610d4460e0820160c083016126ee565b15610d6657610d66610d5c60608301604084016125fa565b82608001356109cb565b50600101610d05565b6020840151604085015184918491849083600181146110795760008686610d976001856125db565b818110610da657610da6612681565b9050602002810190610db891906126b0565b610dc99060808101906060016125fa565b9050600089815b81811015610f7657368d8d83818110610deb57610deb612681565b9050602002810190610dfd91906126b0565b9050610e2c610e1260608301604084016125fa565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610e8f5750610e8f610e4560408301602084016125fa565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610ea65750610ea6610e4560208301836125fa565b8015610f2b5750610f2b610ebd60a0830183612615565b610ecc916004916000916129ee565b610ed591612a18565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610f61576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8e51610f6d908261177a565b50600101610dd0565b505060005b610f866001856125db565b811015611071576000898983818110610fa157610fa1612681565b9050602002810190610fb391906126b0565b610fc49060808101906060016125fa565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146110685786828151811061100b5761100b612681565b602002602001015161101c82610b3d565b61102691906125db565b9250600073ffffffffffffffffffffffffffffffffffffffff82161561104d57600061104f565b865b9050831561106657611066828a6102a084886125db565b505b50600101610f7b565b505050611154565b8760005b8181101561115157368b8b8381811061109857611098612681565b90506020028101906110aa91906126b0565b90506110bf610e1260608301604084016125fa565b806110d857506110d8610e4560408301602084016125fa565b80156110ef57506110ef610e4560208301836125fa565b80156111065750611106610ebd60a0830183612615565b61113c576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8c51611148908261177a565b5060010161107d565b50505b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff831661118057505050565b73ffffffffffffffffffffffffffffffffffffffff82166111cd576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa158015611242573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061126691906127ec565b10156109bc5761127883836000611a90565b6109bc83837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611a90565b73ffffffffffffffffffffffffffffffffffffffff83166112f0576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661133d576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa1580156113aa573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113ce91906127ec565b905080821115611414576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044016106fb565b61141f848484611c90565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8216611472576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b478111156114b5576040517fcf479181000000000000000000000000000000000000000000000000000000008152600481018290524760248201526044016106fb565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d806000811461150f576040519150601f19603f3d011682016040523d82523d6000602084013e611514565b606091505b50509050806109bc576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff841661159c576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166115e9576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa15801561165a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061167e91906127ec565b905061168c82868686611ce6565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff858116600483015260009183918516906370a0823190602401602060405180830381865afa1580156116fd573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061172191906127ec565b61172b91906125db565b905083611739826001612a60565b1015611771576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50505050505050565b61179061178a60208301836125fa565b3b151590565b6117c6576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101356000819003611806576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600061181b610e1260608501604086016125fa565b61182657600061182c565b82608001355b9050600061184861184360608601604087016125fa565b610b3d565b9050600061185f61184360808701606088016125fa565b9050826000036118965761189661187c60608701604088016125fa565b61188c60408801602089016125fa565b8760800135611160565b84608001358210156118e1576040517fcf47918100000000000000000000000000000000000000000000000000000000815260808601356004820152602481018390526044016106fb565b6000806118f160208801886125fa565b73ffffffffffffffffffffffffffffffffffffffff168561191560a08a018a612615565b604051611923929190612a73565b60006040518083038185875af1925050503d8060008114611960576040519150601f19603f3d011682016040523d82523d6000602084013e611965565b606091505b5091509150816119b057600061197a82611d44565b9050806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106fb9190612a83565b60006119c561184360808a0160608b016125fa565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b38896119f660208b018b6125fa565b611a0660608c0160408d016125fa565b611a1660808d0160608e016125fa565b8c60800135898711611a285786611a32565b611a328a886125db565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b801580611b3057506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa158015611b0a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611b2e91906127ec565b155b611bbc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e63650000000000000000000060648201526084016106fb565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526109bc9084907f095ea7b300000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611dc2565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526109bc9084907fa9059cbb0000000000000000000000000000000000000000000000000000000090606401611c0e565b60405173ffffffffffffffffffffffffffffffffffffffff8085166024830152831660448201526064810182905261141f9085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401611c0e565b6060604482511015611d8957505060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c79000000602082015290565b6000611da56004808551611d9d91906125db565b859190611ed1565b905080806020019051810190611dbb9190612a96565b9392505050565b6000611e24826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611feb9092919063ffffffff16565b9050805160001480611e45575080806020019051810190611e459190612b0d565b6109bc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084016106fb565b606081611edf81601f612a60565b1015611f17576040517f47aaf07a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611f218284612a60565b84511015611f5b576040517f3b99b53d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b606082158015611f7a5760405191506000825260208201604052611fe2565b6040519150601f8416801560200281840101858101878315602002848b0101015b81831015611fb3578051835260209283019201611f9b565b5050858452601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016604052505b50949350505050565b6060611ffa8484600085612002565b949350505050565b606082471015612094576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c000000000000000000000000000000000000000000000000000060648201526084016106fb565b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516120bd9190612b2a565b60006040518083038185875af1925050503d80600081146120fa576040519150601f19603f3d011682016040523d82523d6000602084013e6120ff565b606091505b50915091506121108783838761211b565b979650505050505050565b606083156121b15782516000036121aa5773ffffffffffffffffffffffffffffffffffffffff85163b6121aa576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016106fb565b5081611ffa565b611ffa83838151156121c65781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106fb9190612a83565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff8111828210171561224d5761224d6121fa565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff8111828210171561229a5761229a6121fa565b604052919050565b600067ffffffffffffffff8211156122bc576122bc6121fa565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600082601f8301126122f957600080fd5b813561230c612307826122a2565b612253565b81815284602083860101111561232157600080fd5b816020850160208301376000918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461236257600080fd5b919050565b801515811461237557600080fd5b50565b803561236281612367565b6000610140828403121561239657600080fd5b61239e612229565b905081358152602082013567ffffffffffffffff808211156123bf57600080fd5b6123cb858386016122e8565b602084015260408401359150808211156123e457600080fd5b506123f1848285016122e8565b6040830152506124036060830161233e565b60608201526124146080830161233e565b608082015261242560a0830161233e565b60a082015260c082013560c082015260e082013560e082015261010061244c818401612378565b9082015261012061245e838201612378565b9082015292915050565b600060e0828403121561247a57600080fd5b50919050565b6000806000806060858703121561249657600080fd5b843567ffffffffffffffff808211156124ae57600080fd5b6124ba88838901612383565b955060208701359150808211156124d057600080fd5b818701915087601f8301126124e457600080fd5b8135818111156124f357600080fd5b8860208260051b850101111561250857600080fd5b60208301955080945050604087013591508082111561252657600080fd5b5061253387828801612468565b91505092959194509250565b6000806040838503121561255257600080fd5b823567ffffffffffffffff8082111561256a57600080fd5b90840190610140828703121561257f57600080fd5b9092506020840135908082111561259557600080fd5b506125a285828601612468565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b81810381811115610bf057610bf06125ac565b6000610bf03683612383565b60006020828403121561260c57600080fd5b611dbb8261233e565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261264a57600080fd5b83018035915067ffffffffffffffff82111561266557600080fd5b60200191503681900382131561267a57600080fd5b9250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff218336030181126126e457600080fd5b9190910192915050565b60006020828403121561270057600080fd5b8135611dbb81612367565b60006020828403121561271d57600080fd5b813563ffffffff81168114611dbb57600080fd5b8183528181602085013750600060208284010152600060207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b600061010063ffffffff8c16835273ffffffffffffffffffffffffffffffffffffffff808c166020850152808b166040850152808a166060850152508760808401528660a08401528060c08401526127d58184018688612731565b9150508260e08301529a9950505050505050505050565b6000602082840312156127fe57600080fd5b5051919050565b63ffffffff89168152600073ffffffffffffffffffffffffffffffffffffffff808a16602084015280891660408401528088166060840152508560808301528460a083015260e060c083015261285f60e083018486612731565b9a9950505050505050505050565b60005b83811015612888578181015183820152602001612870565b50506000910152565b600081518084526128a981602086016020860161286d565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b602081528151602082015260006020830151610140806040850152612904610160850183612891565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe085840301606086015261293f8382612891565b9250506060850151612969608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206129dc8187018315159052565b90950151151593019290925250919050565b600080858511156129fe57600080fd5b83861115612a0b57600080fd5b5050820193919092039150565b7fffffffff000000000000000000000000000000000000000000000000000000008135818116916004851015612a585780818660040360031b1b83161692505b505092915050565b80820180821115610bf057610bf06125ac565b8183823760009101908152919050565b602081526000611dbb6020830184612891565b600060208284031215612aa857600080fd5b815167ffffffffffffffff811115612abf57600080fd5b8201601f81018413612ad057600080fd5b8051612ade612307826122a2565b818152856020838501011115612af357600080fd5b612b0482602083016020860161286d565b95945050505050565b600060208284031215612b1f57600080fd5b8151611dbb81612367565b600082516126e481846020870161286d56fea2646970667358221220d95f784bc9259dc776f99440b739aaa0cfbe7b8d9c8ce220038c5130bcfbeb1f64736f6c63430008110033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_connextHandler";
            readonly type: "address";
            readonly internalType: "contract IConnextHandler";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaAmarok";
        readonly inputs: readonly [{
            readonly name: "_bridgeData";
            readonly type: "tuple";
            readonly internalType: "struct ILiFi.BridgeData";
            readonly components: readonly [{
                readonly name: "transactionId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "bridge";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "integrator";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "referrer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receiver";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "minAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationChainId";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "hasSourceSwaps";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "hasDestinationCall";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }, {
            readonly name: "_amarokData";
            readonly type: "tuple";
            readonly internalType: "struct AmarokFacet.AmarokData";
            readonly components: readonly [{
                readonly name: "callData";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "callTo";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "relayerFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "slippageTol";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "delegate";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "destChainDomainId";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "payFeeWithSendingAsset";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaAmarok";
        readonly inputs: readonly [{
            readonly name: "_bridgeData";
            readonly type: "tuple";
            readonly internalType: "struct ILiFi.BridgeData";
            readonly components: readonly [{
                readonly name: "transactionId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "bridge";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "integrator";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "referrer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receiver";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "minAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationChainId";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "hasSourceSwaps";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "hasDestinationCall";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }, {
            readonly name: "_swapData";
            readonly type: "tuple[]";
            readonly internalType: "struct LibSwap.SwapData[]";
            readonly components: readonly [{
                readonly name: "callTo";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "approveTo";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receivingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "fromAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "callData";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "requiresDeposit";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }, {
            readonly name: "_amarokData";
            readonly type: "tuple";
            readonly internalType: "struct AmarokFacet.AmarokData";
            readonly components: readonly [{
                readonly name: "callData";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "callTo";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "relayerFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "slippageTol";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "delegate";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "destChainDomainId";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "payFeeWithSendingAsset";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "event";
        readonly name: "LiFiGenericSwapCompleted";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "integrator";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "referrer";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "fromAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "toAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "fromAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "toAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiSwappedGeneric";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "integrator";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "referrer";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "fromAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "toAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "fromAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "toAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiTransferCompleted";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "receivingAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "timestamp";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiTransferRecovered";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "receivingAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "timestamp";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiTransferStarted";
        readonly inputs: readonly [{
            readonly name: "bridgeData";
            readonly type: "tuple";
            readonly indexed: false;
            readonly internalType: "struct ILiFi.BridgeData";
            readonly components: readonly [{
                readonly name: "transactionId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "bridge";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "integrator";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "referrer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receiver";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "minAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationChainId";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "hasSourceSwaps";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "hasDestinationCall";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }];
        readonly anonymous: false;
    }, {
        readonly type: "error";
        readonly name: "CannotBridgeToSameNetwork";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ContractCallNotAllowed";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "CumulativeSlippageTooHigh";
        readonly inputs: readonly [{
            readonly name: "minAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "receivedAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }, {
        readonly type: "error";
        readonly name: "InformationMismatch";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InsufficientBalance";
        readonly inputs: readonly [{
            readonly name: "required";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "balance";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }, {
        readonly type: "error";
        readonly name: "InvalidAmount";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidContract";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidReceiver";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NativeAssetNotSupported";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NativeAssetTransferFailed";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NoSwapDataProvided";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NoSwapFromZeroBalance";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NoTransferToNullAddress";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NullAddrIsNotAValidSpender";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NullAddrIsNotAnERC20Token";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ReentrancyError";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "SliceOutOfBounds";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "SliceOverflow";
        readonly inputs: readonly [];
    }];
    static createInterface(): AmarokFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): AmarokFacet;
}
export {};
