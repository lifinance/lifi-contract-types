import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { AmarokFacetPacked, AmarokFacetPackedInterface } from "../AmarokFacetPacked";
declare type AmarokFacetPackedConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class AmarokFacetPacked__factory extends ContractFactory {
    constructor(...args: AmarokFacetPackedConstructorParams);
    deploy(_connextHandler: PromiseOrValue<string>, _owner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<AmarokFacetPacked>;
    getDeployTransaction(_connextHandler: PromiseOrValue<string>, _owner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): AmarokFacetPacked;
    connect(signer: Signer): AmarokFacetPacked__factory;
    static readonly bytecode = "0x60a06040523480156200001157600080fd5b506040516200292d3803806200292d833981016040819052620000349162000073565b600080546001600160a01b0319166001600160a01b0392831617905516608052620000b2565b6001600160a01b03811681146200007057600080fd5b50565b600080604083850312156200008757600080fd5b825162000094816200005a565b6020840151909250620000a7816200005a565b809150509250929050565b608051612843620000ea60003960008181610404015281816105f001528181610a0a01528181610eab015261149701526128436000f3fe6080604052600436106100e85760003560e01c80638da5cb5b1161008a578063e30c397811610059578063e30c39781461028c578063ecda1c0e146102b9578063f2fde38b146102c1578063f536efc6146102e157600080fd5b80638da5cb5b146101d057806390f21c80146102225780639c5647d914610237578063df0359e21461025757600080fd5b806362fcecbf116100c657806362fcecbf14610144578063698fbb561461017b57806370313c4b1461018e5780637200b829146101bb57600080fd5b806323452b9c146100ed5780633abdecb4146101045780634c47864214610124575b600080fd5b3480156100f957600080fd5b50610102610301565b005b34801561011057600080fd5b5061010261011f3660046121b8565b6103cb565b34801561013057600080fd5b5061010261013f366004612222565b610567565b34801561015057600080fd5b5061016461015f366004612297565b61064d565b6040516101729291906123e6565b60405180910390f35b61010261018936600461251a565b61096c565b34801561019a57600080fd5b506101ae6101a936600461251a565b610ad8565b6040516101729190612579565b3480156101c757600080fd5b50610102610d14565b3480156101dc57600080fd5b506000546101fd9073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610172565b34801561022e57600080fd5b50610102610dfa565b34801561024357600080fd5b50610164610252366004612297565b611055565b34801561026357600080fd5b50610277610272366004612593565b61134f565b60405163ffffffff9091168152602001610172565b34801561029857600080fd5b506001546101fd9073ffffffffffffffffffffffffffffffffffffffff1681565b610102611404565b3480156102cd57600080fd5b506101026102dc3660046125ae565b611631565b3480156102ed57600080fd5b506101ae6102fc3660046121b8565b61178f565b60005473ffffffffffffffffffffffffffffffffffffffff163314610352576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff166103a1576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b6103ed73ffffffffffffffffffffffffffffffffffffffff8616333087611a73565b73ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000166393f18ac584888881610437878b6125f8565b60405160e087901b7fffffffff0000000000000000000000000000000000000000000000000000000016815263ffffffff95909516600486015273ffffffffffffffffffffffffffffffffffffffff938416602486015291831660448501529091166064830152608482015260a4810185905261010060c4820152600061010482015260e48101849052610124016020604051808303816000875af11580156104e4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610508919061260b565b506040517fffffffffffffffff000000000000000000000000000000000000000000000000881681527fe13311fb0fe0ee03852624f65380d885625f6dd9797b55c8404d22b093c10fbd9060200160405180910390a150505050505050565b60005473ffffffffffffffffffffffffffffffffffffffff1633146105b8576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060005b81811015610647576106358484838181106105d9576105d9612624565b90506020020160208101906105ee91906125ae565b7f00000000000000000000000000000000000000000000000000000000000000007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611b39565b8061063f81612653565b9150506105bc565b50505050565b6040805161014081018252600080825260606020808401829052838501829052818401839052608080850184905260a080860185905260c080870186905260e0808801879052610100880187905261012088018790528851908101895285815293840186905296830185905292820184905281018390529081018290529283015290605c831015610765576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602860248201527f646174612070617373656420696e206973206e6f742074686520636f7272656360448201527f74206c656e67746800000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b604080516101408101825260008082526060602083018190529282018390529181018290526080810182905260a0810182905260c0810182905260e0810182905261010081018290526101208101919091526040805160e081018252606080825260006020830181905292820183905281018290526080810182905260a0810182905260c0810191909152600061080060486044888a61268b565b610809916126b5565b60e01c905061081c600c6004888a61268b565b610825916126fd565b7fffffffffffffffff0000000000000000000000000000000000000000000000001683526108576020600c888a61268b565b61086091612743565b60601c60a08401526108718161134f565b63ffffffff1660e084015261088a60346020888a61268b565b61089391612743565b60601c60808401526108a960446034888a61268b565b6108b291612789565b60801c60c084015260408051602080820190925260008152835260a08085015173ffffffffffffffffffffffffffffffffffffffff169184019190915263ffffffff821690830152610908604c6048888a61268b565b610911916126b5565b60e01c6060830152610927605c604c888a61268b565b61093091612789565b608090811c604084015260a084015173ffffffffffffffffffffffffffffffffffffffff169083015250600160c0820152909590945092505050565b61098e73ffffffffffffffffffffffffffffffffffffffff8516333086611a73565b6040517f8aac16ba00000000000000000000000000000000000000000000000000000000815263ffffffff8316600482015273ffffffffffffffffffffffffffffffffffffffff86811660248301819052868216604484015260648301526084820185905260a4820183905260e060c4830152600060e48301527f00000000000000000000000000000000000000000000000000000000000000001690638aac16ba9034906101040160206040518083038185885af1158015610a55573d6000803e3d6000fd5b50505050506040513d601f19601f82011682018060405250810190610a7a919061260b565b506040517fffffffffffffffff000000000000000000000000000000000000000000000000871681527fe13311fb0fe0ee03852624f65380d885625f6dd9797b55c8404d22b093c10fbd9060200160405180910390a1505050505050565b60606fffffffffffffffffffffffffffffffff841115610b7a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603060248201527f6d696e416d6f756e742076616c75652070617373656420746f6f20626967207460448201527f6f2066697420696e2075696e7431323800000000000000000000000000000000606482015260840161075c565b63ffffffff821115610c0e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603160248201527f736c697070616765546f6c2076616c75652070617373656420746f6f2062696760448201527f20746f2066697420696e2075696e743332000000000000000000000000000000606482015260840161075c565b50604080517fecda1c0e0000000000000000000000000000000000000000000000000000000060208201527fffffffffffffffff000000000000000000000000000000000000000000000000979097166024880152606095861b7fffffffffffffffffffffffffffffffffffffffff000000000000000000000000908116602c8901529490951b9093168585015260809190911b7fffffffffffffffffffffffffffffffff0000000000000000000000000000000016605485015260e090811b7fffffffff00000000000000000000000000000000000000000000000000000000908116606486015291901b1660688301528051604c818403018152606c909201905290565b60015473ffffffffffffffffffffffffffffffffffffffff16338114610d66576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b6000610e0a60346020368461268b565b610e1391612743565b60601c90506000610e2860446034368461268b565b610e3191612789565b60801c90506000610e466020600c368461268b565b610e4f91612743565b60601c90506000610e64605c604c368461268b565b610e6d916126b5565b60e01c9050610e9473ffffffffffffffffffffffffffffffffffffffff8516333086611a73565b73ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000166393f18ac5610edf6048604436600061268b565b610ee8916126b5565b60e01c848781610ef8878a6125f8565b610f07604c604836600061268b565b610f10916126b5565b60405160e088811b7fffffffff0000000000000000000000000000000000000000000000000000000016825263ffffffff909716600482015273ffffffffffffffffffffffffffffffffffffffff958616602482015293851660448501529390911660648301526084820152911c60a482015261010060c4820152600061010482015260e48101849052610124016020604051808303816000875af1158015610fbd573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fe1919061260b565b507fe13311fb0fe0ee03852624f65380d885625f6dd9797b55c8404d22b093c10fbd611012600c600436600061268b565b61101b916126fd565b6040517fffffffffffffffff000000000000000000000000000000000000000000000000909116815260200160405180910390a150505050565b6040805161014081018252600080825260606020808401829052838501829052818401839052608080850184905260a080860185905260c080870186905260e0808801879052610100880187905261012088018790528851908101895285815293840186905296830185905292820184905281018390529081018290529283015290604c831015611168576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602860248201527f646174612070617373656420696e206973206e6f742074686520636f7272656360448201527f74206c656e677468000000000000000000000000000000000000000000000000606482015260840161075c565b604080516101408101825260008082526060602083018190529282018390529181018290526080810182905260a0810182905260c0810182905260e0810182905261010081018290526101208101919091526040805160e081018252606080825260006020830181905292820183905281018290526080810182905260a0810182905260c0810191909152600061120360486044888a61268b565b61120c916126b5565b60e01c905061121f600c6004888a61268b565b611228916126fd565b7fffffffffffffffff00000000000000000000000000000000000000000000000016835261125a6020600c888a61268b565b61126391612743565b60601c60a08401526112748161134f565b63ffffffff1660e084015261128d60346020888a61268b565b61129691612743565b60601c60808401526112ac60446034888a61268b565b6112b591612789565b60801c60c084015260408051602080820190925260008152835260a08085015173ffffffffffffffffffffffffffffffffffffffff169184019190915263ffffffff82169083015261130b604c6048888a61268b565b611314916126b5565b60e01c60608301525060a082015173ffffffffffffffffffffffffffffffffffffffff166080820152600060c0820152909590945092505050565b60008163ffffffff16626574680361136957506001919050565b8163ffffffff1663706f6c790361138257506089919050565b8163ffffffff1662626e620361139a57506038919050565b8163ffffffff16636f707469036113b35750600a919050565b8163ffffffff1662676e6f036113cb57506064919050565b8163ffffffff16636172626f036113e5575061a4b1919050565b8163ffffffff16636c696e6d036113ff575061e708919050565b919050565b600061141460346020368461268b565b61141d91612743565b60601c9050600061143260446034368461268b565b61143b91612789565b60801c905060006114506020600c368461268b565b61145991612743565b60601c905061148073ffffffffffffffffffffffffffffffffffffffff8416333085611a73565b73ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016638aac16ba346114cc6048604436600061268b565b6114d5916126b5565b60e01c848781886114eb604c604836600061268b565b6114f4916126b5565b60405160e089811b7fffffffff0000000000000000000000000000000000000000000000000000000016825263ffffffff909716600482015273ffffffffffffffffffffffffffffffffffffffff95861660248201529385166044850152939091166064830152608482015290821c60a482015260c4810191909152600060e48201526101040160206040518083038185885af1158015611599573d6000803e3d6000fd5b50505050506040513d601f19601f820116820180604052508101906115be919061260b565b507fe13311fb0fe0ee03852624f65380d885625f6dd9797b55c8404d22b093c10fbd6115ef600c600436600061268b565b6115f8916126fd565b6040517fffffffffffffffff000000000000000000000000000000000000000000000000909116815260200160405180910390a1505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314611682576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff81166116cf576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff82160361171e576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae127890600090a350565b60606fffffffffffffffffffffffffffffffff851115611831576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603060248201527f6d696e416d6f756e742076616c75652070617373656420746f6f20626967207460448201527f6f2066697420696e2075696e7431323800000000000000000000000000000000606482015260840161075c565b63ffffffff8311156118c5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603160248201527f736c697070616765546f6c2076616c75652070617373656420746f6f2062696760448201527f20746f2066697420696e2075696e743332000000000000000000000000000000606482015260840161075c565b6fffffffffffffffffffffffffffffffff821115611965576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603160248201527f72656c617965724665652076616c75652070617373656420746f6f206269672060448201527f746f2066697420696e2075696e74313238000000000000000000000000000000606482015260840161075c565b50604080517f90f21c800000000000000000000000000000000000000000000000000000000060208201527fffffffffffffffff0000000000000000000000000000000000000000000000009890981660248901527fffffffffffffffffffffffffffffffffffffffff000000000000000000000000606097881b8116602c8a01529590961b909416868601527fffffffffffffffffffffffffffffffff00000000000000000000000000000000608093841b811660548801527fffffffff0000000000000000000000000000000000000000000000000000000060e093841b811660648901529190921b16606886015291901b16606c8301528051808303605c018152607c909201905290565b60006040517f23b872dd0000000000000000000000000000000000000000000000000000000081528460048201528360248201528260448201526020600060648360008a5af13d15601f3d1160016000511416171691505080611b32576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f5452414e534645525f46524f4d5f4641494c4544000000000000000000000000604482015260640161075c565b5050505050565b73ffffffffffffffffffffffffffffffffffffffff8316611b5957505050565b73ffffffffffffffffffffffffffffffffffffffff8216611ba6576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa158015611c1b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611c3f919061260b565b1015611c7057611c7083837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611c75565b505050565b6040805173ffffffffffffffffffffffffffffffffffffffff8416602482015260448082018490528251808303909101815260649091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f095ea7b300000000000000000000000000000000000000000000000000000000179052611d018482611d9f565b610647576040805173ffffffffffffffffffffffffffffffffffffffff8516602482015260006044808301919091528251808303909101815260649091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f095ea7b300000000000000000000000000000000000000000000000000000000179052611d95908590611e62565b6106478482611e62565b60008060008473ffffffffffffffffffffffffffffffffffffffff1684604051611dc991906127cf565b6000604051808303816000865af19150503d8060008114611e06576040519150601f19603f3d011682016040523d82523d6000602084013e611e0b565b606091505b5091509150818015611e35575080511580611e35575080806020019051810190611e3591906127eb565b8015611e57575073ffffffffffffffffffffffffffffffffffffffff85163b15155b925050505b92915050565b6000611ec4826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611f719092919063ffffffff16565b9050805160001480611ee5575080806020019051810190611ee591906127eb565b611c70576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f74207375636365656400000000000000000000000000000000000000000000606482015260840161075c565b6060611f808484600085611f88565b949350505050565b60608247101561201a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c0000000000000000000000000000000000000000000000000000606482015260840161075c565b6000808673ffffffffffffffffffffffffffffffffffffffff16858760405161204391906127cf565b60006040518083038185875af1925050503d8060008114612080576040519150601f19603f3d011682016040523d82523d6000602084013e612085565b606091505b5091509150612096878383876120a1565b979650505050505050565b606083156121375782516000036121305773ffffffffffffffffffffffffffffffffffffffff85163b612130576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161075c565b5081611f80565b611f80838381511561214c5781518083602001fd5b806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161075c9190612579565b803573ffffffffffffffffffffffffffffffffffffffff811681146113ff57600080fd5b803563ffffffff811681146113ff57600080fd5b600080600080600080600060e0888a0312156121d357600080fd5b873596506121e360208901612180565b95506121f160408901612180565b945060608801359350612206608089016121a4565b925060a0880135915060c0880135905092959891949750929550565b6000806020838503121561223557600080fd5b823567ffffffffffffffff8082111561224d57600080fd5b818501915085601f83011261226157600080fd5b81358181111561227057600080fd5b8660208260051b850101111561228557600080fd5b60209290920196919550909350505050565b600080602083850312156122aa57600080fd5b823567ffffffffffffffff808211156122c257600080fd5b818501915085601f8301126122d657600080fd5b8135818111156122e557600080fd5b86602082850101111561228557600080fd5b60005b838110156123125781810151838201526020016122fa565b50506000910152565b600081518084526123338160208601602086016122f7565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6000815160e0845261237a60e085018261231b565b9050602083015173ffffffffffffffffffffffffffffffffffffffff80821660208701526040850151604087015260608501516060870152806080860151166080870152505063ffffffff60a08401511660a085015260c0830151151560c08501528091505092915050565b60408152825160408201526000602084015161014080606085015261240f61018085018361231b565b915060408601517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc085840301608086015261244a838261231b565b925050606086015161247460a086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608086015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060a086015173ffffffffffffffffffffffffffffffffffffffff811660e08601525060c0860151610100818187015260e0880151915061012082818801528189015192506124e88488018415159052565b88015180151561016088015292506124fe915050565b5082810360208401526125118185612365565b95945050505050565b60008060008060008060c0878903121561253357600080fd5b8635955061254360208801612180565b945061255160408801612180565b935060608701359250612566608088016121a4565b915060a087013590509295509295509295565b60208152600061258c602083018461231b565b9392505050565b6000602082840312156125a557600080fd5b61258c826121a4565b6000602082840312156125c057600080fd5b61258c82612180565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b81810381811115611e5c57611e5c6125c9565b60006020828403121561261d57600080fd5b5051919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203612684576126846125c9565b5060010190565b6000808585111561269b57600080fd5b838611156126a857600080fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156126f55780818660040360031b1b83161692505b505092915050565b7fffffffffffffffff00000000000000000000000000000000000000000000000081358181169160088510156126f55760089490940360031b84901b1690921692915050565b7fffffffffffffffffffffffffffffffffffffffff00000000000000000000000081358181169160148510156126f55760149490940360031b84901b1690921692915050565b7fffffffffffffffffffffffffffffffff0000000000000000000000000000000081358181169160108510156126f55760109490940360031b84901b1690921692915050565b600082516127e18184602087016122f7565b9190910192915050565b6000602082840312156127fd57600080fd5b8151801515811461258c57600080fdfea26469706673582212208786e44ac427fc2bfc6c5e4a65e59a7bb70aeacebb881895a2ff402be369dfc764736f6c63430008110033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_connextHandler";
            readonly type: "address";
            readonly internalType: "contract IConnextHandler";
        }, {
            readonly name: "_owner";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "cancelOwnershipTransfer";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "confirmOwnershipTransfer";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "decode_startBridgeTokensViaAmarokERC20PackedPayFeeWithAsset";
        readonly inputs: readonly [{
            readonly name: "_data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [{
            readonly name: "";
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
            readonly name: "";
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
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "decode_startBridgeTokensViaAmarokERC20PackedPayFeeWithNative";
        readonly inputs: readonly [{
            readonly name: "_data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [{
            readonly name: "";
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
            readonly name: "";
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
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "encode_startBridgeTokensViaAmarokERC20PackedPayFeeWithAsset";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "sendingAssetId";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "minAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "destChainDomainId";
            readonly type: "uint32";
            readonly internalType: "uint32";
        }, {
            readonly name: "slippageTol";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "relayerFee";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "encode_startBridgeTokensViaAmarokERC20PackedPayFeeWithNative";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "sendingAssetId";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "minAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "destChainDomainId";
            readonly type: "uint32";
            readonly internalType: "uint32";
        }, {
            readonly name: "slippageTol";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "getChainIdForDomain";
        readonly inputs: readonly [{
            readonly name: "domainId";
            readonly type: "uint32";
            readonly internalType: "uint32";
        }];
        readonly outputs: readonly [{
            readonly name: "chainId";
            readonly type: "uint32";
            readonly internalType: "uint32";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "owner";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "pendingOwner";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "setApprovalForBridge";
        readonly inputs: readonly [{
            readonly name: "tokensToApprove";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaAmarokERC20MinPayFeeWithAsset";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "sendingAssetId";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "minAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "destChainDomainId";
            readonly type: "uint32";
            readonly internalType: "uint32";
        }, {
            readonly name: "slippageTol";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "relayerFee";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaAmarokERC20MinPayFeeWithNative";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "sendingAssetId";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "minAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "destChainDomainId";
            readonly type: "uint32";
            readonly internalType: "uint32";
        }, {
            readonly name: "slippageTol";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaAmarokERC20PackedPayFeeWithAsset";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaAmarokERC20PackedPayFeeWithNative";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "transferOwnership";
        readonly inputs: readonly [{
            readonly name: "_newOwner";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "event";
        readonly name: "LiFiAmarokTransfer";
        readonly inputs: readonly [{
            readonly name: "_transactionId";
            readonly type: "bytes8";
            readonly indexed: false;
            readonly internalType: "bytes8";
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
        readonly type: "event";
        readonly name: "OwnershipTransferRequested";
        readonly inputs: readonly [{
            readonly name: "_from";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "_to";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "OwnershipTransferred";
        readonly inputs: readonly [{
            readonly name: "previousOwner";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "newOwner";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "error";
        readonly name: "NewOwnerMustNotBeSelf";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NoNullOwner";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NoPendingOwnershipTransfer";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NotPendingOwner";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NullAddrIsNotAValidSpender";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "UnAuthorized";
        readonly inputs: readonly [];
    }];
    static createInterface(): AmarokFacetPackedInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): AmarokFacetPacked;
}
export {};
