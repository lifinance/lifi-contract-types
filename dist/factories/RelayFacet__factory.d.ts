import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { RelayFacet, RelayFacetInterface } from "../RelayFacet";
type RelayFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class RelayFacet__factory extends ContractFactory {
    constructor(...args: RelayFacetConstructorParams);
    deploy(_relayReceiver: PromiseOrValue<string>, _relaySolver: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<RelayFacet>;
    getDeployTransaction(_relayReceiver: PromiseOrValue<string>, _relaySolver: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): RelayFacet;
    connect(signer: Signer): RelayFacet__factory;
    static readonly bytecode = "0x60c060405234801561000f575f5ffd5b506040516127d53803806127d583398101604081905261002e9161009b565b6001600160a01b038216158061004b57506001600160a01b038116155b15610069576040516306b7c75960e31b815260040160405180910390fd5b6001600160a01b039182166080521660a0526100cc565b80516001600160a01b0381168114610096575f5ffd5b919050565b5f5f604083850312156100ac575f5ffd5b6100b583610080565b91506100c360208401610080565b90509250929050565b60805160a0516126da6100fb5f395f81816103980152818161079f0152610d5501525f610c5001526126da5ff3fe608060405260043610610033575f3560e01c806325d374e814610037578063ae3285901461004c578063f21a21161461005f575b5f5ffd5b61004a610045366004612125565b6100c0565b005b61004a61005a3660046121eb565b6105cd565b34801561006a575f5ffd5b506100ac610079366004612255565b5f9081527fb98028e3d2cd46965e9adf6d02cfc949181d47b4dc67b3ffa097d7cd3131291b602052604090205460ff1690565b604051901515815260200160405180910390f35b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0161013b576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815581355f9081527fb98028e3d2cd46965e9adf6d02cfc949181d47b4dc67b3ffa097d7cd3131291b60205260409020548590839060ff168061018f575080355f9081526020819052604090205460ff165b156101c6576040517ff861803000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60a082015173ffffffffffffffffffffffffffffffffffffffff167311f111f111f111f111f111f111f111f111f111f114801561020557506020810135155b1561023c576040517f58b0510000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608082015160e08301515f91610347918435914691309173ffffffffffffffffffffffffffffffffffffffff1690610273906109ea565b60a089015173ffffffffffffffffffffffffffffffffffffffff167311f111f111f111f111f111f111f111f111f111f1146102c85760a089015173ffffffffffffffffffffffffffffffffffffffff166102ce565b87602001355b604080516020810197909752868101959095526060860193909352608085019190915260a084015260c083015284013560e082015261010001604051602081830303815290604052805190602001206020527b19457468657265756d205369676e6564204d6573736167653a0a33325f52603c60042090565b90505f6103948261035b606086018661226c565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284375f92019190915250610a1f92505050565b90507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461041b576040517ff861803000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b335f6104273447612301565b90508a806101000151610466576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8b806101200151156104a4576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8c6104c78160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156104fe576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f0361053b576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610578576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61058c8e5f01518f60c001518f8f33610ac3565b60c08f015261059b8e8c610c06565b5047915050818111156105bc576105bc5f846105b78585612301565b610ff9565b50505f909555505050505050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610648576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815561065583612314565b82355f9081527fb98028e3d2cd46965e9adf6d02cfc949181d47b4dc67b3ffa097d7cd3131291b6020526040902054839060ff16806106a3575080355f9081526020819052604090205460ff165b156106da576040517ff861803000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60a082015173ffffffffffffffffffffffffffffffffffffffff167311f111f111f111f111f111f111f111f111f111f114801561071957506020810135155b15610750576040517f58b0510000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608082015160e08301515f91610787918435914691309173ffffffffffffffffffffffffffffffffffffffff1690610273906109ea565b90505f61079b8261035b606086018661226c565b90507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610822576040517ff861803000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b335f61082e3447612301565b905061083989612314565b60a081015173ffffffffffffffffffffffffffffffffffffffff1661088a576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036108c7576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610904576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61090d8a612314565b8061010001511561094a576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6109538b612314565b80610120015115610990576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6109ad6109a360a08e0160808f0161231f565b8d60c0013561102e565b6109bf6109b98d612314565b8c610c06565b5047915050818111156109db576109db5f846105b78585612301565b50505f90955550505050505050565b5f816512309ce5400103610a025750627dee6e919050565b81660416edef1601be03610a1b5750632f3fb341919050565b5090565b604051600190835f5260208301516040526040835103610a7357604083015160ff81901c601b016020527f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff16606052610a97565b6041835103610a935760608301515f1a6020526040830151606052610a97565b5f91505b6020600160805f855afa5191503d610ab657638baa579f5f526004601cfd5b5f60605260405292915050565b5f82808203610afe576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f8585610b0c600185612301565b818110610b1b57610b1b612338565b9050602002810190610b2d9190612365565b610b3e90608081019060600161231f565b90505f610b4a826110e2565b905073ffffffffffffffffffffffffffffffffffffffff8216610b7457610b713482612301565b90505b5f610b7f888861112c565b9050610b8b8888611236565b610b988a898989856112a2565b5f82610ba3856110e2565b610bad9190612301565b905089811015610bf8576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044015b60405180910390fd5b9a9950505050505050505050565b608082015173ffffffffffffffffffffffffffffffffffffffff16610d365760c082015160408051833560208201525f92839273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169201604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081840301815290829052610caa916123b8565b5f6040518083038185875af1925050503d805f8114610ce4576040519150601f19603f3d011682016040523d82523d5f602084013e610ce9565b606091505b509150915081610d2f57610cfc816114ea565b6040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bef919061240f565b5050610ede565b60c082015160405173ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016602482015260448101919091525f90606401604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152918152602080830180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fa9059cbb000000000000000000000000000000000000000000000000000000001790529051610e11918535910190815260200190565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081840301815290829052610e4d9291602001612421565b60405160208183030381529060405290505f5f846080015173ffffffffffffffffffffffffffffffffffffffff1683604051610e8991906123b8565b5f604051808303815f865af19150503d805f8114610ec2576040519150601f19603f3d011682016040523d82523d5f602084013e610ec7565b606091505b509150915081610eda57610cfc816114ea565b5050505b80355f9081527fb98028e3d2cd46965e9adf6d02cfc949181d47b4dc67b3ffa097d7cd3131291b6020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600117905560a08201517fffffffffffffffffffffffffee0eee0eee0eee0eee0eee0eee0eee0eee0eee0f73ffffffffffffffffffffffffffffffffffffffff90911601610fbe57610f858260e001516109ea565b825160405160208481013582527f815cd8dc72093a13fe3577112c391b6279303956526382ab98772d0239dbf78c910160405180910390a35b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f182604051610fed919061243d565b60405180910390a15050565b73ffffffffffffffffffffffffffffffffffffffff83166110235761101e8282611567565b505050565b61101e8383836115d4565b805f03611067576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166110c057803410156110bc576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6110bc73ffffffffffffffffffffffffffffffffffffffff8316333084611642565b5f73ffffffffffffffffffffffffffffffffffffffff8216156111245761111f73ffffffffffffffffffffffffffffffffffffffff83163061169a565b611126565b475b92915050565b6060815f8167ffffffffffffffff81111561114957611149611eb3565b604051908082528060200260200182016040528015611172578160200160208202803683370190505b5090505f5f5b8381101561122b5786868281811061119257611192612338565b90506020028101906111a49190612365565b6111b590608081019060600161231f565b91506111c0826110e2565b8382815181106111d2576111d2612338565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216611223573483828151811061120b5761120b612338565b6020026020010181815161121f9190612301565b9052505b600101611178565b509095945050505050565b5f5b8181101561101e573683838381811061125357611253612338565b90506020028101906112659190612365565b905061127760e0820160c08301612550565b156112995761129961128f606083016040840161231f565b826080013561102e565b50600101611238565b83838383825f80805b838110156114ce57368c8c838181106112c6576112c6612338565b90506020028101906112d89190612365565b90506112e7602082018261231f565b93506112f9604082016020830161231f565b925061139c8461130c60a084018461226c565b61131a916004915f91612569565b61132391612590565b73ffffffffffffffffffffffffffffffffffffffff919091165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff000000000000000000000000000000000000000000000000000000009094168352929052205460ff1690565b158061148457506113d06113b6606083016040840161231f565b73ffffffffffffffffffffffffffffffffffffffff161590565b15801561140957508373ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614155b8015611484575073ffffffffffffffffffffffffffffffffffffffff83165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff00000000000000000000000000000000000000000000000000000000845290915290205460ff16155b156114bb576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6114c58e826116cd565b506001016112ab565b505050506114df848484845f611940565b505050505050505050565b606060448251101561152f57505060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c79000000602082015290565b5f61154a60048085516115429190612301565b859190611b57565b90508080602001905181019061156091906125f6565b9392505050565b73ffffffffffffffffffffffffffffffffffffffff82166115b4576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6110bc73ffffffffffffffffffffffffffffffffffffffff831682611c70565b73ffffffffffffffffffffffffffffffffffffffff8216611621576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61101e73ffffffffffffffffffffffffffffffffffffffff84168383611c89565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f5114171661168d57637939f4245f526004601cfd5b5f60605260405250505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b6116e56116dd602083018361231f565b6017903b1190565b61171b576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f81900361175a576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f61176e6113b6606085016040860161231f565b611778575f61177e565b82608001355b90505f611799611794608086016060870161231f565b6110e2565b9050815f036117cf576117cf6117b5606086016040870161231f565b6117c5604087016020880161231f565b8660800135611cd2565b5f806117de602087018761231f565b73ffffffffffffffffffffffffffffffffffffffff168461180260a089018961226c565b60405161181092919061266b565b5f6040518083038185875af1925050503d805f811461184a576040519150601f19603f3d011682016040523d82523d5f602084013e61184f565b606091505b5091509150816118625761186281611cfe565b5f6118766117946080890160608a0161231f565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b38886118a760208a018a61231f565b6118b760608b0160408c0161231f565b6118c760808c0160608d0161231f565b8b608001358987116118d957866118e3565b6118e38a88612301565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b835f868261194f600182612301565b81811061195e5761195e612338565b90506020028101906119709190612365565b61198190608081019060600161231f565b90505f5f5f5f5f5f5f5b88811015611b475761199e60018a612301565b811080156119ad575088600114155b15611a88578d8d828181106119c4576119c4612338565b90506020028101906119d69190612365565b6119e790608081019060600161231f565b95508773ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff1614611a88578a8181518110611a2e57611a2e612338565b6020026020010151611a3f876110e2565b611a499190612301565b965073ffffffffffffffffffffffffffffffffffffffff861615611a6d575f611a6f565b895b935083871115611a8857611a88868d6105b7878b612301565b8d8d82818110611a9a57611a9a612338565b9050602002810190611aac9190612365565b611abd90606081019060400161231f565b9450611ac8856110e2565b925073ffffffffffffffffffffffffffffffffffffffff851615611aec575f611aee565b895b91508183118015611b2b57508773ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b15611b3f57611b3f858d6105b78587612301565b60010161198b565b5050505050505050505050505050565b606081611b6581601f61267a565b1015611b9d576040517f47aaf07a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611ba7828461267a565b84511015611be1576040517f3b99b53d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b606082158015611bff5760405191505f825260208201604052611c67565b6040519150601f8416801560200281840101858101878315602002848b0101015b81831015611c38578051835260209283019201611c20565b5050858452601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016604052505b50949350505050565b5f385f3884865af16110bc5763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f51141716611cc9576390b8ec185f526004601cfd5b5f603452505050565b61101e8383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611d08565b8051602082018181fd5b73ffffffffffffffffffffffffffffffffffffffff841615611e2f5773ffffffffffffffffffffffffffffffffffffffff8316611d71576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015611de4573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611e08919061268d565b1015611e2f57611e2f73ffffffffffffffffffffffffffffffffffffffff85168483611e35565b50505050565b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f51141716611cc9575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f51141716611cc957633e3f8f735f526004601cfd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff81118282101715611f0457611f04611eb3565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715611f5157611f51611eb3565b604052919050565b5f67ffffffffffffffff821115611f7257611f72611eb3565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b5f82601f830112611fad575f5ffd5b8135611fc0611fbb82611f59565b611f0a565b818152846020838601011115611fd4575f5ffd5b816020850160208301375f918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114612013575f5ffd5b919050565b80358015158114612013575f5ffd5b5f6101408284031215612038575f5ffd5b612040611ee0565b823581529050602082013567ffffffffffffffff81111561205f575f5ffd5b61206b84828501611f9e565b602083015250604082013567ffffffffffffffff81111561208a575f5ffd5b61209684828501611f9e565b6040830152506120a860608301611ff0565b60608201526120b960808301611ff0565b60808201526120ca60a08301611ff0565b60a082015260c0828101359082015260e080830135908201526120f06101008301612018565b6101008201526121036101208301612018565b61012082015292915050565b5f6080828403121561211f575f5ffd5b50919050565b5f5f5f5f60608587031215612138575f5ffd5b843567ffffffffffffffff81111561214e575f5ffd5b61215a87828801612027565b945050602085013567ffffffffffffffff811115612176575f5ffd5b8501601f81018713612186575f5ffd5b803567ffffffffffffffff81111561219c575f5ffd5b8760208260051b84010111156121b0575f5ffd5b60209190910193509150604085013567ffffffffffffffff8111156121d3575f5ffd5b6121df8782880161210f565b91505092959194509250565b5f5f604083850312156121fc575f5ffd5b823567ffffffffffffffff811115612212575f5ffd5b83016101408186031215612224575f5ffd5b9150602083013567ffffffffffffffff81111561223f575f5ffd5b61224b8582860161210f565b9150509250929050565b5f60208284031215612265575f5ffd5b5035919050565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261229f575f5ffd5b83018035915067ffffffffffffffff8211156122b9575f5ffd5b6020019150368190038213156122cd575f5ffd5b9250929050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b81810381811115611126576111266122d4565b5f6111263683612027565b5f6020828403121561232f575f5ffd5b61156082611ff0565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112612397575f5ffd5b9190910192915050565b5f81518060208401855e5f93019283525090919050565b5f61156082846123a1565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b602081525f61156060208301846123c3565b5f61243561242f83866123a1565b846123a1565b949350505050565b60208152815160208201525f602083015161014060408401526124646101608401826123c3565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe084830301606085015261249f82826123c3565b91505060608401516124c9608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e084015161010084015261010084015161253861012085018215159052565b50610120840151801515610140850152509392505050565b5f60208284031215612560575f5ffd5b61156082612018565b5f5f85851115612577575f5ffd5b83861115612583575f5ffd5b5050820193919092039150565b80357fffffffff0000000000000000000000000000000000000000000000000000000081169060048410156125ef577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b5f60208284031215612606575f5ffd5b815167ffffffffffffffff81111561261c575f5ffd5b8201601f8101841361262c575f5ffd5b805161263a611fbb82611f59565b81815285602083850101111561264e575f5ffd5b8160208401602083015e5f91810160200191909152949350505050565b818382375f9101908152919050565b80820180821115611126576111266122d4565b5f6020828403121561269d575f5ffd5b505191905056fea2646970667358221220892a93b2bd0c86cef417125468140065b5af233cd3109428209434957acf6b4864736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_relayReceiver";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_relaySolver";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "consumedIds";
        readonly inputs: readonly [{
            readonly name: "requestId";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaRelay";
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
            readonly name: "_relayData";
            readonly type: "tuple";
            readonly internalType: "struct RelayFacet.RelayData";
            readonly components: readonly [{
                readonly name: "requestId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "nonEVMReceiver";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "receivingAssetId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "signature";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaRelay";
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
            readonly name: "_relayData";
            readonly type: "tuple";
            readonly internalType: "struct RelayFacet.RelayData";
            readonly components: readonly [{
                readonly name: "requestId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "nonEVMReceiver";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "receivingAssetId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "signature";
                readonly type: "bytes";
                readonly internalType: "bytes";
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
        readonly name: "BridgeToNonEVMChain";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "destinationChainId";
            readonly type: "uint256";
            readonly indexed: true;
            readonly internalType: "uint256";
        }, {
            readonly name: "receiver";
            readonly type: "bytes";
            readonly indexed: false;
            readonly internalType: "bytes";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "BridgeToNonEVMChainBytes32";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "destinationChainId";
            readonly type: "uint256";
            readonly indexed: true;
            readonly internalType: "uint256";
        }, {
            readonly name: "receiver";
            readonly type: "bytes32";
            readonly indexed: false;
            readonly internalType: "bytes32";
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
        readonly name: "InvalidNonEVMReceiver";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidQuote";
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
    static createInterface(): RelayFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): RelayFacet;
}
export {};
