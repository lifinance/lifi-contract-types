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
    static readonly bytecode = "0x60a06040523480156200001157600080fd5b506040516200291338038062002913833981016040819052620000349162000073565b600080546001600160a01b0319166001600160a01b0392831617905516608052620000b2565b6001600160a01b03811681146200007057600080fd5b50565b600080604083850312156200008757600080fd5b825162000094816200005a565b6020840151909250620000a7816200005a565b809150509250929050565b608051612829620000ea60003960008181610404015281816105f001528181610a0a01528181610eab015261149701526128296000f3fe6080604052600436106100e85760003560e01c80638da5cb5b1161008a578063e30c397811610059578063e30c39781461028c578063ecda1c0e146102b9578063f2fde38b146102c1578063f536efc6146102e157600080fd5b80638da5cb5b146101d057806390f21c80146102225780639c5647d914610237578063df0359e21461025757600080fd5b806362fcecbf116100c657806362fcecbf14610144578063698fbb561461017b57806370313c4b1461018e5780637200b829146101bb57600080fd5b806323452b9c146100ed5780633abdecb4146101045780634c47864214610124575b600080fd5b3480156100f957600080fd5b50610102610301565b005b34801561011057600080fd5b5061010261011f366004612198565b6103cb565b34801561013057600080fd5b5061010261013f366004612202565b610567565b34801561015057600080fd5b5061016461015f366004612277565b61064d565b6040516101729291906123c6565b60405180910390f35b6101026101893660046124fa565b61096c565b34801561019a57600080fd5b506101ae6101a93660046124fa565b610ad8565b6040516101729190612559565b3480156101c757600080fd5b50610102610d14565b3480156101dc57600080fd5b506000546101fd9073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610172565b34801561022e57600080fd5b50610102610dfa565b34801561024357600080fd5b50610164610252366004612277565b611055565b34801561026357600080fd5b50610277610272366004612573565b61134f565b60405163ffffffff9091168152602001610172565b34801561029857600080fd5b506001546101fd9073ffffffffffffffffffffffffffffffffffffffff1681565b610102611404565b3480156102cd57600080fd5b506101026102dc36600461258e565b611631565b3480156102ed57600080fd5b506101ae6102fc366004612198565b61178f565b60005473ffffffffffffffffffffffffffffffffffffffff163314610352576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff166103a1576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b6103ed73ffffffffffffffffffffffffffffffffffffffff8616333087611a73565b73ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000166393f18ac584888881610437878b6125d8565b60405160e087901b7fffffffff0000000000000000000000000000000000000000000000000000000016815263ffffffff95909516600486015273ffffffffffffffffffffffffffffffffffffffff938416602486015291831660448501529091166064830152608482015260a4810185905261010060c4820152600061010482015260e48101849052610124016020604051808303816000875af11580156104e4573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061050891906125f1565b506040517fffffffffffffffff000000000000000000000000000000000000000000000000881681527fe13311fb0fe0ee03852624f65380d885625f6dd9797b55c8404d22b093c10fbd9060200160405180910390a150505050505050565b60005473ffffffffffffffffffffffffffffffffffffffff1633146105b8576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060005b81811015610647576106358484838181106105d9576105d961260a565b90506020020160208101906105ee919061258e565b7f00000000000000000000000000000000000000000000000000000000000000007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611b65565b8061063f81612639565b9150506105bc565b50505050565b6040805161014081018252600080825260606020808401829052838501829052818401839052608080850184905260a080860185905260c080870186905260e0808801879052610100880187905261012088018790528851908101895285815293840186905296830185905292820184905281018390529081018290529283015290605c831015610765576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602860248201527f646174612070617373656420696e206973206e6f742074686520636f7272656360448201527f74206c656e67746800000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b604080516101408101825260008082526060602083018190529282018390529181018290526080810182905260a0810182905260c0810182905260e0810182905261010081018290526101208101919091526040805160e081018252606080825260006020830181905292820183905281018290526080810182905260a0810182905260c0810191909152600061080060486044888a612671565b6108099161269b565b60e01c905061081c600c6004888a612671565b610825916126e3565b7fffffffffffffffff0000000000000000000000000000000000000000000000001683526108576020600c888a612671565b61086091612729565b60601c60a08401526108718161134f565b63ffffffff1660e084015261088a60346020888a612671565b61089391612729565b60601c60808401526108a960446034888a612671565b6108b29161276f565b60801c60c084015260408051602080820190925260008152835260a08085015173ffffffffffffffffffffffffffffffffffffffff169184019190915263ffffffff821690830152610908604c6048888a612671565b6109119161269b565b60e01c6060830152610927605c604c888a612671565b6109309161276f565b608090811c604084015260a084015173ffffffffffffffffffffffffffffffffffffffff169083015250600160c0820152909590945092505050565b61098e73ffffffffffffffffffffffffffffffffffffffff8516333086611a73565b6040517f8aac16ba00000000000000000000000000000000000000000000000000000000815263ffffffff8316600482015273ffffffffffffffffffffffffffffffffffffffff86811660248301819052868216604484015260648301526084820185905260a4820183905260e060c4830152600060e48301527f00000000000000000000000000000000000000000000000000000000000000001690638aac16ba9034906101040160206040518083038185885af1158015610a55573d6000803e3d6000fd5b50505050506040513d601f19601f82011682018060405250810190610a7a91906125f1565b506040517fffffffffffffffff000000000000000000000000000000000000000000000000871681527fe13311fb0fe0ee03852624f65380d885625f6dd9797b55c8404d22b093c10fbd9060200160405180910390a1505050505050565b60606fffffffffffffffffffffffffffffffff841115610b7a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603060248201527f6d696e416d6f756e742076616c75652070617373656420746f6f20626967207460448201527f6f2066697420696e2075696e7431323800000000000000000000000000000000606482015260840161075c565b63ffffffff821115610c0e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603160248201527f736c697070616765546f6c2076616c75652070617373656420746f6f2062696760448201527f20746f2066697420696e2075696e743332000000000000000000000000000000606482015260840161075c565b50604080517fecda1c0e0000000000000000000000000000000000000000000000000000000060208201527fffffffffffffffff000000000000000000000000000000000000000000000000979097166024880152606095861b7fffffffffffffffffffffffffffffffffffffffff000000000000000000000000908116602c8901529490951b9093168585015260809190911b7fffffffffffffffffffffffffffffffff0000000000000000000000000000000016605485015260e090811b7fffffffff00000000000000000000000000000000000000000000000000000000908116606486015291901b1660688301528051604c818403018152606c909201905290565b60015473ffffffffffffffffffffffffffffffffffffffff16338114610d66576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b6000610e0a603460203684612671565b610e1391612729565b60601c90506000610e28604460343684612671565b610e319161276f565b60801c90506000610e466020600c3684612671565b610e4f91612729565b60601c90506000610e64605c604c3684612671565b610e6d9161269b565b60e01c9050610e9473ffffffffffffffffffffffffffffffffffffffff8516333086611a73565b73ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000166393f18ac5610edf60486044366000612671565b610ee89161269b565b60e01c848781610ef8878a6125d8565b610f07604c6048366000612671565b610f109161269b565b60405160e088811b7fffffffff0000000000000000000000000000000000000000000000000000000016825263ffffffff909716600482015273ffffffffffffffffffffffffffffffffffffffff958616602482015293851660448501529390911660648301526084820152911c60a482015261010060c4820152600061010482015260e48101849052610124016020604051808303816000875af1158015610fbd573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fe191906125f1565b507fe13311fb0fe0ee03852624f65380d885625f6dd9797b55c8404d22b093c10fbd611012600c6004366000612671565b61101b916126e3565b6040517fffffffffffffffff000000000000000000000000000000000000000000000000909116815260200160405180910390a150505050565b6040805161014081018252600080825260606020808401829052838501829052818401839052608080850184905260a080860185905260c080870186905260e0808801879052610100880187905261012088018790528851908101895285815293840186905296830185905292820184905281018390529081018290529283015290604c831015611168576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602860248201527f646174612070617373656420696e206973206e6f742074686520636f7272656360448201527f74206c656e677468000000000000000000000000000000000000000000000000606482015260840161075c565b604080516101408101825260008082526060602083018190529282018390529181018290526080810182905260a0810182905260c0810182905260e0810182905261010081018290526101208101919091526040805160e081018252606080825260006020830181905292820183905281018290526080810182905260a0810182905260c0810191909152600061120360486044888a612671565b61120c9161269b565b60e01c905061121f600c6004888a612671565b611228916126e3565b7fffffffffffffffff00000000000000000000000000000000000000000000000016835261125a6020600c888a612671565b61126391612729565b60601c60a08401526112748161134f565b63ffffffff1660e084015261128d60346020888a612671565b61129691612729565b60601c60808401526112ac60446034888a612671565b6112b59161276f565b60801c60c084015260408051602080820190925260008152835260a08085015173ffffffffffffffffffffffffffffffffffffffff169184019190915263ffffffff82169083015261130b604c6048888a612671565b6113149161269b565b60e01c60608301525060a082015173ffffffffffffffffffffffffffffffffffffffff166080820152600060c0820152909590945092505050565b60008163ffffffff16626574680361136957506001919050565b8163ffffffff1663706f6c790361138257506089919050565b8163ffffffff1662626e620361139a57506038919050565b8163ffffffff16636f707469036113b35750600a919050565b8163ffffffff1662676e6f036113cb57506064919050565b8163ffffffff16636172626f036113e5575061a4b1919050565b8163ffffffff16636c696e6d036113ff575061e708919050565b919050565b6000611414603460203684612671565b61141d91612729565b60601c90506000611432604460343684612671565b61143b9161276f565b60801c905060006114506020600c3684612671565b61145991612729565b60601c905061148073ffffffffffffffffffffffffffffffffffffffff8416333085611a73565b73ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016638aac16ba346114cc60486044366000612671565b6114d59161269b565b60e01c848781886114eb604c6048366000612671565b6114f49161269b565b60405160e089811b7fffffffff0000000000000000000000000000000000000000000000000000000016825263ffffffff909716600482015273ffffffffffffffffffffffffffffffffffffffff95861660248201529385166044850152939091166064830152608482015290821c60a482015260c4810191909152600060e48201526101040160206040518083038185885af1158015611599573d6000803e3d6000fd5b50505050506040513d601f19601f820116820180604052508101906115be91906125f1565b507fe13311fb0fe0ee03852624f65380d885625f6dd9797b55c8404d22b093c10fbd6115ef600c6004366000612671565b6115f8916126e3565b6040517fffffffffffffffff000000000000000000000000000000000000000000000000909116815260200160405180910390a1505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314611682576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff81166116cf576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff82160361171e576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae127890600090a350565b60606fffffffffffffffffffffffffffffffff851115611831576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603060248201527f6d696e416d6f756e742076616c75652070617373656420746f6f20626967207460448201527f6f2066697420696e2075696e7431323800000000000000000000000000000000606482015260840161075c565b63ffffffff8311156118c5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603160248201527f736c697070616765546f6c2076616c75652070617373656420746f6f2062696760448201527f20746f2066697420696e2075696e743332000000000000000000000000000000606482015260840161075c565b6fffffffffffffffffffffffffffffffff821115611965576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603160248201527f72656c617965724665652076616c75652070617373656420746f6f206269672060448201527f746f2066697420696e2075696e74313238000000000000000000000000000000606482015260840161075c565b50604080517f90f21c800000000000000000000000000000000000000000000000000000000060208201527fffffffffffffffff0000000000000000000000000000000000000000000000009890981660248901527fffffffffffffffffffffffffffffffffffffffff000000000000000000000000606097881b8116602c8a01529590961b909416868601527fffffffffffffffffffffffffffffffff00000000000000000000000000000000608093841b811660548801527fffffffff0000000000000000000000000000000000000000000000000000000060e093841b811660648901529190921b16606886015291901b16606c8301528051808303605c018152607c909201905290565b60006040517f23b872dd00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8516600482015273ffffffffffffffffffffffffffffffffffffffff841660248201528260448201526020600060648360008a5af13d15601f3d1160016000511416171691505080611b5e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f5452414e534645525f46524f4d5f4641494c4544000000000000000000000000604482015260640161075c565b5050505050565b73ffffffffffffffffffffffffffffffffffffffff8316611b8557505050565b73ffffffffffffffffffffffffffffffffffffffff8216611bd2576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa158015611c47573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611c6b91906125f1565b1015611ca857611c7d83836000611cad565b611ca883837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611cad565b505050565b801580611d4d57506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa158015611d27573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611d4b91906125f1565b155b611dd9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e636500000000000000000000606482015260840161075c565b6040805173ffffffffffffffffffffffffffffffffffffffff848116602483015260448083018590528351808403909101815260649092018352602080830180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f095ea7b30000000000000000000000000000000000000000000000000000000017905283518085019094528084527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c656490840152611ca892869291600091611ea4918516908490611f51565b9050805160001480611ec5575080806020019051810190611ec591906127b5565b611ca8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f74207375636365656400000000000000000000000000000000000000000000606482015260840161075c565b6060611f608484600085611f68565b949350505050565b606082471015611ffa576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c0000000000000000000000000000000000000000000000000000606482015260840161075c565b6000808673ffffffffffffffffffffffffffffffffffffffff16858760405161202391906127d7565b60006040518083038185875af1925050503d8060008114612060576040519150601f19603f3d011682016040523d82523d6000602084013e612065565b606091505b509150915061207687838387612081565b979650505050505050565b606083156121175782516000036121105773ffffffffffffffffffffffffffffffffffffffff85163b612110576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161075c565b5081611f60565b611f60838381511561212c5781518083602001fd5b806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161075c9190612559565b803573ffffffffffffffffffffffffffffffffffffffff811681146113ff57600080fd5b803563ffffffff811681146113ff57600080fd5b600080600080600080600060e0888a0312156121b357600080fd5b873596506121c360208901612160565b95506121d160408901612160565b9450606088013593506121e660808901612184565b925060a0880135915060c0880135905092959891949750929550565b6000806020838503121561221557600080fd5b823567ffffffffffffffff8082111561222d57600080fd5b818501915085601f83011261224157600080fd5b81358181111561225057600080fd5b8660208260051b850101111561226557600080fd5b60209290920196919550909350505050565b6000806020838503121561228a57600080fd5b823567ffffffffffffffff808211156122a257600080fd5b818501915085601f8301126122b657600080fd5b8135818111156122c557600080fd5b86602082850101111561226557600080fd5b60005b838110156122f25781810151838201526020016122da565b50506000910152565b600081518084526123138160208601602086016122d7565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6000815160e0845261235a60e08501826122fb565b9050602083015173ffffffffffffffffffffffffffffffffffffffff80821660208701526040850151604087015260608501516060870152806080860151166080870152505063ffffffff60a08401511660a085015260c0830151151560c08501528091505092915050565b6040815282516040820152600060208401516101408060608501526123ef6101808501836122fb565b915060408601517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc085840301608086015261242a83826122fb565b925050606086015161245460a086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608086015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060a086015173ffffffffffffffffffffffffffffffffffffffff811660e08601525060c0860151610100818187015260e0880151915061012082818801528189015192506124c88488018415159052565b88015180151561016088015292506124de915050565b5082810360208401526124f18185612345565b95945050505050565b60008060008060008060c0878903121561251357600080fd5b8635955061252360208801612160565b945061253160408801612160565b93506060870135925061254660808801612184565b915060a087013590509295509295509295565b60208152600061256c60208301846122fb565b9392505050565b60006020828403121561258557600080fd5b61256c82612184565b6000602082840312156125a057600080fd5b61256c82612160565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b818103818111156125eb576125eb6125a9565b92915050565b60006020828403121561260357600080fd5b5051919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361266a5761266a6125a9565b5060010190565b6000808585111561268157600080fd5b8386111561268e57600080fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156126db5780818660040360031b1b83161692505b505092915050565b7fffffffffffffffff00000000000000000000000000000000000000000000000081358181169160088510156126db5760089490940360031b84901b1690921692915050565b7fffffffffffffffffffffffffffffffffffffffff00000000000000000000000081358181169160148510156126db5760149490940360031b84901b1690921692915050565b7fffffffffffffffffffffffffffffffff0000000000000000000000000000000081358181169160108510156126db5760109490940360031b84901b1690921692915050565b6000602082840312156127c757600080fd5b8151801515811461256c57600080fd5b600082516127e98184602087016122d7565b919091019291505056fea2646970667358221220f4bcc0e97dfd5f774856f3c12d0ab08f633b52c880748add5ea6d42a9012c43d64736f6c63430008110033";
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
