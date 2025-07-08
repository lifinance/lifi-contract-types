import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { LIFIIntentFacet, LIFIIntentFacetInterface } from "../LIFIIntentFacet";
declare type LIFIIntentFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class LIFIIntentFacet__factory extends ContractFactory {
    constructor(...args: LIFIIntentFacetConstructorParams);
    deploy(compact: PromiseOrValue<string>, compactSettler: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<LIFIIntentFacet>;
    getDeployTransaction(compact: PromiseOrValue<string>, compactSettler: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): LIFIIntentFacet;
    connect(signer: Signer): LIFIIntentFacet__factory;
    static readonly bytecode = "0x60c060405234801561000f575f5ffd5b50604051612ab8380380612ab883398101604081905261002e9161009b565b6001600160a01b038216158061004b57506001600160a01b038116155b15610069576040516306b7c75960e31b815260040160405180910390fd5b6001600160a01b039182166080521660a0526100cc565b80516001600160a01b0381168114610096575f5ffd5b919050565b5f5f604083850312156100ac575f5ffd5b6100b583610080565b91506100c360208401610080565b90509250929050565b60805160a0516129b16101075f395f8181607b015281816109ad0152610b2d01525f818160d701528181610719015261093201526129b15ff3fe60806040526004361061003e575f3560e01c806351c98a35146100425780636d7b62ee146100575780637e39da021461006a578063c2f749b9146100c6575b5f5ffd5b610055610050366004611f99565b6100f9565b005b610055610065366004611ffe565b61031e565b348015610075575f5ffd5b5061009d7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b3480156100d1575f5ffd5b5061009d7f000000000000000000000000000000000000000000000000000000000000000081565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610174576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f61018434476120c4565b9050846101a98160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156101e0576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f0361021d576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361025a576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8580610100015115610298576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b86806101200151156102d6576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102e888608001518960c00151610546565b6102f288886105fa565b504791505081811115610313576103135f8461030e85856120c4565b610ca5565b50505f909155505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610399576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6103a934476120c4565b9050868061010001516103e8576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8780610120015115610426576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886104498160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610480576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036104bd576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036104fa576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61050e8a5f01518b60c001518b8b33610cda565b60c08b015261051d8a886105fa565b504791505081811115610539576105395f8461030e85856120c4565b50505f9091555050505050565b805f0361057f576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166105d857803410156105d4576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6105d473ffffffffffffffffffffffffffffffffffffffff8316333084610e18565b816080015173ffffffffffffffffffffffffffffffffffffffff16610636826020013573ffffffffffffffffffffffffffffffffffffffff1690565b73ffffffffffffffffffffffffffffffffffffffff1614610683576040517f6be6d3ae00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60a082015173ffffffffffffffffffffffffffffffffffffffff166106bc823573ffffffffffffffffffffffffffffffffffffffff1690565b73ffffffffffffffffffffffffffffffffffffffff1614610709576040517f97080cae00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60c0820151608083015161073e907f000000000000000000000000000000000000000000000000000000000000000083610e70565b6040805160018082528183019092525f91816020015b61075c611d15565b81526020019060019003908161075457905050905060405180604001604052808460200135815260200183815250815f8151811061079c5761079c6120fc565b60209081029190910101526040805160018082528183019092525f91816020015b6107ff6040518061010001604052805f81526020015f81526020015f81526020015f81526020015f81526020015f815260200160608152602001606081525090565b8152602001906001900390816107bd5790505090506040518061010001604052808560e00135815260200185610100013581526020018660e00151815260200185610120013581526020018561014001358152602001855f013581526020018580610160019061086f9190612129565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284375f920191909152505050908252506020016108b6610180870187612129565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284375f92018290525093909452505083518492506108fc576108fc6120fc565b602090810291909101015261092f61091a60c0860160a08701612191565b61092a60a0870160808801612191565b610e9c565b5f7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663e9626d0c61098e886080015173ffffffffffffffffffffffffffffffffffffffff161590565b610998575f61099a565b855b6109aa6060890160408a016121bb565b867f000000000000000000000000000000000000000000000000000000000000000060608b01356109e160a08d0160808e01612191565b604051806101a0016040528061016d815260200161280f61016d913980519060200120610a338e60a0016020810190610a1a9190612191565b8f60c0016020810190610a2d91906121bb565b8d610f1c565b6040518963ffffffff1660e01b8152600401610a559796959493929190612237565b5f6040518083038185885af1158015610a70573d5f5f3e3d5ffd5b50505050506040513d5f823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610ab691908101906122ab565b5090506101a08501358015801590610ace5750808214155b15610b14576040517fcfa4e0db00000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044015b60405180910390fd5b610b266101e087016101c08801612363565b15610c65577f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16631b9423f0604051806101000160405280896040016020810190610b8691906121bb565b73ffffffffffffffffffffffffffffffffffffffff1681526060808b0135602083015246604083015201610bc060a08b0160808c01612191565b63ffffffff168152602001610bdb60c08b0160a08c01612191565b63ffffffff168152602001610bf660e08b0160c08c016121bb565b73ffffffffffffffffffffffffffffffffffffffff168152602001878152602001868152506040518263ffffffff1660e01b8152600401610c3791906124a5565b5f604051808303815f87803b158015610c4e575f5ffd5b505af1158015610c60573d5f5f3e3d5ffd5b505050505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f187604051610c949190612587565b60405180910390a150505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610ccf57610cca82826110b2565b505050565b610cca83838361111f565b5f82808203610d15576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f8585610d236001856120c4565b818110610d3257610d326120fc565b9050602002810190610d44919061269a565b610d559060808101906060016121bb565b90505f610d618261118d565b905073ffffffffffffffffffffffffffffffffffffffff8216610d8b57610d8834826120c4565b90505b5f610d9688886111d7565b9050610da288886112e1565b610daf8a8989898561134d565b5f82610dba8561118d565b610dc491906120c4565b905089811015610e0a576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b905260248101829052604401610b0b565b9a9950505050505050505050565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f51141716610e6357637939f4245f526004601cfd5b5f60605260405250505050565b610cca8383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6116f8565b8163ffffffff16421115610edc576040517f70f65caa00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8063ffffffff164211156105d4576040517f70f65caa00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f604051602001611034907f4d616e646174652875696e7433322066696c6c446561646c696e652c6164647281527f657373206c6f63616c4f7261636c652c4d616e646174654f75747075745b5d2060208201527f6f757470757473294d616e646174654f75747075742862797465733332206f7260408201527f61636c652c6279746573333220736574746c65722c75696e743235362063686160608201527f696e49642c6279746573333220746f6b656e2c75696e7432353620616d6f756e60808201527f742c6279746573333220726563697069656e742c62797465732063616c6c2c6260a08201527f7974657320636f6e74657874290000000000000000000000000000000000000060c082015260cd0190565b60405160208183030381529060405280519060200120848461105585611825565b60408051602081019590955263ffffffff9093169284019290925273ffffffffffffffffffffffffffffffffffffffff166060830152608082015260a0016040516020818303038152906040528051906020012090509392505050565b73ffffffffffffffffffffffffffffffffffffffff82166110ff576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6105d473ffffffffffffffffffffffffffffffffffffffff8316826118c0565b73ffffffffffffffffffffffffffffffffffffffff821661116c576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610cca73ffffffffffffffffffffffffffffffffffffffff841683836118d9565b5f73ffffffffffffffffffffffffffffffffffffffff8216156111cf576111ca73ffffffffffffffffffffffffffffffffffffffff831630611922565b6111d1565b475b92915050565b6060815f8167ffffffffffffffff8111156111f4576111f4611d33565b60405190808252806020026020018201604052801561121d578160200160208202803683370190505b5090505f805b838110156112d65786868281811061123d5761123d6120fc565b905060200281019061124f919061269a565b6112609060808101906060016121bb565b915061126b8261118d565b83828151811061127d5761127d6120fc565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff82166112ce57348382815181106112b6576112b66120fc565b602002602001018181516112ca91906120c4565b9052505b600101611223565b509095945050505050565b5f5b81811015610cca57368383838181106112fe576112fe6120fc565b9050602002810190611310919061269a565b905061132260e0820160c08301612363565b156113445761134461133a60608301604084016121bb565b8260800135610546565b506001016112e3565b838383838260018114611614575f85856113686001856120c4565b818110611377576113776120fc565b9050602002810190611389919061269a565b61139a9060808101906060016121bb565b90505f89815b8181101561154157368d8d838181106113bb576113bb6120fc565b90506020028101906113cd919061269a565b90506113fc6113e260608301604084016121bb565b73ffffffffffffffffffffffffffffffffffffffff161590565b8061145e575061145e61141560408301602084016121bb565b73ffffffffffffffffffffffffffffffffffffffff165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015611475575061147561141560208301836121bb565b80156114f857506114f861148c60a0830183612129565b61149a916004915f916126d6565b6114a3916126fd565b7fffffffff00000000000000000000000000000000000000000000000000000000165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b61152e576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6115388f82611955565b506001016113a0565b505f90505b6115516001856120c4565b81101561160c575f88888381811061156b5761156b6120fc565b905060200281019061157d919061269a565b61158e9060808101906060016121bb565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614611603578582815181106115d5576115d56120fc565b60200260200101516115e68261118d565b6115f091906120c4565b9250821561160357611603818885610ca5565b50600101611546565b5050506116ec565b875f5b818110156116e957368b8b83818110611632576116326120fc565b9050602002810190611644919061269a565b90506116596113e260608301604084016121bb565b80611672575061167261141560408301602084016121bb565b8015611689575061168961141560208301836121bb565b80156116a057506116a061148c60a0830183612129565b6116d6576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6116e08d82611955565b50600101611617565b50505b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff84161561181f5773ffffffffffffffffffffffffffffffffffffffff8316611761576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa1580156117d4573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906117f89190612763565b101561181f5761181f73ffffffffffffffffffffffffffffffffffffffff85168483611bc8565b50505050565b5f5f825160200267ffffffffffffffff81111561184457611844611d33565b6040519080825280601f01601f19166020018201604052801561186e576020820181803683370190505b5090505f5b83518110156118b1575f61189f858381518110611892576118926120fc565b6020026020010151611c46565b60208381028501015250600101611873565b50805160209091012092915050565b5f385f3884865af16105d45763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f51141716611919576390b8ec185f526004601cfd5b5f603452505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b61196d61196560208301836121bb565b6017903b1190565b6119a3576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f8190036119e2576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6119f66113e260608501604086016121bb565b611a00575f611a06565b82608001355b90505f611a21611a1c60808601606087016121bb565b61118d565b9050815f03611a5757611a57611a3d60608601604087016121bb565b611a4d60408701602088016121bb565b8660800135610e70565b5f80611a6660208701876121bb565b73ffffffffffffffffffffffffffffffffffffffff1684611a8a60a0890189612129565b604051611a9892919061277a565b5f6040518083038185875af1925050503d805f8114611ad2576040519150601f19603f3d011682016040523d82523d5f602084013e611ad7565b606091505b509150915081611aea57611aea81611d0b565b5f611afe611a1c6080890160608a016121bb565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b3888611b2f60208a018a6121bb565b611b3f60608b0160408c016121bb565b611b4f60808c0160608d016121bb565b8b60800135898711611b615786611b6b565b611b6b8a886120c4565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f51141716611919575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f5114171661191957633e3f8f735f526004601cfd5b5f6040518060c001604052806085815260200161278a6085913980519060200120825f015183602001518460400151856060015186608001518760a001518860c00151805190602001208960e0015180519060200120604051602001611cee99989796959493929190988952602089019790975260408801959095526060870193909352608086019190915260a085015260c084015260e08301526101008201526101200190565b604051602081830303815290604052805190602001209050919050565b8051602082018181fd5b60405180604001604052806002906020820280368337509192915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff81118282101715611d8457611d84611d33565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715611dd157611dd1611d33565b604052919050565b5f82601f830112611de8575f5ffd5b813567ffffffffffffffff811115611e0257611e02611d33565b611e3360207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f84011601611d8a565b818152846020838601011115611e47575f5ffd5b816020850160208301375f918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611e86575f5ffd5b919050565b80358015158114611e86575f5ffd5b5f6101408284031215611eab575f5ffd5b611eb3611d60565b823581529050602082013567ffffffffffffffff811115611ed2575f5ffd5b611ede84828501611dd9565b602083015250604082013567ffffffffffffffff811115611efd575f5ffd5b611f0984828501611dd9565b604083015250611f1b60608301611e63565b6060820152611f2c60808301611e63565b6080820152611f3d60a08301611e63565b60a082015260c0828101359082015260e08083013590820152611f636101008301611e8b565b610100820152611f766101208301611e8b565b61012082015292915050565b5f6101e08284031215611f93575f5ffd5b50919050565b5f5f60408385031215611faa575f5ffd5b823567ffffffffffffffff811115611fc0575f5ffd5b611fcc85828601611e9a565b925050602083013567ffffffffffffffff811115611fe8575f5ffd5b611ff485828601611f82565b9150509250929050565b5f5f5f5f60608587031215612011575f5ffd5b843567ffffffffffffffff811115612027575f5ffd5b61203387828801611e9a565b945050602085013567ffffffffffffffff81111561204f575f5ffd5b8501601f8101871361205f575f5ffd5b803567ffffffffffffffff811115612075575f5ffd5b8760208260051b8401011115612089575f5ffd5b60209190910193509150604085013567ffffffffffffffff8111156120ac575f5ffd5b6120b887828801611f82565b91505092959194509250565b818103818111156111d1577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261215c575f5ffd5b83018035915067ffffffffffffffff821115612176575f5ffd5b60200191503681900382131561218a575f5ffd5b9250929050565b5f602082840312156121a1575f5ffd5b813563ffffffff811681146121b4575f5ffd5b9392505050565b5f602082840312156121cb575f5ffd5b6121b482611e63565b5f8151808452602084019350602083015f5b8281101561222d5781515f87815b60028110156122135783518252602093840193909101906001016121f4565b5050506040969096019550602091909101906001016121e6565b5093949350505050565b73ffffffffffffffffffffffffffffffffffffffff8816815260e060208201525f61226560e08301896121d4565b73ffffffffffffffffffffffffffffffffffffffff97909716604083015250606081019490945263ffffffff92909216608084015260a083015260c09091015292915050565b5f5f604083850312156122bc575f5ffd5b82519150602083015167ffffffffffffffff8111156122d9575f5ffd5b8301601f810185136122e9575f5ffd5b805167ffffffffffffffff81111561230357612303611d33565b8060051b61231360208201611d8a565b9182526020818401810192908101908884111561232e575f5ffd5b6020850194505b8385101561235457845180835260209586019590935090910190612335565b80955050505050509250929050565b5f60208284031215612373575f5ffd5b6121b482611e8b565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b5f82825180855260208501945060208160051b830101602085015f5b83811015612499577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08584030188528151805184526020810151602085015260408101516040850152606081015160608501526080810151608085015260a081015160a085015260c081015161010060c086015261246661010086018261237c565b905060e0820151915084810360e0860152612481818361237c565b60209a8b019a909550939093019250506001016123e4565b50909695505050505050565b6020815273ffffffffffffffffffffffffffffffffffffffff825116602082015260208201516040820152604082015160608201525f60608301516124f2608084018263ffffffff169052565b50608083015163ffffffff811660a08401525060a083015173ffffffffffffffffffffffffffffffffffffffff811660c08401525060c083015161010060e08401526125426101208401826121d4565b905060e08401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08483030161010085015261257e82826123c8565b95945050505050565b60208152815160208201525f602083015161014060408401526125ae61016084018261237c565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08483030160608501526125e9828261237c565b9150506060840151612613608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e084015161010084015261010084015161268261012085018215159052565b50610120840151801515610140850152509392505050565b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff218336030181126126cc575f5ffd5b9190910192915050565b5f5f858511156126e4575f5ffd5b838611156126f0575f5ffd5b5050820193919092039150565b80357fffffffff00000000000000000000000000000000000000000000000000000000811690600484101561275c577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b5f60208284031215612773575f5ffd5b5051919050565b818382375f910190815291905056fe4d616e646174654f75747075742862797465733332206f7261636c652c6279746573333220736574746c65722c75696e7432353620636861696e49642c6279746573333220746f6b656e2c75696e7432353620616d6f756e742c6279746573333220726563697069656e742c62797465732063616c6c2c627974657320636f6e74657874294261746368436f6d70616374286164647265737320617262697465722c616464726573732073706f6e736f722c75696e74323536206e6f6e63652c75696e7432353620657870697265732c4c6f636b5b5d20636f6d6d69746d656e74732c4d616e64617465206d616e64617465294c6f636b2862797465733132206c6f636b5461672c6164647265737320746f6b656e2c75696e7432353620616d6f756e74294d616e646174652875696e7433322066696c6c446561646c696e652c61646472657373206c6f63616c4f7261636c652c4d616e646174654f75747075745b5d206f757470757473294d616e646174654f75747075742862797465733332206f7261636c652c6279746573333220736574746c65722c75696e7432353620636861696e49642c6279746573333220746f6b656e2c75696e7432353620616d6f756e742c6279746573333220726563697069656e742c62797465732063616c6c2c627974657320636f6e7465787429a2646970667358221220ca692e92e4ce85176e2c6d5ed1793e9007c5f8d4437628918a3a2d267c9f686f64736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "compact";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "compactSettler";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "COMPACT";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract ITheCompact";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "LIFI_INTENT_COMPACT_SETTLER";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaLIFIIntent";
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
            readonly name: "_lifiIntentData";
            readonly type: "tuple";
            readonly internalType: "struct LIFIIntentFacet.LIFIIntentData";
            readonly components: readonly [{
                readonly name: "receiverAddress";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "inputAssetId";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "user";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "nonce";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "expires";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "fillDeadline";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "inputOracle";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "outputOracle";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "outputSettler";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "outputToken";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "outputAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "outputCall";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "outputContext";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "expectedClaimHash";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "broadcast";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaLIFIIntent";
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
            readonly name: "_lifiIntentData";
            readonly type: "tuple";
            readonly internalType: "struct LIFIIntentFacet.LIFIIntentData";
            readonly components: readonly [{
                readonly name: "receiverAddress";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "inputAssetId";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "user";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "nonce";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "expires";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "fillDeadline";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "inputOracle";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "outputOracle";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "outputSettler";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "outputToken";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "outputAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "outputCall";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "outputContext";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "expectedClaimHash";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "broadcast";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "event";
        readonly name: "AssetSwapped";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: false;
            readonly internalType: "bytes32";
        }, {
            readonly name: "dex";
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
        }, {
            readonly name: "timestamp";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
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
        readonly name: "AssetIdsDoNotMatch";
        readonly inputs: readonly [];
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
        readonly name: "DeadlinePassed";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "IncorrectRegisteredClaimHash";
        readonly inputs: readonly [{
            readonly name: "expectedClaimHash";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "registeredClaimHash";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
    }, {
        readonly type: "error";
        readonly name: "InformationMismatch";
        readonly inputs: readonly [];
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
        readonly name: "NoSwapDataProvided";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NoSwapFromZeroBalance";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NullAddrIsNotAValidSpender";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ReceiverDoNotMatch";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ReentrancyError";
        readonly inputs: readonly [];
    }];
    static createInterface(): LIFIIntentFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): LIFIIntentFacet;
}
export {};
