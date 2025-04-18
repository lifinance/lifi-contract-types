import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { SymbiosisFacet, SymbiosisFacetInterface } from "../SymbiosisFacet";
declare type SymbiosisFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class SymbiosisFacet__factory extends ContractFactory {
    constructor(...args: SymbiosisFacetConstructorParams);
    deploy(_symbiosisMetaRouter: PromiseOrValue<string>, _symbiosisGateway: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<SymbiosisFacet>;
    getDeployTransaction(_symbiosisMetaRouter: PromiseOrValue<string>, _symbiosisGateway: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): SymbiosisFacet;
    connect(signer: Signer): SymbiosisFacet__factory;
    static readonly bytecode = "0x60c06040523480156200001157600080fd5b506040516200293e3803806200293e833981016040819052620000349162000065565b6001600160a01b039182166080521660a052620000a4565b6001600160a01b03811681146200006257600080fd5b50565b600080604083850312156200007957600080fd5b825162000086816200004c565b602084015190925062000099816200004c565b809150509250929050565b60805160a051612874620000ca60003960006105f80152600061062301526128746000f3fe6080604052600436106100295760003560e01c80636e0671611461002e578063b70fb9a514610043575b600080fd5b61004161003c36600461217f565b610056565b005b61004161005136600461223e565b610249565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100d1576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006100e234476122a2565b905086806101000151610121576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b876101448160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561017b576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036101b9576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036101f6576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61020b89600001518a60c001518a8a3361046d565b60c08a015261021a89876105b5565b504790508181111561023b5761023b60008461023685856122a2565b6108c2565b505060009091555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016102c4576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006102d534476122a2565b9050846102fa8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610331576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c0015160000361036f576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036103ac576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b85806101000151156103ea576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8680610120015115610428576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61043a88608001518960c001516108f8565b61044488886105b5565b5047915050818111156104615761046160008461023685856122a2565b50506000909155505050565b6000828082036104a9576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600085856104b86001856122a2565b8181106104c7576104c76122dc565b90506020028101906104d9919061230b565b6104ea906080810190606001612349565b905060006104f782610a6e565b905073ffffffffffffffffffffffffffffffffffffffff82166105215761051e34826122a2565b90505b600061052d8888610b27565b90506105398888610c33565b6105468a89898985610ca0565b60008261055285610a6e565b61055c91906122a2565b9050898110156105a7576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044015b60405180910390fd5b9a9950505050505050505050565b60006105d9836080015173ffffffffffffffffffffffffffffffffffffffff161590565b9050600081156105ee575060c0830151610621565b61062184608001517f00000000000000000000000000000000000000000000000000000000000000008660c00151611052565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663a11b11988260405180610120016040528087806000019061067a919061236b565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152505050908252506020908101906106c39089018961236b565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050509082525060200161070a60a08901896123d7565b808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152505050908252506020016107516080890160608a01612349565b73ffffffffffffffffffffffffffffffffffffffff16815260200161077c60a0890160808a01612349565b73ffffffffffffffffffffffffffffffffffffffff1681526020018860c00151815260200186151581526020018760c00160208101906107bc9190612349565b73ffffffffffffffffffffffffffffffffffffffff1681526020016107e460e089018961236b565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050509152506040517fffffffff0000000000000000000000000000000000000000000000000000000060e085901b16815261085391906004016124fe565b6000604051808303818588803b15801561086c57600080fd5b505af1158015610880573d6000803e3d6000fd5b50505050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1846040516108b49190612631565b60405180910390a150505050565b73ffffffffffffffffffffffffffffffffffffffff8316156108ee576108e9838383611189565b505050565b6108e9828261130b565b80600003610932576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661098b5780341015610987576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa1580156109f8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a1c9190612744565b905081811015610a62576040517fcf479181000000000000000000000000000000000000000000000000000000008152600481018390526024810182905260440161059e565b6108e983333085611435565b600073ffffffffffffffffffffffffffffffffffffffff821615610b1f576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610af6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b1a9190612744565b610b21565b475b92915050565b60608160008167ffffffffffffffff811115610b4557610b45611f38565b604051908082528060200260200182016040528015610b6e578160200160208202803683370190505b5090506000805b83811015610c2857868682818110610b8f57610b8f6122dc565b9050602002810190610ba1919061230b565b610bb2906080810190606001612349565b9150610bbd82610a6e565b838281518110610bcf57610bcf6122dc565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610c205734838281518110610c0857610c086122dc565b60200260200101818151610c1c91906122a2565b9052505b600101610b75565b509095945050505050565b60005b818110156108e95736838383818110610c5157610c516122dc565b9050602002810190610c63919061230b565b9050610c7560e0820160c0830161275d565b15610c9757610c97610c8d6060830160408401612349565b82608001356108f8565b50600101610c36565b838383838260018114610f6d5760008585610cbc6001856122a2565b818110610ccb57610ccb6122dc565b9050602002810190610cdd919061230b565b610cee906080810190606001612349565b9050600089815b81811015610e9957368d8d83818110610d1057610d106122dc565b9050602002810190610d22919061230b565b9050610d51610d376060830160408401612349565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610db45750610db4610d6a6040830160208401612349565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610dcb5750610dcb610d6a6020830183612349565b8015610e505750610e50610de260a083018361236b565b610df19160049160009161277a565b610dfa916127a4565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610e86576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610e908f8261164f565b50600101610cf5565b505060005b610ea96001856122a2565b811015610f65576000888883818110610ec457610ec46122dc565b9050602002810190610ed6919061230b565b610ee7906080810190606001612349565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610f5c57858281518110610f2e57610f2e6122dc565b6020026020010151610f3f82610a6e565b610f4991906122a2565b92508215610f5c57610f5c8188856108c2565b50600101610e9e565b505050611046565b8760005b8181101561104357368b8b83818110610f8c57610f8c6122dc565b9050602002810190610f9e919061230b565b9050610fb3610d376060830160408401612349565b80610fcc5750610fcc610d6a6040830160208401612349565b8015610fe35750610fe3610d6a6020830183612349565b8015610ffa5750610ffa610de260a083018361236b565b611030576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61103a8d8261164f565b50600101610f71565b50505b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff831661107257505050565b73ffffffffffffffffffffffffffffffffffffffff82166110bf576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa158015611134573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111589190612744565b10156108e9576108e983837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61192d565b73ffffffffffffffffffffffffffffffffffffffff83166111d6576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216611223576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015611290573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112b49190612744565b9050808211156112fa576040517fcf479181000000000000000000000000000000000000000000000000000000008152600481018390526024810182905260440161059e565b611305848484611a9b565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8216611358576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b4781111561139b576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810182905247602482015260440161059e565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d80600081146113f5576040519150601f19603f3d011682016040523d82523d6000602084013e6113fa565b606091505b50509050806108e9576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8416611482576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166114cf576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015611540573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115649190612744565b905061157282868686611af1565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa1580156115e2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116069190612744565b61161091906122a2565b14611647576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b61166561165f6020830183612349565b3b151590565b61169b576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608081013560008190036116db576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006116f0610d376060850160408601612349565b6116fb576000611701565b82608001355b9050600061171d6117186060860160408701612349565b610a6e565b905060006117346117186080870160608801612349565b90508260000361176b5761176b6117516060870160408801612349565b6117616040880160208901612349565b8760800135611052565b84608001358210156117b6576040517fcf479181000000000000000000000000000000000000000000000000000000008152608086013560048201526024810183905260440161059e565b6000806117c66020880188612349565b73ffffffffffffffffffffffffffffffffffffffff16856117ea60a08a018a61236b565b6040516117f89291906127ec565b60006040518083038185875af1925050503d8060008114611835576040519150601f19603f3d011682016040523d82523d6000602084013e61183a565b606091505b50915091508161184d5761184d81611b4f565b600061186261171860808a0160608b01612349565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388961189360208b018b612349565b6118a360608c0160408d01612349565b6118b360808d0160608e01612349565b8c608001358987116118c557866118cf565b6118cf8a886122a2565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b6040805173ffffffffffffffffffffffffffffffffffffffff8416602482015260448082018490528251808303909101815260649091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f095ea7b3000000000000000000000000000000000000000000000000000000001790526119b98482611b59565b6113055760405173ffffffffffffffffffffffffffffffffffffffff8416602482015260006044820152611a919085907f095ea7b300000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611c1a565b6113058482611c1a565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526108e99084907fa9059cbb0000000000000000000000000000000000000000000000000000000090606401611a0f565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526113059085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401611a0f565b8051602082018181fd5b60008060008473ffffffffffffffffffffffffffffffffffffffff1684604051611b8391906127fc565b6000604051808303816000865af19150503d8060008114611bc0576040519150601f19603f3d011682016040523d82523d6000602084013e611bc5565b606091505b5091509150818015611bef575080511580611bef575080806020019051810190611bef919061280e565b8015611c11575073ffffffffffffffffffffffffffffffffffffffff85163b15155b95945050505050565b6000611c7c826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611d299092919063ffffffff16565b9050805160001480611c9d575080806020019051810190611c9d919061280e565b6108e9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f74207375636365656400000000000000000000000000000000000000000000606482015260840161059e565b6060611d388484600085611d40565b949350505050565b606082471015611dd2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c0000000000000000000000000000000000000000000000000000606482015260840161059e565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611dfb91906127fc565b60006040518083038185875af1925050503d8060008114611e38576040519150601f19603f3d011682016040523d82523d6000602084013e611e3d565b606091505b5091509150611e4e87838387611e59565b979650505050505050565b60608315611eef578251600003611ee85773ffffffffffffffffffffffffffffffffffffffff85163b611ee8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161059e565b5081611d38565b611d388383815115611f045781518083602001fd5b806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161059e919061282b565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff81118282101715611f8b57611f8b611f38565b60405290565b600082601f830112611fa257600080fd5b813567ffffffffffffffff80821115611fbd57611fbd611f38565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810190828211818310171561200357612003611f38565b8160405283815286602085880101111561201c57600080fd5b836020870160208301376000602085830101528094505050505092915050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461206057600080fd5b919050565b801515811461207357600080fd5b50565b803561206081612065565b6000610140828403121561209457600080fd5b61209c611f67565b905081358152602082013567ffffffffffffffff808211156120bd57600080fd5b6120c985838601611f91565b602084015260408401359150808211156120e257600080fd5b506120ef84828501611f91565b6040830152506121016060830161203c565b60608201526121126080830161203c565b608082015261212360a0830161203c565b60a082015260c082013560c082015260e082013560e082015261010061214a818401612076565b9082015261012061215c838201612076565b9082015292915050565b6000610100828403121561217957600080fd5b50919050565b6000806000806060858703121561219557600080fd5b843567ffffffffffffffff808211156121ad57600080fd5b6121b988838901612081565b955060208701359150808211156121cf57600080fd5b818701915087601f8301126121e357600080fd5b8135818111156121f257600080fd5b8860208260051b850101111561220757600080fd5b60208301955080945050604087013591508082111561222557600080fd5b5061223287828801612166565b91505092959194509250565b6000806040838503121561225157600080fd5b823567ffffffffffffffff8082111561226957600080fd5b61227586838701612081565b9350602085013591508082111561228b57600080fd5b5061229885828601612166565b9150509250929050565b81810381811115610b21577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2183360301811261233f57600080fd5b9190910192915050565b60006020828403121561235b57600080fd5b6123648261203c565b9392505050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126123a057600080fd5b83018035915067ffffffffffffffff8211156123bb57600080fd5b6020019150368190038213156123d057600080fd5b9250929050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261240c57600080fd5b83018035915067ffffffffffffffff82111561242757600080fd5b6020019150600581901b36038213156123d057600080fd5b60005b8381101561245a578181015183820152602001612442565b50506000910152565b6000815180845261247b81602086016020860161243f565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b600081518084526020808501945080840160005b838110156124f357815173ffffffffffffffffffffffffffffffffffffffff16875295820195908201906001016124c1565b509495945050505050565b602081526000825161012080602085015261251d610140850183612463565b915060208501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0808685030160408701526125598483612463565b9350604087015191508086850301606087015261257684836124ad565b9350606087015191506125a1608087018373ffffffffffffffffffffffffffffffffffffffff169052565b608087015173ffffffffffffffffffffffffffffffffffffffff811660a0880152915060a087015160c087015260c087015191506125e360e087018315159052565b60e0870151915061010061260e8188018473ffffffffffffffffffffffffffffffffffffffff169052565b8701518685039091018387015290506126278382612463565b9695505050505050565b60208152815160208201526000602083015161014080604085015261265a610160850183612463565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08584030160608601526126958382612463565b92505060608501516126bf608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206127328187018315159052565b90950151151593019290925250919050565b60006020828403121561275657600080fd5b5051919050565b60006020828403121561276f57600080fd5b813561236481612065565b6000808585111561278a57600080fd5b8386111561279757600080fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156127e45780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b6000825161233f81846020870161243f565b60006020828403121561282057600080fd5b815161236481612065565b602081526000612364602083018461246356fea264697066735822122053b351d977041698c062dc953bb295cfbeaceca1cccad28c059e5dee208751c864736f6c63430008110033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_symbiosisMetaRouter";
            readonly type: "address";
            readonly internalType: "contract ISymbiosisMetaRouter";
        }, {
            readonly name: "_symbiosisGateway";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaSymbiosis";
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
            readonly name: "_symbiosisData";
            readonly type: "tuple";
            readonly internalType: "struct SymbiosisFacet.SymbiosisData";
            readonly components: readonly [{
                readonly name: "firstSwapCalldata";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "secondSwapCalldata";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "intermediateToken";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "firstDexRouter";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "secondDexRouter";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "approvedTokens";
                readonly type: "address[]";
                readonly internalType: "address[]";
            }, {
                readonly name: "callTo";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "callData";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaSymbiosis";
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
            readonly name: "_symbiosisData";
            readonly type: "tuple";
            readonly internalType: "struct SymbiosisFacet.SymbiosisData";
            readonly components: readonly [{
                readonly name: "firstSwapCalldata";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "secondSwapCalldata";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "intermediateToken";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "firstDexRouter";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "secondDexRouter";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "approvedTokens";
                readonly type: "address[]";
                readonly internalType: "address[]";
            }, {
                readonly name: "callTo";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "callData";
                readonly type: "bytes";
                readonly internalType: "bytes";
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
    }];
    static createInterface(): SymbiosisFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): SymbiosisFacet;
}
export {};
