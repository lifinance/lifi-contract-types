import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { TestHopFacet, TestHopFacetInterface } from "../../HopFacet.t.sol/TestHopFacet";
declare type TestHopFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class TestHopFacet__factory extends ContractFactory {
    constructor(...args: TestHopFacetConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<TestHopFacet>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): TestHopFacet;
    connect(signer: Signer): TestHopFacet__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b50613179806100206000396000f3fe6080604052600436106100655760003560e01c8063c561c14811610043578063c561c148146100cc578063e55f8110146100ec578063fa904c12146100ff57600080fd5b80633961d1ed1461006a578063536db2661461008c57806367fdd71e146100ac575b600080fd5b34801561007657600080fd5b5061008a6100853660046126da565b610112565b005b34801561009857600080fd5b5061008a6100a736600461270d565b61026f565b3480156100b857600080fd5b5061008a6100c7366004612728565b61027b565b3480156100d857600080fd5b5061008a6100e736600461279d565b6104b0565b61008a6100fa366004612ab4565b61052e565b61008a61010d366004612b60565b610773565b61011a6109bd565b7f6d21be7f069eba22e6227bbf0972cf4a3ee2f0ce81ad8bd8004228e83b4830b9547f6d21be7f069eba22e6227bbf0972cf4a3ee2f0ce81ad8bd8004228e83b4830b89060ff16610197576040517f87138d5c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166101e4576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8381166000818152602084815260409182902080547fffffffffffffffffffffffff0000000000000000000000000000000000000000169487169485179055905192835290917fcf56a25ddc5c325bc2d2557f7eee90d061f2e19b7294a6ef738f86f2c3d9280c910160405180910390a2505050565b61027881610a32565b50565b6102836109bd565b7f6d21be7f069eba22e6227bbf0972cf4a3ee2f0ce81ad8bd8004228e83b4830b9547f6d21be7f069eba22e6227bbf0972cf4a3ee2f0ce81ad8bd8004228e83b4830b89060ff1615610301576040517f0dc149f000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60005b8281101561044257600084848381811061032057610320612bd8565b9050604002016020016020810190610338919061270d565b73ffffffffffffffffffffffffffffffffffffffff1603610385576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b83838281811061039757610397612bd8565b90506040020160200160208101906103af919061270d565b8260008686858181106103c4576103c4612bd8565b6103da926020604090920201908101915061270d565b73ffffffffffffffffffffffffffffffffffffffff9081168252602082019290925260400160002080547fffffffffffffffffffffffff000000000000000000000000000000000000000016929091169190911790558061043a81612c36565b915050610304565b50600181810180547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001690911790556040517f5910f57b2fdae9f2f45a1d913c63f55985d0f77d120de8aab63e686ff670dde3906104a39085908590612c6e565b60405180910390a1505050565b610278817fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f6020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016105a9576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006105ba3447612cdd565b9050868061010001516105f9576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8780610120015115610637576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8861065a8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610691576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036106cf576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361070c576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6107218a600001518b60c001518b8b33610b1f565b60c08b01526107308a88610c67565b5047915060009050828211610746576000610750565b6107508383612cdd565b905080156107645761076460008583610ee7565b50506000909255505050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016107ee576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006107ff3447612cdd565b9050848061010001511561083f576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b858061012001511561087d576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b866108a08160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156108d7576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c00151600003610915576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610952576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61096488608001518960c00151610f1d565b61097c88610977368a90038a018a612cf0565b610c67565b504791506000905082821161099257600061099c565b61099c8383612cdd565b905080156109b0576109b060008583610ee7565b5050600090925550505050565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c6004015473ffffffffffffffffffffffffffffffffffffffff163314610a30576040517f277d76f800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b610a3b81611093565b73ffffffffffffffffffffffffffffffffffffffff811660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602081905260409091205460ff1615610a8f575050565b73ffffffffffffffffffffffffffffffffffffffff909116600081815260208381526040822080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660019081179091556002909401805494850181558252902090910180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169091179055565b600082808203610b5b576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008585610b6a600185612cdd565b818110610b7957610b79612bd8565b9050602002810190610b8b9190612d0c565b610b9c90608081019060600161270d565b90506000610ba982611131565b905073ffffffffffffffffffffffffffffffffffffffff8216610bd357610bd03482612cdd565b90505b6000610bdf88886111ea565b9050610beb88886112f6565b610bf88a89898985611357565b600082610c0485611131565b610c0e9190612cdd565b905089811015610c59576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044015b60405180910390fd5b9a9950505050505050505050565b608082015173ffffffffffffffffffffffffffffffffffffffff80821660009081527f6d21be7f069eba22e6227bbf0972cf4a3ee2f0ce81ad8bd8004228e83b4830b8602081905260409091205460c086015191921690610ccb9084908390611709565b600073ffffffffffffffffffffffffffffffffffffffff841615610cf0576000610cf6565b8560c001515b905046600103610dc95760e086015160a087015160c0880151606088015160808901516040517fdeace8f5000000000000000000000000000000000000000000000000000000008152600481019590955273ffffffffffffffffffffffffffffffffffffffff9384166024860152604485019290925260648401526084830152600060a4830181905260c483015283169063deace8f590839060e4016000604051808303818588803b158015610dab57600080fd5b505af1158015610dbf573d6000803e3d6000fd5b5050505050610ea8565b60e086015160a087015160c0880151875160208901516040808b015160608c015160808d015192517feea0d7b2000000000000000000000000000000000000000000000000000000008152600481019890985273ffffffffffffffffffffffffffffffffffffffff968716602489015260448801959095526064870193909352608486019190915260a485019190915260c484019190915260e483015283169063eea0d7b2908390610104016000604051808303818588803b158015610e8e57600080fd5b505af1158015610ea2573d6000803e3d6000fd5b50505050505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f186604051610ed79190612db8565b60405180910390a1505050505050565b73ffffffffffffffffffffffffffffffffffffffff831615610f1357610f0e838383611854565b505050565b610f0e8282611983565b73ffffffffffffffffffffffffffffffffffffffff8216610f765780341015610f72576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b80600003610fb0576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa15801561101d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110419190612ecb565b905081811015611087576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610c50565b610f0e83333085611aad565b73ffffffffffffffffffffffffffffffffffffffff81166110e0576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff163b600003610278576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff8216156111e2576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa1580156111b9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111dd9190612ecb565b6111e4565b475b92915050565b60608160008167ffffffffffffffff811115611208576112086127df565b604051908082528060200260200182016040528015611231578160200160208202803683370190505b5090506000805b838110156112eb5786868281811061125257611252612bd8565b90506020028101906112649190612d0c565b61127590608081019060600161270d565b915061128082611131565b83828151811061129257611292612bd8565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff82166112e357348382815181106112cb576112cb612bd8565b602002602001018181516112df9190612cdd565b9052505b600101611238565b509095945050505050565b60005b81811015610f0e57600083838381811061131557611315612bd8565b90506020028101906113279190612d0c565b61133090612ee4565b90508060c001511561134e5761134e81604001518260800151610f1d565b506001016112f9565b8383838382600181146116245760008585611373600185612cdd565b81811061138257611382612bd8565b90506020028101906113949190612d0c565b6113a590608081019060600161270d565b9050600089815b8181101561155057368d8d838181106113c7576113c7612bd8565b90506020028101906113d99190612d0c565b90506114086113ee606083016040840161270d565b73ffffffffffffffffffffffffffffffffffffffff161590565b8061146b575061146b611421604083016020840161270d565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b80156114825750611482611421602083018361270d565b8015611507575061150761149960a0830183612f89565b6114a891600491600091612ff5565b6114b19161301f565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b61153d576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6115478f82611cc7565b506001016113ac565b505060005b611560600185612cdd565b81101561161c57600088888381811061157b5761157b612bd8565b905060200281019061158d9190612d0c565b61159e90608081019060600161270d565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614611613578582815181106115e5576115e5612bd8565b60200260200101516115f682611131565b6116009190612cdd565b9250821561161357611613818885610ee7565b50600101611555565b5050506116fd565b8760005b818110156116fa57368b8b8381811061164357611643612bd8565b90506020028101906116559190612d0c565b905061166a6113ee606083016040840161270d565b806116835750611683611421604083016020840161270d565b801561169a575061169a611421602083018361270d565b80156116b157506116b161149960a0830183612f89565b6116e7576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6116f18d82611cc7565b50600101611628565b50505b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff831661172957505050565b73ffffffffffffffffffffffffffffffffffffffff8216611776576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff83811660248301526000919085169063dd62ed3e90604401602060405180830381865afa1580156117ec573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118109190612ecb565b90508181101561184e5761184e8484611849847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff612cdd565b611fdd565b50505050565b73ffffffffffffffffffffffffffffffffffffffff83166118a1576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa15801561190e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119329190612ecb565b905080821115611978576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610c50565b61184e848484612159565b73ffffffffffffffffffffffffffffffffffffffff82166119d0576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b47811115611a13576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101829052476024820152604401610c50565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114611a6d576040519150601f19603f3d011682016040523d82523d6000602084013e611a72565b606091505b5050905080610f0e576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8416611afa576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216611b47576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015611bb8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611bdc9190612ecb565b9050611bea828686866121af565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015611c5a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611c7e9190612ecb565b611c889190612cdd565b14611cbf576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b611cdd611cd7602083018361270d565b3b151590565b611d13576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101356000819003611d53576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000611d686113ee606085016040860161270d565b611d73576000611d79565b82608001355b90506000611d95611d90606086016040870161270d565b611131565b90506000611dac611d90608087016060880161270d565b905082600003611de357611de3611dc9606087016040880161270d565b611dd9604088016020890161270d565b8760800135611709565b8460800135821015611e2e576040517fcf4791810000000000000000000000000000000000000000000000000000000081526080860135600482015260248101839052604401610c50565b600080611e3e602088018861270d565b73ffffffffffffffffffffffffffffffffffffffff1685611e6260a08a018a612f89565b604051611e70929190613067565b60006040518083038185875af1925050503d8060008114611ead576040519150601f19603f3d011682016040523d82523d6000602084013e611eb2565b606091505b509150915081611efd576000611ec78261220d565b9050806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c509190613077565b6000611f12611d9060808a0160608b0161270d565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b3889611f4360208b018b61270d565b611f5360608c0160408d0161270d565b611f6360808d0160608e0161270d565b8c60800135898711611f755786611f7f565b611f7f8a88612cdd565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8381166024830152600091839186169063dd62ed3e90604401602060405180830381865afa158015612054573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906120789190612ecb565b612082919061308a565b60405173ffffffffffffffffffffffffffffffffffffffff851660248201526044810182905290915061184e9085907f095ea7b300000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff000000000000000000000000000000000000000000000000000000009093169290921790915261228b565b60405173ffffffffffffffffffffffffffffffffffffffff8316602482015260448101829052610f0e9084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064016120d7565b60405173ffffffffffffffffffffffffffffffffffffffff8085166024830152831660448201526064810182905261184e9085907f23b872dd00000000000000000000000000000000000000000000000000000000906084016120d7565b606060448251101561225257505060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c79000000602082015290565b600061226e60048085516122669190612cdd565b859190612397565b905080806020019051810190612284919061309d565b9392505050565b60006122ed826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166124b19092919063ffffffff16565b805190915015610f0e578080602001905181019061230b9190613114565b610f0e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610c50565b6060816123a581601f61308a565b10156123dd576040517f47aaf07a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6123e7828461308a565b84511015612421576040517f3b99b53d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60608215801561244057604051915060008252602082016040526124a8565b6040519150601f8416801560200281840101858101878315602002848b0101015b81831015612479578051835260209283019201612461565b5050858452601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016604052505b50949350505050565b60606124c084846000856124c8565b949350505050565b60608247101561255a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610c50565b73ffffffffffffffffffffffffffffffffffffffff85163b6125d8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610c50565b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516126019190613131565b60006040518083038185875af1925050503d806000811461263e576040519150601f19603f3d011682016040523d82523d6000602084013e612643565b606091505b509150915061265382828661265e565b979650505050505050565b6060831561266d575081612284565b82511561267d5782518084602001fd5b816040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c509190613077565b803573ffffffffffffffffffffffffffffffffffffffff811681146126d557600080fd5b919050565b600080604083850312156126ed57600080fd5b6126f6836126b1565b9150612704602084016126b1565b90509250929050565b60006020828403121561271f57600080fd5b612284826126b1565b6000806020838503121561273b57600080fd5b823567ffffffffffffffff8082111561275357600080fd5b818501915085601f83011261276757600080fd5b81358181111561277657600080fd5b8660208260061b850101111561278b57600080fd5b60209290920196919550909350505050565b6000602082840312156127af57600080fd5b81357fffffffff000000000000000000000000000000000000000000000000000000008116811461228457600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff81118282101715612832576128326127df565b60405290565b60405160e0810167ffffffffffffffff81118282101715612832576128326127df565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff811182821017156128a2576128a26127df565b604052919050565b600067ffffffffffffffff8211156128c4576128c46127df565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600082601f83011261290157600080fd5b813561291461290f826128aa565b61285b565b81815284602083860101111561292957600080fd5b816020850160208301376000918101602001919091529392505050565b801515811461027857600080fd5b80356126d581612946565b6000610140828403121561297257600080fd5b61297a61280e565b905081358152602082013567ffffffffffffffff8082111561299b57600080fd5b6129a7858386016128f0565b602084015260408401359150808211156129c057600080fd5b506129cd848285016128f0565b6040830152506129df606083016126b1565b60608201526129f0608083016126b1565b6080820152612a0160a083016126b1565b60a082015260c082013560c082015260e082013560e0820152610100612a28818401612954565b90820152610120612a3a838201612954565b9082015292915050565b600060a08284031215612a5657600080fd5b60405160a0810181811067ffffffffffffffff82111715612a7957612a796127df565b806040525080915082358152602083013560208201526040830135604082015260608301356060820152608083013560808201525092915050565b60008060008060e08587031215612aca57600080fd5b843567ffffffffffffffff80821115612ae257600080fd5b612aee8883890161295f565b95506020870135915080821115612b0457600080fd5b818701915087601f830112612b1857600080fd5b813581811115612b2757600080fd5b8860208260051b8501011115612b3c57600080fd5b602083019550809450505050612b558660408701612a44565b905092959194509250565b60008082840360c0811215612b7457600080fd5b833567ffffffffffffffff811115612b8b57600080fd5b612b978682870161295f565b93505060a07fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe082011215612bca57600080fd5b506020830190509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203612c6757612c67612c07565b5060010190565b6020808252818101839052600090604080840186845b87811015612cd05773ffffffffffffffffffffffffffffffffffffffff80612cab846126b1565b16845280612cba8785016126b1565b1684870152509183019190830190600101612c84565b5090979650505050505050565b818103818111156111e4576111e4612c07565b600060a08284031215612d0257600080fd5b6122848383612a44565b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112612d4057600080fd5b9190910192915050565b60005b83811015612d65578181015183820152602001612d4d565b50506000910152565b60008151808452612d86816020860160208601612d4a565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b602081528151602082015260006020830151610140806040850152612de1610160850183612d6e565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0858403016060860152612e1c8382612d6e565b9250506060850151612e46608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e0850151610100818187015280870151915050610120612eb98187018315159052565b90950151151593019290925250919050565b600060208284031215612edd57600080fd5b5051919050565b600060e08236031215612ef657600080fd5b612efe612838565b612f07836126b1565b8152612f15602084016126b1565b6020820152612f26604084016126b1565b6040820152612f37606084016126b1565b60608201526080830135608082015260a083013567ffffffffffffffff811115612f6057600080fd5b612f6c368286016128f0565b60a083015250612f7e60c08401612954565b60c082015292915050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112612fbe57600080fd5b83018035915067ffffffffffffffff821115612fd957600080fd5b602001915036819003821315612fee57600080fd5b9250929050565b6000808585111561300557600080fd5b8386111561301257600080fd5b5050820193919092039150565b7fffffffff00000000000000000000000000000000000000000000000000000000813581811691600485101561305f5780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b6020815260006122846020830184612d6e565b808201808211156111e4576111e4612c07565b6000602082840312156130af57600080fd5b815167ffffffffffffffff8111156130c657600080fd5b8201601f810184136130d757600080fd5b80516130e561290f826128aa565b8181528560208385010111156130fa57600080fd5b61310b826020830160208601612d4a565b95945050505050565b60006020828403121561312657600080fd5b815161228481612946565b60008251612d40818460208701612d4a56fea2646970667358221220e50a75f1933af4507ba853b6ec608fe511ed026b1871fcc1e0fbb5b12b105ada64736f6c63430008110033";
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        anonymous?: undefined;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    } | {
        inputs: {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): TestHopFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): TestHopFacet;
}
export {};
