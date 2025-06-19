import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { RelayFacet, RelayFacetInterface } from "../RelayFacet";
declare type RelayFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
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
    static readonly bytecode = "0x60c060405234801561000f575f5ffd5b506040516127b23803806127b283398101604081905261002e91610060565b6001600160a01b039182166080521660a052610091565b80516001600160a01b038116811461005b575f5ffd5b919050565b5f5f60408385031215610071575f5ffd5b61007a83610045565b915061008860208401610045565b90509250929050565b60805160a0516126e66100cc5f395f81816082015281816103f1015281816107bf0152610d7501525f818160df0152610c7001526126e65ff3fe608060405260043610610058575f3560e01c8063981886a711610041578063981886a7146100ce578063ae32859014610101578063f21a211614610114575f5ffd5b806325d374e81461005c57806381d82dd814610071575b5f5ffd5b61006f61006a366004612131565b610152565b005b34801561007c575f5ffd5b506100a47f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b3480156100d9575f5ffd5b506100a47f000000000000000000000000000000000000000000000000000000000000000081565b61006f61010f3660046121f7565b610626565b34801561011f575f5ffd5b5061014261012e366004612261565b5f6020819052908152604090205460ff1681565b60405190151581526020016100c5565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016101cd576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815581355f908152602081905260409020548590839060ff161561021f576040517ff861803000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60a082015173ffffffffffffffffffffffffffffffffffffffff167311f111f111f111f111f111f111f111f111f111f114801561025e57506020810135155b15610295576040517ff861803000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608082015160e08301515f916103a0918435914691309173ffffffffffffffffffffffffffffffffffffffff16906102cc90610a0a565b60a089015173ffffffffffffffffffffffffffffffffffffffff167311f111f111f111f111f111f111f111f111f111f1146103215760a089015173ffffffffffffffffffffffffffffffffffffffff16610327565b87602001355b604080516020810197909752868101959095526060860193909352608085019190915260a084015260c083015284013560e082015261010001604051602081830303815290604052805190602001206020527b19457468657265756d205369676e6564204d6573736167653a0a33325f52603c60042090565b90505f6103ed826103b46060860186612278565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284375f92019190915250610a3f92505050565b90507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610474576040517ff861803000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b335f610480344761230d565b90508a8061010001516104bf576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8b806101200151156104fd576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8c6105208160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610557576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f03610594576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036105d1576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6105e58e5f01518f60c001518f8f33610ae3565b60c08f01526105f48e8c610c26565b504791505081811115610615576106155f84610610858561230d565b610ffa565b50505f909555505050505050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016106a1576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181556106ae83612320565b82355f90815260208190526040902054839060ff16156106fa576040517ff861803000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60a082015173ffffffffffffffffffffffffffffffffffffffff167311f111f111f111f111f111f111f111f111f111f114801561073957506020810135155b15610770576040517ff861803000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608082015160e08301515f916107a7918435914691309173ffffffffffffffffffffffffffffffffffffffff16906102cc90610a0a565b90505f6107bb826103b46060860186612278565b90507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610842576040517ff861803000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b335f61084e344761230d565b905061085989612320565b60a081015173ffffffffffffffffffffffffffffffffffffffff166108aa576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036108e7576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610924576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61092d8a612320565b8061010001511561096a576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6109738b612320565b806101200151156109b0576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6109cd6109c360a08e0160808f0161232b565b8d60c0013561102f565b6109df6109d98d612320565b8c610c26565b5047915050818111156109fb576109fb5f84610610858561230d565b50505f90955550505050505050565b5f816512309ce5400103610a225750627dee6e919050565b81660416edef1601be03610a3b5750632f3fb341919050565b5090565b604051600190835f5260208301516040526040835103610a9357604083015160ff81901c601b016020527f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff16606052610ab7565b6041835103610ab35760608301515f1a6020526040830151606052610ab7565b5f91505b6020600160805f855afa5191503d610ad657638baa579f5f526004601cfd5b5f60605260405292915050565b5f82808203610b1e576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f8585610b2c60018561230d565b818110610b3b57610b3b612344565b9050602002810190610b4d9190612371565b610b5e90608081019060600161232b565b90505f610b6a826110e3565b905073ffffffffffffffffffffffffffffffffffffffff8216610b9457610b91348261230d565b90505b5f610b9f888861112d565b9050610bab8888611237565b610bb88a898989856112a3565b5f82610bc3856110e3565b610bcd919061230d565b905089811015610c18576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044015b60405180910390fd5b9a9950505050505050505050565b608082015173ffffffffffffffffffffffffffffffffffffffff16610d565760c082015160408051833560208201525f92839273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169201604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081840301815290829052610cca916123c4565b5f6040518083038185875af1925050503d805f8114610d04576040519150601f19603f3d011682016040523d82523d5f602084013e610d09565b606091505b509150915081610d4f57610d1c81611465565b6040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c0f919061241b565b5050610efe565b60c082015160405173ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016602482015260448101919091525f90606401604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152918152602080830180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fa9059cbb000000000000000000000000000000000000000000000000000000001790529051610e31918535910190815260200190565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081840301815290829052610e6d929160200161242d565b60405160208183030381529060405290505f5f846080015173ffffffffffffffffffffffffffffffffffffffff1683604051610ea991906123c4565b5f604051808303815f865af19150503d805f8114610ee2576040519150601f19603f3d011682016040523d82523d5f602084013e610ee7565b606091505b509150915081610efa57610d1c81611465565b5050505b80355f908152602081905260409020805460017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0090911617905560a082015173ffffffffffffffffffffffffffffffffffffffff167fffffffffffffffffffffffffee0eee0eee0eee0eee0eee0eee0eee0eee0eee0f01610fbf57610f868260e00151610a0a565b825160405160208481013582527f7be3e48a8a8b4d32138937e1809ac83481fffe48e49bb60e43ed1d3d50349e4c910160405180910390a35b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f182604051610fee9190612449565b60405180910390a15050565b73ffffffffffffffffffffffffffffffffffffffff83166110245761101f82826114e2565b505050565b61101f83838361154f565b805f03611068576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166110c157803410156110bd576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6110bd73ffffffffffffffffffffffffffffffffffffffff83163330846115bd565b5f73ffffffffffffffffffffffffffffffffffffffff8216156111255761112073ffffffffffffffffffffffffffffffffffffffff831630611615565b611127565b475b92915050565b6060815f8167ffffffffffffffff81111561114a5761114a611ebf565b604051908082528060200260200182016040528015611173578160200160208202803683370190505b5090505f805b8381101561122c5786868281811061119357611193612344565b90506020028101906111a59190612371565b6111b690608081019060600161232b565b91506111c1826110e3565b8382815181106111d3576111d3612344565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216611224573483828151811061120c5761120c612344565b60200260200101818151611220919061230d565b9052505b600101611179565b509095945050505050565b5f5b8181101561101f573683838381811061125457611254612344565b90506020028101906112669190612371565b905061127860e0820160c0830161255c565b1561129a5761129a611290606083016040840161232b565b826080013561102f565b50600101611239565b83838383825f5b8181101561144b57368a8a838181106112c5576112c5612344565b90506020028101906112d79190612371565b90506113066112ec606083016040840161232b565b73ffffffffffffffffffffffffffffffffffffffff161590565b80611368575061136861131f604083016020840161232b565b73ffffffffffffffffffffffffffffffffffffffff165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b801561137f575061137f61131f602083018361232b565b8015611402575061140261139660a0830183612278565b6113a4916004915f91612575565b6113ad9161259c565b7fffffffff00000000000000000000000000000000000000000000000000000000165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b611438576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6114428c82611648565b506001016112aa565b505061145a848484845f6118b8565b505050505050505050565b60606044825110156114aa57505060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c79000000602082015290565b5f6114c560048085516114bd919061230d565b859190611acf565b9050808060200190518101906114db9190612602565b9392505050565b73ffffffffffffffffffffffffffffffffffffffff821661152f576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6110bd73ffffffffffffffffffffffffffffffffffffffff831682611be8565b73ffffffffffffffffffffffffffffffffffffffff821661159c576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61101f73ffffffffffffffffffffffffffffffffffffffff84168383611c01565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f5114171661160857637939f4245f526004601cfd5b5f60605260405250505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b61165d611658602083018361232b565b611c4a565b611693576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f8190036116d2576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6116e66112ec606085016040860161232b565b6116f0575f6116f6565b82608001355b90505f61171161170c608086016060870161232b565b6110e3565b9050815f036117475761174761172d606086016040870161232b565b61173d604087016020880161232b565b8660800135611cde565b5f80611756602087018761232b565b73ffffffffffffffffffffffffffffffffffffffff168461177a60a0890189612278565b604051611788929190612677565b5f6040518083038185875af1925050503d805f81146117c2576040519150601f19603f3d011682016040523d82523d5f602084013e6117c7565b606091505b5091509150816117da576117da81611d0a565b5f6117ee61170c6080890160608a0161232b565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388861181f60208a018a61232b565b61182f60608b0160408c0161232b565b61183f60808c0160608d0161232b565b8b60800135898711611851578661185b565b61185b8a8861230d565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b835f86826118c760018261230d565b8181106118d6576118d6612344565b90506020028101906118e89190612371565b6118f990608081019060600161232b565b90505f8080808080805b88811015611abf5761191660018a61230d565b81108015611925575088600114155b15611a00578d8d8281811061193c5761193c612344565b905060200281019061194e9190612371565b61195f90608081019060600161232b565b95508773ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff1614611a00578a81815181106119a6576119a6612344565b60200260200101516119b7876110e3565b6119c1919061230d565b965073ffffffffffffffffffffffffffffffffffffffff8616156119e5575f6119e7565b895b935083871115611a0057611a00868d610610878b61230d565b8d8d82818110611a1257611a12612344565b9050602002810190611a249190612371565b611a3590606081019060400161232b565b9450611a40856110e3565b925073ffffffffffffffffffffffffffffffffffffffff851615611a64575f611a66565b895b91508183118015611aa357508773ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b15611ab757611ab7858d610610858761230d565b600101611903565b5050505050505050505050505050565b606081611add81601f612686565b1015611b15576040517f47aaf07a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611b1f8284612686565b84511015611b59576040517f3b99b53d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b606082158015611b775760405191505f825260208201604052611bdf565b6040519150601f8416801560200281840101858101878315602002848b0101015b81831015611bb0578051835260209283019201611b98565b5050858452601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016604052505b50949350505050565b5f385f3884865af16110bd5763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f51141716611c41576390b8ec185f526004601cfd5b5f603452505050565b6040805160178082528183019092525f9182919060208201818036833701905050905060175f60208301853c60208101517f10ff0000000000000000000000000000000000000000000000000000000000007fffffff0000000000000000000000000000000000000000000000000000000000821601611cd557506023015160601c3b151592915050565b5050503b151590565b61101f8383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611d14565b8051602082018181fd5b73ffffffffffffffffffffffffffffffffffffffff841615611e3b5773ffffffffffffffffffffffffffffffffffffffff8316611d7d576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015611df0573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611e149190612699565b1015611e3b57611e3b73ffffffffffffffffffffffffffffffffffffffff85168483611e41565b50505050565b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f51141716611c41575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f51141716611c4157633e3f8f735f526004601cfd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff81118282101715611f1057611f10611ebf565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715611f5d57611f5d611ebf565b604052919050565b5f67ffffffffffffffff821115611f7e57611f7e611ebf565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b5f82601f830112611fb9575f5ffd5b8135611fcc611fc782611f65565b611f16565b818152846020838601011115611fe0575f5ffd5b816020850160208301375f918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461201f575f5ffd5b919050565b8035801515811461201f575f5ffd5b5f6101408284031215612044575f5ffd5b61204c611eec565b823581529050602082013567ffffffffffffffff81111561206b575f5ffd5b61207784828501611faa565b602083015250604082013567ffffffffffffffff811115612096575f5ffd5b6120a284828501611faa565b6040830152506120b460608301611ffc565b60608201526120c560808301611ffc565b60808201526120d660a08301611ffc565b60a082015260c0828101359082015260e080830135908201526120fc6101008301612024565b61010082015261210f6101208301612024565b61012082015292915050565b5f6080828403121561212b575f5ffd5b50919050565b5f5f5f5f60608587031215612144575f5ffd5b843567ffffffffffffffff81111561215a575f5ffd5b61216687828801612033565b945050602085013567ffffffffffffffff811115612182575f5ffd5b8501601f81018713612192575f5ffd5b803567ffffffffffffffff8111156121a8575f5ffd5b8760208260051b84010111156121bc575f5ffd5b60209190910193509150604085013567ffffffffffffffff8111156121df575f5ffd5b6121eb8782880161211b565b91505092959194509250565b5f5f60408385031215612208575f5ffd5b823567ffffffffffffffff81111561221e575f5ffd5b83016101408186031215612230575f5ffd5b9150602083013567ffffffffffffffff81111561224b575f5ffd5b6122578582860161211b565b9150509250929050565b5f60208284031215612271575f5ffd5b5035919050565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126122ab575f5ffd5b83018035915067ffffffffffffffff8211156122c5575f5ffd5b6020019150368190038213156122d9575f5ffd5b9250929050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b81810381811115611127576111276122e0565b5f6111273683612033565b5f6020828403121561233b575f5ffd5b6114db82611ffc565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff218336030181126123a3575f5ffd5b9190910192915050565b5f81518060208401855e5f93019283525090919050565b5f6114db82846123ad565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b602081525f6114db60208301846123cf565b5f61244161243b83866123ad565b846123ad565b949350505050565b60208152815160208201525f602083015161014060408401526124706101608401826123cf565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08483030160608501526124ab82826123cf565b91505060608401516124d5608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e084015161010084015261010084015161254461012085018215159052565b50610120840151801515610140850152509392505050565b5f6020828403121561256c575f5ffd5b6114db82612024565b5f5f85851115612583575f5ffd5b8386111561258f575f5ffd5b5050820193919092039150565b80357fffffffff0000000000000000000000000000000000000000000000000000000081169060048410156125fb577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b5f60208284031215612612575f5ffd5b815167ffffffffffffffff811115612628575f5ffd5b8201601f81018413612638575f5ffd5b8051612646611fc782611f65565b81815285602083850101111561265a575f5ffd5b8160208401602083015e5f91810160200191909152949350505050565b818382375f9101908152919050565b80820180821115611127576111276122e0565b5f602082840312156126a9575f5ffd5b505191905056fea26469706673582212208e0d24f43a30b187801a339fe9cc2dd33e04c2ebf1dd987d8dc5eefcabea735564736f6c634300081d0033";
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
            readonly name: "";
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
        readonly name: "relayReceiver";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "relaySolver";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
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
        readonly name: "InvalidContract";
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
