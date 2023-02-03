import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { TestMultichainFacet, TestMultichainFacetInterface } from "../../MultiChainFacet.t.sol/TestMultichainFacet";
declare type TestMultichainFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class TestMultichainFacet__factory extends ContractFactory {
    constructor(...args: TestMultichainFacetConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<TestMultichainFacet>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): TestMultichainFacet;
    connect(signer: Signer): TestMultichainFacet__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b50613712806100206000396000f3fe6080604052600436106100705760003560e01c8063c561c1481161004e578063c561c148146100ca578063dcd5733b146100ea578063dfd830901461010a578063ef55f6dd1461012a57600080fd5b8063536db26614610075578063a342d3ff14610097578063bcd733b3146100aa575b600080fd5b34801561008157600080fd5b50610095610090366004612b76565b61013d565b005b6100956100a5366004612e8e565b610149565b3480156100b657600080fd5b506100956100c5366004612f0a565b610411565b3480156100d657600080fd5b506100956100e5366004612f7f565b6105b4565b3480156100f657600080fd5b50610095610105366004612fc1565b610632565b34801561011657600080fd5b5061009561012536600461302d565b61082b565b610095610138366004613080565b610a91565b61014681610d8d565b50565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016101c4576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006101d53447613127565b905086806101000151610214576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8780610120015115610252576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886102758160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156102ac576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036102ea576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610327576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b865173ffffffffffffffffffffffffffffffffffffffff1660009081527f1ee407b3d26d6d639b123c41c4a76edbb0ed1dd9e1bbd835fcab743f9a070b72602081905260409091205460ff166103a9576040517f466d7fef00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6103be8b600001518c60c001518c8c33610e7a565b60c08c01526103cd8b89610fc2565b5047925060009150508282116103e45760006103ee565b6103ee8383613127565b90508015610402576104026000858361130e565b50506000909255505050505050565b610419611344565b7f1ee407b3d26d6d639b123c41c4a76edbb0ed1dd9e1bbd835fcab743f9a070b73547f1ee407b3d26d6d639b123c41c4a76edbb0ed1dd9e1bbd835fcab743f9a070b729060ff16610496576040517f87138d5c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60005b67ffffffffffffffff81168311156105755783838267ffffffffffffffff168181106104c7576104c761313a565b90506040020160200160208101906104df9190612b76565b82600201600086868567ffffffffffffffff168181106105015761050161313a565b6105179260206040909202019081019150612b76565b73ffffffffffffffffffffffffffffffffffffffff9081168252602082019290925260400160002080547fffffffffffffffffffffffff00000000000000000000000000000000000000001692909116919091179055600101610499565b507fbcc160cb920b2b041ee8915122941375065d36950ffc1d026789ac3db33d7efc83836040516105a7929190613169565b60405180910390a1505050565b610146817fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f6020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055565b61063a611344565b7f1ee407b3d26d6d639b123c41c4a76edbb0ed1dd9e1bbd835fcab743f9a070b73547f1ee407b3d26d6d639b123c41c4a76edbb0ed1dd9e1bbd835fcab743f9a070b729060ff166106b7576040517f87138d5c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8360005b818110156107e55760008787838181106106d7576106d761313a565b90506020020160208101906106ec9190612b76565b73ffffffffffffffffffffffffffffffffffffffff1603610739576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b84848281811061074b5761074b61313a565b905060200201602081019061076091906131d8565b8360008989858181106107755761077561313a565b905060200201602081019061078a9190612b76565b73ffffffffffffffffffffffffffffffffffffffff168152602081019190915260400160002080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00169115159190911790556001016106bb565b507f2c54db8b386392c78501cad30dd4571a5a59d23826fc1053f2f620621909c3da8686868660405161081b94939291906131f5565b60405180910390a1505050505050565b610833611344565b7f1ee407b3d26d6d639b123c41c4a76edbb0ed1dd9e1bbd835fcab743f9a070b7273ffffffffffffffffffffffffffffffffffffffff84166108a1576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018101805473ffffffffffffffffffffffffffffffffffffffff8616610100027fffffffffffffffffffffff0000000000000000000000000000000000000000ff8216811790925560ff91821691161715610929576040517f0dc149f000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8160005b81811015610a325760008585838181106109495761094961313a565b905060200201602081019061095e9190612b76565b73ffffffffffffffffffffffffffffffffffffffff16036109ab576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018360008787858181106109c2576109c261313a565b90506020020160208101906109d79190612b76565b73ffffffffffffffffffffffffffffffffffffffff168152602081019190915260400160002080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001691151591909117905560010161092d565b50600182810180547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001690911790556040517fe51c1d2eff84ab6f9ee1bd80996062dc0cb46f36d7becb600280a7083294908890600090a15050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610b0c576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155336000610b1d3447613127565b90508480610100015115610b5d576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8580610120015115610b9b576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b86610bbe8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610bf5576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c00151600003610c33576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610c70576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b7f1ee407b3d26d6d639b123c41c4a76edbb0ed1dd9e1bbd835fcab743f9a070b72806000610ca160208b018b612b76565b73ffffffffffffffffffffffffffffffffffffffff16815260208101919091526040016000205460ff16610d01576040517f466d7fef00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608089015173ffffffffffffffffffffffffffffffffffffffff1615610d3357610d3389608001518a60c001516113b9565b610d4b89610d46368b90038b018b613290565b610fc2565b504792506000915050828211610d62576000610d6c565b610d6c8383613127565b90508015610d8057610d806000858361130e565b5050600090925550505050565b610d968161152f565b73ffffffffffffffffffffffffffffffffffffffff811660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602081905260409091205460ff1615610dea575050565b73ffffffffffffffffffffffffffffffffffffffff909116600081815260208381526040822080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660019081179091556002909401805494850181558252902090910180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169091179055565b600082808203610eb6576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008585610ec5600185613127565b818110610ed457610ed461313a565b9050602002810190610ee691906132ac565b610ef7906080810190606001612b76565b90506000610f04826115cd565b905073ffffffffffffffffffffffffffffffffffffffff8216610f2e57610f2b3482613127565b90505b6000610f3a8888611686565b9050610f468888611792565b610f538a898989856117f3565b600082610f5f856115cd565b610f699190613127565b905089811015610fb4576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044015b60405180910390fd5b9a9950505050505050505050565b816080015173ffffffffffffffffffffffffffffffffffffffff16816000015173ffffffffffffffffffffffffffffffffffffffff16036110ad57608082015160c083015160a08401516040517f628d6cba000000000000000000000000000000000000000000000000000000008152600481019290925273ffffffffffffffffffffffffffffffffffffffff90811660248301529091169063628d6cba906044016020604051808303816000875af1158015611083573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110a791906132ea565b506112d3565b60808201517f1ee407b3d26d6d639b123c41c4a76edbb0ed1dd9e1bbd835fcab743f9a070b729073ffffffffffffffffffffffffffffffffffffffff1661119d57815160c0840151600183015460a086015160e08701516040517fa5e5657100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff610100909404841660048201529183166024830152604482015292169163a5e5657191906064016000604051808303818588803b15801561117f57600080fd5b505af1158015611193573d6000803e3d6000fd5b50505050506112d1565b6111b4836080015183600001518560c00151611ba5565b8151608084015173ffffffffffffffffffffffffffffffffffffffff90811660009081526002840160205260409020549181169163edbdf5e291166111fd57846080015161122d565b608085015173ffffffffffffffffffffffffffffffffffffffff9081166000908152600285016020526040902054165b60a086015160c087015160e0808901516040519186901b7fffffffff0000000000000000000000000000000000000000000000000000000016825273ffffffffffffffffffffffffffffffffffffffff948516600483015293909216602483015260448201526064810191909152608401600060405180830381600087803b1580156112b857600080fd5b505af11580156112cc573d6000803e3d6000fd5b505050505b505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1826040516113029190613375565b60405180910390a15050565b73ffffffffffffffffffffffffffffffffffffffff83161561133a57611335838383611cf0565b505050565b6113358282611e1f565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c6004015473ffffffffffffffffffffffffffffffffffffffff1633146113b7576040517f277d76f800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b73ffffffffffffffffffffffffffffffffffffffff8216611412578034101561140e576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b8060000361144c576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa1580156114b9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114dd9190613488565b905081811015611523576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610fab565b61133583333085611f49565b73ffffffffffffffffffffffffffffffffffffffff811661157c576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff163b600003610146576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff82161561167e576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015611655573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116799190613488565b611680565b475b92915050565b60608160008167ffffffffffffffff8111156116a4576116a4612b91565b6040519080825280602002602001820160405280156116cd578160200160208202803683370190505b5090506000805b83811015611787578686828181106116ee576116ee61313a565b905060200281019061170091906132ac565b611711906080810190606001612b76565b915061171c826115cd565b83828151811061172e5761172e61313a565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff821661177f57348382815181106117675761176761313a565b6020026020010181815161177b9190613127565b9052505b6001016116d4565b509095945050505050565b60005b818110156113355760008383838181106117b1576117b161313a565b90506020028101906117c391906132ac565b6117cc906134a1565b90508060c00151156117ea576117ea816040015182608001516113b9565b50600101611795565b838383838260018114611ac0576000858561180f600185613127565b81811061181e5761181e61313a565b905060200281019061183091906132ac565b611841906080810190606001612b76565b9050600089815b818110156119ec57368d8d838181106118635761186361313a565b905060200281019061187591906132ac565b90506118a461188a6060830160408401612b76565b73ffffffffffffffffffffffffffffffffffffffff161590565b8061190757506119076118bd6040830160208401612b76565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b801561191e575061191e6118bd6020830183612b76565b80156119a357506119a361193560a0830183613546565b611944916004916000916135ab565b61194d916135d5565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b6119d9576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6119e38f82612163565b50600101611848565b505060005b6119fc600185613127565b811015611ab8576000888883818110611a1757611a1761313a565b9050602002810190611a2991906132ac565b611a3a906080810190606001612b76565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614611aaf57858281518110611a8157611a8161313a565b6020026020010151611a92826115cd565b611a9c9190613127565b92508215611aaf57611aaf81888561130e565b506001016119f1565b505050611b99565b8760005b81811015611b9657368b8b83818110611adf57611adf61313a565b9050602002810190611af191906132ac565b9050611b0661188a6060830160408401612b76565b80611b1f5750611b1f6118bd6040830160208401612b76565b8015611b365750611b366118bd6020830183612b76565b8015611b4d5750611b4d61193560a0830183613546565b611b83576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611b8d8d82612163565b50600101611ac4565b50505b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316611bc557505050565b73ffffffffffffffffffffffffffffffffffffffff8216611c12576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff83811660248301526000919085169063dd62ed3e90604401602060405180830381865afa158015611c88573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611cac9190613488565b905081811015611cea57611cea8484611ce5847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff613127565b612479565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8316611d3d576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015611daa573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611dce9190613488565b905080821115611e14576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610fab565b611cea8484846125f5565b73ffffffffffffffffffffffffffffffffffffffff8216611e6c576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b47811115611eaf576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101829052476024820152604401610fab565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114611f09576040519150601f19603f3d011682016040523d82523d6000602084013e611f0e565b606091505b5050905080611335576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8416611f96576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216611fe3576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015612054573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906120789190613488565b90506120868286868661264b565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa1580156120f6573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061211a9190613488565b6121249190613127565b1461215b576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b6121796121736020830183612b76565b3b151590565b6121af576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608081013560008190036121ef576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600061220461188a6060850160408601612b76565b61220f576000612215565b82608001355b9050600061223161222c6060860160408701612b76565b6115cd565b9050600061224861222c6080870160608801612b76565b90508260000361227f5761227f6122656060870160408801612b76565b6122756040880160208901612b76565b8760800135611ba5565b84608001358210156122ca576040517fcf4791810000000000000000000000000000000000000000000000000000000081526080860135600482015260248101839052604401610fab565b6000806122da6020880188612b76565b73ffffffffffffffffffffffffffffffffffffffff16856122fe60a08a018a613546565b60405161230c92919061361d565b60006040518083038185875af1925050503d8060008114612349576040519150601f19603f3d011682016040523d82523d6000602084013e61234e565b606091505b509150915081612399576000612363826126a9565b9050806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fab919061362d565b60006123ae61222c60808a0160608b01612b76565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b38896123df60208b018b612b76565b6123ef60608c0160408d01612b76565b6123ff60808d0160608e01612b76565b8c60800135898711612411578661241b565b61241b8a88613127565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8381166024830152600091839186169063dd62ed3e90604401602060405180830381865afa1580156124f0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906125149190613488565b61251e9190613640565b60405173ffffffffffffffffffffffffffffffffffffffff8516602482015260448101829052909150611cea9085907f095ea7b300000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152612727565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526113359084907fa9059cbb0000000000000000000000000000000000000000000000000000000090606401612573565b60405173ffffffffffffffffffffffffffffffffffffffff80851660248301528316604482015260648101829052611cea9085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401612573565b60606044825110156126ee57505060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c79000000602082015290565b600061270a60048085516127029190613127565b859190612833565b9050808060200190518101906127209190613653565b9392505050565b6000612789826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff1661294d9092919063ffffffff16565b80519091501561133557808060200190518101906127a791906132ea565b611335576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610fab565b60608161284181601f613640565b1015612879576040517f47aaf07a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6128838284613640565b845110156128bd576040517f3b99b53d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6060821580156128dc5760405191506000825260208201604052612944565b6040519150601f8416801560200281840101858101878315602002848b0101015b818310156129155780518352602092830192016128fd565b5050858452601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016604052505b50949350505050565b606061295c8484600085612964565b949350505050565b6060824710156129f6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610fab565b73ffffffffffffffffffffffffffffffffffffffff85163b612a74576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610fab565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051612a9d91906136ca565b60006040518083038185875af1925050503d8060008114612ada576040519150601f19603f3d011682016040523d82523d6000602084013e612adf565b606091505b5091509150612aef828286612afa565b979650505050505050565b60608315612b09575081612720565b825115612b195782518084602001fd5b816040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fab919061362d565b803573ffffffffffffffffffffffffffffffffffffffff81168114612b7157600080fd5b919050565b600060208284031215612b8857600080fd5b61272082612b4d565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff81118282101715612be457612be4612b91565b60405290565b60405160e0810167ffffffffffffffff81118282101715612be457612be4612b91565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715612c5457612c54612b91565b604052919050565b600067ffffffffffffffff821115612c7657612c76612b91565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600082601f830112612cb357600080fd5b8135612cc6612cc182612c5c565b612c0d565b818152846020838601011115612cdb57600080fd5b816020850160208301376000918101602001919091529392505050565b801515811461014657600080fd5b8035612b7181612cf8565b60006101408284031215612d2457600080fd5b612d2c612bc0565b905081358152602082013567ffffffffffffffff80821115612d4d57600080fd5b612d5985838601612ca2565b60208401526040840135915080821115612d7257600080fd5b50612d7f84828501612ca2565b604083015250612d9160608301612b4d565b6060820152612da260808301612b4d565b6080820152612db360a08301612b4d565b60a082015260c082013560c082015260e082013560e0820152610100612dda818401612d06565b90820152610120612dec838201612d06565b9082015292915050565b60008083601f840112612e0857600080fd5b50813567ffffffffffffffff811115612e2057600080fd5b6020830191508360208260051b8501011115612e3b57600080fd5b9250929050565b600060208284031215612e5457600080fd5b6040516020810181811067ffffffffffffffff82111715612e7757612e77612b91565b604052905080612e8683612b4d565b905292915050565b60008060008060608587031215612ea457600080fd5b843567ffffffffffffffff80821115612ebc57600080fd5b612ec888838901612d11565b95506020870135915080821115612ede57600080fd5b50612eeb87828801612df6565b9094509250612eff90508660408701612e42565b905092959194509250565b60008060208385031215612f1d57600080fd5b823567ffffffffffffffff80821115612f3557600080fd5b818501915085601f830112612f4957600080fd5b813581811115612f5857600080fd5b8660208260061b8501011115612f6d57600080fd5b60209290920196919550909350505050565b600060208284031215612f9157600080fd5b81357fffffffff000000000000000000000000000000000000000000000000000000008116811461272057600080fd5b60008060008060408587031215612fd757600080fd5b843567ffffffffffffffff80821115612fef57600080fd5b612ffb88838901612df6565b9096509450602087013591508082111561301457600080fd5b5061302187828801612df6565b95989497509550505050565b60008060006040848603121561304257600080fd5b61304b84612b4d565b9250602084013567ffffffffffffffff81111561306757600080fd5b61307386828701612df6565b9497909650939450505050565b600080828403604081121561309457600080fd5b833567ffffffffffffffff8111156130ab57600080fd5b6130b786828701612d11565b93505060207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0820112156130ea57600080fd5b506020830190509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b81810381811115611680576116806130f8565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020808252818101839052600090604080840186845b878110156131cb5773ffffffffffffffffffffffffffffffffffffffff806131a684612b4d565b168452806131b5878501612b4d565b168487015250918301919083019060010161317f565b5090979650505050505050565b6000602082840312156131ea57600080fd5b813561272081612cf8565b6040808252810184905260008560608301825b878110156132435773ffffffffffffffffffffffffffffffffffffffff61322e84612b4d565b16825260209283019290910190600101613208565b5083810360208581019190915285825291508590820160005b8681101561328357823561326f81612cf8565b15158252918301919083019060010161325c565b5098975050505050505050565b6000602082840312156132a257600080fd5b6127208383612e42565b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff218336030181126132e057600080fd5b9190910192915050565b6000602082840312156132fc57600080fd5b815161272081612cf8565b60005b8381101561332257818101518382015260200161330a565b50506000910152565b60008151808452613343816020860160208601613307565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b60208152815160208201526000602083015161014080604085015261339e61016085018361332b565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08584030160608601526133d9838261332b565b9250506060850151613403608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206134768187018315159052565b90950151151593019290925250919050565b60006020828403121561349a57600080fd5b5051919050565b600060e082360312156134b357600080fd5b6134bb612bea565b6134c483612b4d565b81526134d260208401612b4d565b60208201526134e360408401612b4d565b60408201526134f460608401612b4d565b60608201526080830135608082015260a083013567ffffffffffffffff81111561351d57600080fd5b61352936828601612ca2565b60a08301525061353b60c08401612d06565b60c082015292915050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261357b57600080fd5b83018035915067ffffffffffffffff82111561359657600080fd5b602001915036819003821315612e3b57600080fd5b600080858511156135bb57600080fd5b838611156135c857600080fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156136155780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b602081526000612720602083018461332b565b80820180821115611680576116806130f8565b60006020828403121561366557600080fd5b815167ffffffffffffffff81111561367c57600080fd5b8201601f8101841361368d57600080fd5b805161369b612cc182612c5c565b8181528560208385010111156136b057600080fd5b6136c1826020830160208601613307565b95945050505050565b600082516132e081846020870161330756fea26469706673582212201f33b47ca8104ce763a2fbd4273bc941bbc3dcf978d064972c2da75f1fa3f07364736f6c63430008110033";
    static readonly abi: ({
        inputs: never[];
        stateMutability: string;
        type: string;
        name?: undefined;
        anonymous?: undefined;
        outputs?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        stateMutability?: undefined;
        anonymous?: undefined;
        outputs?: undefined;
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
        stateMutability?: undefined;
        outputs?: undefined;
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
        stateMutability?: undefined;
        outputs?: undefined;
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
    static createInterface(): TestMultichainFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): TestMultichainFacet;
}
export {};
