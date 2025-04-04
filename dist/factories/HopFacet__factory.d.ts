import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { HopFacet, HopFacetInterface } from "../HopFacet";
declare type HopFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class HopFacet__factory extends ContractFactory {
    constructor(...args: HopFacetConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<HopFacet>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): HopFacet;
    connect(signer: Signer): HopFacet__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b50612bc5806100206000396000f3fe60806040526004361061003f5760003560e01c80633961d1ed1461004457806367fdd71e14610066578063a01fe78414610086578063b3b6358714610099575b600080fd5b34801561005057600080fd5b5061006461005f366004612363565b6100ac565b005b34801561007257600080fd5b50610064610081366004612396565b6101ad565b610064610094366004612629565b610356565b6100646100a73660046126d6565b61058d565b6100b46107b1565b7f6d21be7f069eba22e6227bbf0972cf4a3ee2f0ce81ad8bd8004228e83b4830b873ffffffffffffffffffffffffffffffffffffffff8216610122576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8381166000818152602084815260409182902080547fffffffffffffffffffffffff0000000000000000000000000000000000000000169487169485179055905192835290917fcf56a25ddc5c325bc2d2557f7eee90d061f2e19b7294a6ef738f86f2c3d9280c910160405180910390a2505050565b6101b56107b1565b7f6d21be7f069eba22e6227bbf0972cf4a3ee2f0ce81ad8bd8004228e83b4830b860005b828110156103175760008484838181106101f5576101f561271d565b905060400201602001602081019061020d919061274c565b73ffffffffffffffffffffffffffffffffffffffff160361025a576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b83838281811061026c5761026c61271d565b9050604002016020016020810190610284919061274c565b8260008686858181106102995761029961271d565b6102af926020604090920201908101915061274c565b73ffffffffffffffffffffffffffffffffffffffff9081168252602082019290925260400160002080547fffffffffffffffffffffffff000000000000000000000000000000000000000016929091169190911790558061030f8161279d565b9150506101d9565b507f5910f57b2fdae9f2f45a1d913c63f55985d0f77d120de8aab63e686ff670dde383836040516103499291906127d5565b60405180910390a1505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016103d1576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006103e23447612844565b905086806101000151610421576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b878061012001511561045f576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886104828160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156104b9576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036104f7576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610534576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61054e8a600001518b60c001518b8b338c60e00135610826565b60c08b015261055d8a886109c6565b50479150508181111561057f5761057f60008461057a8585612844565b610c85565b505060009091555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610608576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006106193447612844565b90508480610100015115610659576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8580610120015115610697576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b866106ba8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156106f1576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c0015160000361072f576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361076c576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61077e88608001518960c00151610cbb565b61078888886109c6565b5047915050818111156107a5576107a560008461057a8585612844565b50506000909155505050565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c6004015473ffffffffffffffffffffffffffffffffffffffff163314610824576040517f277d76f800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b600083808203610862576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008686610871600185612844565b8181106108805761088061271d565b90506020028101906108929190612857565b6108a390608081019060600161274c565b905060006108b082610e31565b905073ffffffffffffffffffffffffffffffffffffffff82166108da576108d73482612844565b90505b60006108e68989610eea565b90506108f28989610ff6565b604080516060810182528c815273ffffffffffffffffffffffffffffffffffffffff8916602082015290810187905261092d818b8b85611063565b60008361093986610e31565b6109439190612844565b905073ffffffffffffffffffffffffffffffffffffffff851661096d5761096a8882612844565b90505b8b8110156109b6576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018d9052602481018290526044015b60405180910390fd5b9c9b505050505050505050505050565b608082015173ffffffffffffffffffffffffffffffffffffffff80821660009081527f6d21be7f069eba22e6227bbf0972cf4a3ee2f0ce81ad8bd8004228e83b4830b8602081905260409091205460c086015191921690610a2a9084908390611454565b600073ffffffffffffffffffffffffffffffffffffffff841615610a52578460e00135610a65565b60c0860151610a659060e0870135612895565b90504660011480610a765750466005145b15610b74578173ffffffffffffffffffffffffffffffffffffffff1663deace8f5828860e001518960a001518a60c001518a606001358b608001358c60a0016020810190610ac4919061274c565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e08a901b168152600481019690965273ffffffffffffffffffffffffffffffffffffffff94851660248701526044860193909352606485019190915260848401521660a482015260c089013560c482015260e4016000604051808303818588803b158015610b5657600080fd5b505af1158015610b6a573d6000803e3d6000fd5b5050505050610c46565b60e086015160a087015160c0880151604080517feea0d7b2000000000000000000000000000000000000000000000000000000008152600481019490945273ffffffffffffffffffffffffffffffffffffffff92831660248501526044840191909152873560648401526020880135608484015287013560a4830152606087013560c4830152608087013560e483015283169063eea0d7b2908390610104016000604051808303818588803b158015610c2c57600080fd5b505af1158015610c40573d6000803e3d6000fd5b50505050505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f186604051610c759190612916565b60405180910390a1505050505050565b73ffffffffffffffffffffffffffffffffffffffff831615610cb157610cac83838361158b565b505050565b610cac828261170d565b80600003610cf5576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610d4e5780341015610d4a576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa158015610dbb573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ddf9190612a29565b905081811015610e25576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044016109ad565b610cac83333085611837565b600073ffffffffffffffffffffffffffffffffffffffff821615610ee2576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610eb9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610edd9190612a29565b610ee4565b475b92915050565b60608160008167ffffffffffffffff811115610f0857610f0861240b565b604051908082528060200260200182016040528015610f31578160200160208202803683370190505b5090506000805b83811015610feb57868682818110610f5257610f5261271d565b9050602002810190610f649190612857565b610f7590608081019060600161274c565b9150610f8082610e31565b838281518110610f9257610f9261271d565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610fe35734838281518110610fcb57610fcb61271d565b60200260200101818151610fdf9190612844565b9052505b600101610f38565b509095945050505050565b60005b81811015610cac57368383838181106110145761101461271d565b90506020028101906110269190612857565b905061103860e0820160c08301612a42565b1561105a5761105a611050606083016040840161274c565b8260800135610cbb565b50600101610ff9565b60208401516040850151849184918490836001811461136d576000868661108b600185612844565b81811061109a5761109a61271d565b90506020028101906110ac9190612857565b6110bd90608081019060600161274c565b9050600089815b8181101561126a57368d8d838181106110df576110df61271d565b90506020028101906110f19190612857565b9050611120611106606083016040840161274c565b73ffffffffffffffffffffffffffffffffffffffff161590565b806111835750611183611139604083016020840161274c565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b801561119a575061119a611139602083018361274c565b801561121f575061121f6111b160a0830183612a5f565b6111c091600491600091612acb565b6111c991612af5565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b611255576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8e516112619082611a51565b506001016110c4565b505060005b61127a600185612844565b8110156113655760008989838181106112955761129561271d565b90506020028101906112a79190612857565b6112b890608081019060600161274c565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461135c578682815181106112ff576112ff61271d565b602002602001015161131082610e31565b61131a9190612844565b9250600073ffffffffffffffffffffffffffffffffffffffff821615611341576000611343565b865b9050831561135a5761135a828a61057a8488612844565b505b5060010161126f565b505050611448565b8760005b8181101561144557368b8b8381811061138c5761138c61271d565b905060200281019061139e9190612857565b90506113b3611106606083016040840161274c565b806113cc57506113cc611139604083016020840161274c565b80156113e357506113e3611139602083018361274c565b80156113fa57506113fa6111b160a0830183612a5f565b611430576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8c5161143c9082611a51565b50600101611371565b50505b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff831661147457505050565b73ffffffffffffffffffffffffffffffffffffffff82166114c1576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa158015611536573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061155a9190612a29565b1015610cac57610cac83837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611d2f565b73ffffffffffffffffffffffffffffffffffffffff83166115d8576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216611625576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015611692573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116b69190612a29565b9050808211156116fc576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044016109ad565b611707848484611e9d565b50505050565b73ffffffffffffffffffffffffffffffffffffffff821661175a576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b4781111561179d576040517fcf479181000000000000000000000000000000000000000000000000000000008152600481018290524760248201526044016109ad565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d80600081146117f7576040519150601f19603f3d011682016040523d82523d6000602084013e6117fc565b606091505b5050905080610cac576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8416611884576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166118d1576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015611942573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119669190612a29565b905061197482868686611ef3565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa1580156119e4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a089190612a29565b611a129190612844565b14611a49576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b611a67611a61602083018361274c565b3b151590565b611a9d576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101356000819003611add576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000611af2611106606085016040860161274c565b611afd576000611b03565b82608001355b90506000611b1f611b1a606086016040870161274c565b610e31565b90506000611b36611b1a608087016060880161274c565b905082600003611b6d57611b6d611b53606087016040880161274c565b611b63604088016020890161274c565b8760800135611454565b8460800135821015611bb8576040517fcf47918100000000000000000000000000000000000000000000000000000000815260808601356004820152602481018390526044016109ad565b600080611bc8602088018861274c565b73ffffffffffffffffffffffffffffffffffffffff1685611bec60a08a018a612a5f565b604051611bfa929190612b3d565b60006040518083038185875af1925050503d8060008114611c37576040519150601f19603f3d011682016040523d82523d6000602084013e611c3c565b606091505b509150915081611c4f57611c4f81611f51565b6000611c64611b1a60808a0160608b0161274c565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b3889611c9560208b018b61274c565b611ca560608c0160408d0161274c565b611cb560808d0160608e0161274c565b8c60800135898711611cc75786611cd1565b611cd18a88612844565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b6040805173ffffffffffffffffffffffffffffffffffffffff8416602482015260448082018490528251808303909101815260649091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f095ea7b300000000000000000000000000000000000000000000000000000000179052611dbb8482611f5b565b6117075760405173ffffffffffffffffffffffffffffffffffffffff8416602482015260006044820152611e939085907f095ea7b300000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff000000000000000000000000000000000000000000000000000000009093169290921790915261201c565b611707848261201c565b60405173ffffffffffffffffffffffffffffffffffffffff8316602482015260448101829052610cac9084907fa9059cbb0000000000000000000000000000000000000000000000000000000090606401611e11565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526117079085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401611e11565b8051602082018181fd5b60008060008473ffffffffffffffffffffffffffffffffffffffff1684604051611f859190612b4d565b6000604051808303816000865af19150503d8060008114611fc2576040519150601f19603f3d011682016040523d82523d6000602084013e611fc7565b606091505b5091509150818015611ff1575080511580611ff1575080806020019051810190611ff19190612b5f565b8015612013575073ffffffffffffffffffffffffffffffffffffffff85163b15155b95945050505050565b600061207e826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff1661212b9092919063ffffffff16565b905080516000148061209f57508080602001905181019061209f9190612b5f565b610cac576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084016109ad565b606061213a8484600085612142565b949350505050565b6060824710156121d4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c000000000000000000000000000000000000000000000000000060648201526084016109ad565b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516121fd9190612b4d565b60006040518083038185875af1925050503d806000811461223a576040519150601f19603f3d011682016040523d82523d6000602084013e61223f565b606091505b50915091506122508783838761225b565b979650505050505050565b606083156122f15782516000036122ea5773ffffffffffffffffffffffffffffffffffffffff85163b6122ea576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016109ad565b508161213a565b61213a83838151156123065781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109ad9190612b7c565b803573ffffffffffffffffffffffffffffffffffffffff8116811461235e57600080fd5b919050565b6000806040838503121561237657600080fd5b61237f8361233a565b915061238d6020840161233a565b90509250929050565b600080602083850312156123a957600080fd5b823567ffffffffffffffff808211156123c157600080fd5b818501915085601f8301126123d557600080fd5b8135818111156123e457600080fd5b8660208260061b85010111156123f957600080fd5b60209290920196919550909350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff8111828210171561245e5761245e61240b565b60405290565b600082601f83011261247557600080fd5b813567ffffffffffffffff808211156124905761249061240b565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f011681019082821181831017156124d6576124d661240b565b816040528381528660208588010111156124ef57600080fd5b836020870160208301376000602085830101528094505050505092915050565b801515811461251d57600080fd5b50565b803561235e8161250f565b6000610140828403121561253e57600080fd5b61254661243a565b905081358152602082013567ffffffffffffffff8082111561256757600080fd5b61257385838601612464565b6020840152604084013591508082111561258c57600080fd5b5061259984828501612464565b6040830152506125ab6060830161233a565b60608201526125bc6080830161233a565b60808201526125cd60a0830161233a565b60a082015260c082013560c082015260e082013560e08201526101006125f4818401612520565b90820152610120612606838201612520565b9082015292915050565b6000610100828403121561262357600080fd5b50919050565b600080600080610140858703121561264057600080fd5b843567ffffffffffffffff8082111561265857600080fd5b6126648883890161252b565b9550602087013591508082111561267a57600080fd5b818701915087601f83011261268e57600080fd5b81358181111561269d57600080fd5b8860208260051b85010111156126b257600080fd5b6020830195508094505050506126cb8660408701612610565b905092959194509250565b60008061012083850312156126ea57600080fd5b823567ffffffffffffffff81111561270157600080fd5b61270d8582860161252b565b92505061238d8460208501612610565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60006020828403121561275e57600080fd5b6127678261233a565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036127ce576127ce61276e565b5060010190565b6020808252818101839052600090604080840186845b878110156128375773ffffffffffffffffffffffffffffffffffffffff806128128461233a565b1684528061282187850161233a565b16848701525091830191908301906001016127eb565b5090979650505050505050565b81810381811115610ee457610ee461276e565b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2183360301811261288b57600080fd5b9190910192915050565b80820180821115610ee457610ee461276e565b60005b838110156128c35781810151838201526020016128ab565b50506000910152565b600081518084526128e48160208601602086016128a8565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b60208152815160208201526000602083015161014080604085015261293f6101608501836128cc565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe085840301606086015261297a83826128cc565b92505060608501516129a4608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e0850151610100818187015280870151915050610120612a178187018315159052565b90950151151593019290925250919050565b600060208284031215612a3b57600080fd5b5051919050565b600060208284031215612a5457600080fd5b81356127678161250f565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112612a9457600080fd5b83018035915067ffffffffffffffff821115612aaf57600080fd5b602001915036819003821315612ac457600080fd5b9250929050565b60008085851115612adb57600080fd5b83861115612ae857600080fd5b5050820193919092039150565b7fffffffff000000000000000000000000000000000000000000000000000000008135818116916004851015612b355780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b6000825161288b8184602087016128a8565b600060208284031215612b7157600080fd5b81516127678161250f565b60208152600061276760208301846128cc56fea2646970667358221220589924178853ad62e1e253b27fd106aa6b9feacf5019bbc4882d4420c854144764736f6c63430008110033";
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "initHop";
        readonly inputs: readonly [{
            readonly name: "configs";
            readonly type: "tuple[]";
            readonly internalType: "struct HopFacet.Config[]";
            readonly components: readonly [{
                readonly name: "assetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "bridge";
                readonly type: "address";
                readonly internalType: "address";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "registerBridge";
        readonly inputs: readonly [{
            readonly name: "assetId";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "bridge";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaHop";
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
            readonly name: "_hopData";
            readonly type: "tuple";
            readonly internalType: "struct HopFacet.HopData";
            readonly components: readonly [{
                readonly name: "bonderFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "amountOutMin";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "deadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationAmountOutMin";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationDeadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "relayer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "relayerFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "nativeFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaHop";
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
            readonly name: "_hopData";
            readonly type: "tuple";
            readonly internalType: "struct HopFacet.HopData";
            readonly components: readonly [{
                readonly name: "bonderFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "amountOutMin";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "deadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationAmountOutMin";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationDeadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "relayer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "relayerFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "nativeFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "event";
        readonly name: "HopBridgeRegistered";
        readonly inputs: readonly [{
            readonly name: "assetId";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "bridge";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "HopInitialized";
        readonly inputs: readonly [{
            readonly name: "configs";
            readonly type: "tuple[]";
            readonly indexed: false;
            readonly internalType: "struct HopFacet.Config[]";
            readonly components: readonly [{
                readonly name: "assetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "bridge";
                readonly type: "address";
                readonly internalType: "address";
            }];
        }];
        readonly anonymous: false;
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
        readonly name: "InvalidConfig";
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
        readonly name: "OnlyContractOwner";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ReentrancyError";
        readonly inputs: readonly [];
    }];
    static createInterface(): HopFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): HopFacet;
}
export {};
