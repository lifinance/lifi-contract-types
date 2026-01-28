import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { AcrossFacetPackedV3, AcrossFacetPackedV3Interface } from "../AcrossFacetPackedV3";
type AcrossFacetPackedV3ConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class AcrossFacetPackedV3__factory extends ContractFactory {
    constructor(...args: AcrossFacetPackedV3ConstructorParams);
    deploy(_spokePool: PromiseOrValue<string>, _wrappedNative: PromiseOrValue<string>, _owner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<AcrossFacetPackedV3>;
    getDeployTransaction(_spokePool: PromiseOrValue<string>, _wrappedNative: PromiseOrValue<string>, _owner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): AcrossFacetPackedV3;
    connect(signer: Signer): AcrossFacetPackedV3__factory;
    static readonly bytecode = "0x60c06040523480156200001157600080fd5b5060405162002c8038038062002c80833981016040819052620000349162000079565b600080546001600160a01b0319166001600160a01b039283161790559182166080521660a052620000cd565b6001600160a01b03811681146200007657600080fd5b50565b6000806000606084860312156200008f57600080fd5b83516200009c8162000060565b6020850151909350620000af8162000060565b6040850151909250620000c28162000060565b809150509250925092565b60805160a051612b5c620001246000396000818161033801528181610513015261195101526000818161025a015281816104cb015281816107bc0152818161137b015281816115a701526118f30152612b5c6000f3fe60806040526004361061010e5760003560e01c8063afdac3d6116100a5578063dd08173411610074578063e30c397811610059578063e30c3978146102f9578063eb6d3a1114610326578063f2fde38b1461035a57600080fd5b8063dd081734146102d1578063df834e15146102f157600080fd5b8063afdac3d614610248578063cc41fe541461027c578063cd48728d1461029c578063d24c2325146102b157600080fd5b806354e97ec9116100e157806354e97ec91461017d5780637200b829146101b4578063808d859c146101c95780638da5cb5b146101f657600080fd5b80631458d7ad146101135780631dc3017e1461013557806323452b9c146101485780634c4786421461015d575b600080fd5b34801561011f57600080fd5b5061013361012e3660046120f4565b61037a565b005b61013361014336600461218b565b6104b4565b34801561015457600080fd5b5061013361066a565b34801561016957600080fd5b506101336101783660046121c8565b610734565b34801561018957600080fd5b5061019d61019836600461223d565b610818565b6040516101ab92919061240e565b60405180910390f35b3480156101c057600080fd5b50610133610b32565b3480156101d557600080fd5b506101e96101e4366004612542565b610c18565b6040516101ab9190612599565b34801561020257600080fd5b506000546102239073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016101ab565b34801561025457600080fd5b506102237f000000000000000000000000000000000000000000000000000000000000000081565b34801561028857600080fd5b5061019d61029736600461223d565b611071565b3480156102a857600080fd5b50610133611306565b3480156102bd57600080fd5b506101336102cc366004612542565b61156e565b3480156102dd57600080fd5b506101e96102ec36600461218b565b611723565b6101336118dc565b34801561030557600080fd5b506001546102239073ffffffffffffffffffffffffffffffffffffffff1681565b34801561033257600080fd5b506102237f000000000000000000000000000000000000000000000000000000000000000081565b34801561036657600080fd5b506101336103753660046125b3565b611b06565b60005473ffffffffffffffffffffffffffffffffffffffff1633146103cb576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008673ffffffffffffffffffffffffffffffffffffffff1686866040516103f49291906125dd565b6000604051808303816000865af19150503d8060008114610431576040519150601f19603f3d011682016040523d82523d6000602084013e610436565b606091505b5050905080156104795761044b848484611c64565b6040517fdfbe65d77c5440a078a2a1d95803d06b4a5f85b26ba3ec87bc9b421781e8dec190600090a16104ab565b6040517f750b219c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50505050505050565b73ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016637b9392323461050160608501604086016125b3565b61051160408601602087016125b3565b7f000000000000000000000000000000000000000000000000000000000000000061054260a08801608089016125b3565b3460a089013561055860808b0160608c016125ed565b61056860e08c0160c08d016125b3565b6105796101008d0160e08e01612617565b61058b6101208e016101008f01612617565b8d61012001602081019061059f9190612617565b8e8061014001906105b0919061263d565b6040518f63ffffffff1660e01b81526004016105d89d9c9b9a999897969594939291906126eb565b6000604051808303818588803b1580156105f157600080fd5b505af1158015610605573d6000803e3d6000fd5b50506040517fffffffffffffffff00000000000000000000000000000000000000000000000085351681527fe11352fef0e24c9902a94910b5ce929151ea227f4c68572aada8f2105c66c1339350602001915061065f9050565b60405180910390a150565b60005473ffffffffffffffffffffffffffffffffffffffff1633146106bb576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff1661070a576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b60005473ffffffffffffffffffffffffffffffffffffffff163314610785576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60005b81811015610813576108018383838181106107a5576107a56127ea565b90506020020160208101906107ba91906125b3565b7f00000000000000000000000000000000000000000000000000000000000000007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611c94565b8061080b81612819565b915050610788565b505050565b604080516101408101825260008082526060602083018190529282018390529181018290526080810182905260a0810182905260c0810182905260e081018290526101008101829052610120810191909152604080516101408101825260008082526020820181905291810182905260608082018390526080820183905260a0820183905260c0820183905260e0820183905261010082019290925261012081019190915260b0831015610953576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f696e76616c69642063616c6c6461746120286d7573742068617665206c656e6760448201527f7468203e3d20313736290000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b610961600c60048587612878565b61096a916128a2565b7fffffffffffffffff00000000000000000000000000000000000000000000000016825261099c6020600c8587612878565b6109a5916128ea565b60601c60a08301526109bb603460208587612878565b6109c4916128ea565b60601c60208201526109da604860348587612878565b6109e3916128ea565b60601c60808301526109f9605860488587612878565b610a0291612930565b60801c60c0830152610a18605c60588587612878565b610a2191612976565b60e090811c90830152610a386070605c8587612878565b610a41916128ea565b60601c6040820152610a57609060708587612878565b610a60916129bc565b6060820152610a7360a460908587612878565b610a7c916128ea565b60601c60a0820152610a9260a860a48587612878565b610a9b91612976565b60e01c60c0820152610ab160ac60a88587612878565b610aba91612976565b60e090811c90820152610ad160b060ac8587612878565b610ada91612976565b60e01c610100820152610af08360b08187612878565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152505050506101208201525b9250929050565b60015473ffffffffffffffffffffffffffffffffffffffff16338114610b84576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b606063ffffffff610c2e608086018684016125ed565b67ffffffffffffffff161115610cc6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603860248201527f64657374696e6174696f6e436861696e49642076616c7565207061737365642060448201527f746f6f2062696720746f2066697420696e2075696e7433320000000000000000606482015260840161094a565b6fffffffffffffffffffffffffffffffff821115610d66576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603260248201527f696e707574416d6f756e742076616c75652070617373656420746f6f2062696760448201527f20746f2066697420696e2075696e743132380000000000000000000000000000606482015260840161094a565b60007fcd48728d000000000000000000000000000000000000000000000000000000008535610d9b60408801602089016125b3565b60601b876040016020810190610db191906125b3565b604080517fffffffff0000000000000000000000000000000000000000000000000000000090951660208601527fffffffffffffffff00000000000000000000000000000000000000000000000090931660248501527fffffffffffffffffffffffffffffffffffffffff000000000000000000000000918216602c850152606090811b8216928401929092529086901b166054820152606801604051602081830303815290604052905060008360801b866060016020810190610e7591906125ed565b60e01b610e8860a0890160808a016125b3565b6040517fffffffffffffffffffffffffffffffff000000000000000000000000000000009390931660208401527fffffffff0000000000000000000000000000000000000000000000000000000091909116603083015260601b7fffffffffffffffffffffffffffffffffffffffff00000000000000000000000016603482015260a08701356048820152606801604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081840301815291905290506000610f5860e0880160c089016125b3565b60601b610f6c610100890160e08a01612617565b60e01b610f816101208a016101008b01612617565b60e01b610f966101408b016101208c01612617565b604080517fffffffffffffffffffffffffffffffffffffffff00000000000000000000000090951660208601527fffffffff000000000000000000000000000000000000000000000000000000009384166034860152918316603885015260e01b91909116603c83015201604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081840301815291905290508282826110426101408b018b61263d565b6040516020016110569594939291906129f9565b60405160208183030381529060405293505050509392505050565b604080516101408101825260008082526060602083018190529282018390529181018290526080810182905260a0810182905260c0810182905260e081018290526101008101829052610120810191909152604080516101408101825260008082526020820181905291810182905260608082018390526080820183905260a0820183905260c0820183905260e08201839052610100820192909252610120810191909152608c8310156111a7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f696e76616c69642063616c6c6461746120286d7573742068617665206c656e6760448201527f7468203e3d203134302900000000000000000000000000000000000000000000606482015260840161094a565b6111b5600c60048587612878565b6111be916128a2565b7fffffffffffffffff0000000000000000000000000000000000000000000000001682526111f06020600c8587612878565b6111f9916128ea565b60601c60a083015261120f603860348587612878565b61121891612976565b60e090811c9083015261122f603460208587612878565b611238916128ea565b60601c602082015261124e604c60388587612878565b611257916128ea565b60601c604082015261126d606c604c8587612878565b611276916129bc565b60608201526112896080606c8587612878565b611292916128ea565b60601c60a08201526112a8608460808587612878565b6112b191612976565b60e01c60c08201526112c7608860848587612878565b6112d091612976565b60e090811c908201526112e7608c60888587612878565b6112f091612976565b60e01c610100820152610af083608c8187612878565b6000611316604860343684612878565b61131f916128ea565b60601c90506000611334605860483684612878565b61133d91612930565b60801c905061136473ffffffffffffffffffffffffffffffffffffffff8316333084611cc0565b73ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016637b9392326113af60346020366000612878565b6113b8916128ea565b60601c6113ca6020600c366000612878565b6113d3916128ea565b60601c856113e66070605c366000612878565b6113ef916128ea565b60601c8661140260906070366000612878565b61140b916129bc565b61141a605c6058366000612878565b61142391612976565b60e01c61143560a46090366000612878565b61143e916128ea565b60601c61145060a860a4366000612878565b61145991612976565b60e01c61146b60ac60a8366000612878565b61147491612976565b60e01c61148660b060ac366000612878565b61148f91612976565b60e01c6114a03660b0816000612878565b6040518e63ffffffff1660e01b81526004016114c89d9c9b9a999897969594939291906126eb565b600060405180830381600087803b1580156114e257600080fd5b505af11580156114f6573d6000803e3d6000fd5b507fe11352fef0e24c9902a94910b5ce929151ea227f4c68572aada8f2105c66c133925061152d9150600c90506004366000612878565b611536916128a2565b6040517fffffffffffffffff000000000000000000000000000000000000000000000000909116815260200160405180910390a15050565b61159073ffffffffffffffffffffffffffffffffffffffff8316333084611cc0565b73ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016637b9392326115dc60608601604087016125b3565b6115ec60408701602088016125b3565b856115fd60a0890160808a016125b3565b8660a08a013561161360808c0160608d016125ed565b61162360e08d0160c08e016125b3565b6116346101008e0160e08f01612617565b8d6101000160208101906116489190612617565b8e61012001602081019061165c9190612617565b8f80610140019061166d919061263d565b6040518e63ffffffff1660e01b81526004016116959d9c9b9a999897969594939291906126eb565b600060405180830381600087803b1580156116af57600080fd5b505af11580156116c3573d6000803e3d6000fd5b50506040517fffffffffffffffff00000000000000000000000000000000000000000000000086351681527fe11352fef0e24c9902a94910b5ce929151ea227f4c68572aada8f2105c66c1339250602001905060405180910390a1505050565b606063ffffffff611739608084018484016125ed565b67ffffffffffffffff1611156117d1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603860248201527f64657374696e6174696f6e436861696e49642076616c7565207061737365642060448201527f746f6f2062696720746f2066697420696e2075696e7433320000000000000000606482015260840161094a565b7fdf834e1500000000000000000000000000000000000000000000000000000000823561180460408501602086016125b3565b60601b84604001602081019061181a91906125b3565b60601b85606001602081019061183091906125ed565b60e01b61184360a08801608089016125b3565b60601b60a088013561185b60e08a0160c08b016125b3565b60601b61186f6101008b0160e08c01612617565b60e01b6118846101208c016101008d01612617565b60e01b6118996101408d016101208e01612617565b60e01b6118aa6101408e018e61263d565b6040516020016118c69d9c9b9a99989796959493929190612a49565b6040516020818303038152906040529050919050565b73ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016637b9392323461192860346020366000612878565b611931916128ea565b60601c6119436020600c366000612878565b61194c916128ea565b60601c7f000000000000000000000000000000000000000000000000000000000000000061197f604c6038366000612878565b611988916128ea565b60601c3461199b606c604c366000612878565b6119a4916129bc565b6119b360386034366000612878565b6119bc91612976565b60e01c6119ce6080606c366000612878565b6119d7916128ea565b60601c6119e960846080366000612878565b6119f291612976565b60e01c611a0460886084366000612878565b611a0d91612976565b60e01c611a1f608c6088366000612878565b611a2891612976565b60e01c611a3936608c816000612878565b6040518f63ffffffff1660e01b8152600401611a619d9c9b9a999897969594939291906126eb565b6000604051808303818588803b158015611a7a57600080fd5b505af1158015611a8e573d6000803e3d6000fd5b507fe11352fef0e24c9902a94910b5ce929151ea227f4c68572aada8f2105c66c1339350611ac79250600c915060049050366000612878565b611ad0916128a2565b6040517fffffffffffffffff000000000000000000000000000000000000000000000000909116815260200160405180910390a1565b60005473ffffffffffffffffffffffffffffffffffffffff163314611b57576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8116611ba4576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff821603611bf3576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae127890600090a350565b73ffffffffffffffffffffffffffffffffffffffff8316611c89576108138282611d86565b610813838383611df7565b6108138383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611e65565b60006040517f23b872dd0000000000000000000000000000000000000000000000000000000081528460048201528360248201528260448201526020600060648360008a5af13d15601f3d1160016000511416171691505080611d7f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f5452414e534645525f46524f4d5f4641494c4544000000000000000000000000604482015260640161094a565b5050505050565b73ffffffffffffffffffffffffffffffffffffffff8216611dd3576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611df373ffffffffffffffffffffffffffffffffffffffff831682611f94565b5050565b73ffffffffffffffffffffffffffffffffffffffff8216611e44576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61081373ffffffffffffffffffffffffffffffffffffffff84168383611fb0565b73ffffffffffffffffffffffffffffffffffffffff841615611f8e5773ffffffffffffffffffffffffffffffffffffffff8316611ece576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015611f43573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611f679190612b0d565b1015611f8e57611f8e73ffffffffffffffffffffffffffffffffffffffff85168483611fff565b50505050565b60003860003884865af1611df35763b12d13eb6000526004601cfd5b81601452806034526fa9059cbb00000000000000000000000060005260206000604460106000875af13d156001600051141716611ff5576390b8ec186000526004601cfd5b6000603452505050565b81601452806034526f095ea7b300000000000000000000000060005260206000604460106000875af13d156001600051141716611ff55760006034526f095ea7b3000000000000000000000000600052600038604460106000875af1508060345260206000604460106000875af13d156001600051141716611ff557633e3f8f736000526004601cfd5b803573ffffffffffffffffffffffffffffffffffffffff811681146120ad57600080fd5b919050565b60008083601f8401126120c457600080fd5b50813567ffffffffffffffff8111156120dc57600080fd5b602083019150836020828501011115610b2b57600080fd5b60008060008060008060a0878903121561210d57600080fd5b61211687612089565b9550602087013567ffffffffffffffff81111561213257600080fd5b61213e89828a016120b2565b9096509450612151905060408801612089565b925061215f60608801612089565b9150608087013590509295509295509295565b6000610160828403121561218557600080fd5b50919050565b60006020828403121561219d57600080fd5b813567ffffffffffffffff8111156121b457600080fd5b6121c084828501612172565b949350505050565b600080602083850312156121db57600080fd5b823567ffffffffffffffff808211156121f357600080fd5b818501915085601f83011261220757600080fd5b81358181111561221657600080fd5b8660208260051b850101111561222b57600080fd5b60209290920196919550909350505050565b6000806020838503121561225057600080fd5b823567ffffffffffffffff81111561226757600080fd5b612273858286016120b2565b90969095509350505050565b60005b8381101561229a578181015183820152602001612282565b50506000910152565b600081518084526122bb81602086016020860161227f565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b805173ffffffffffffffffffffffffffffffffffffffff16825260006101406020830151612333602086018273ffffffffffffffffffffffffffffffffffffffff169052565b50604083015161235b604086018273ffffffffffffffffffffffffffffffffffffffff169052565b50606083015160608501526080830151612381608086018267ffffffffffffffff169052565b5060a08301516123a960a086018273ffffffffffffffffffffffffffffffffffffffff169052565b5060c08301516123c160c086018263ffffffff169052565b5060e08301516123d960e086018263ffffffff169052565b506101008381015163ffffffff169085015261012080840151818601839052612404838701826122a3565b9695505050505050565b6040815282516040820152600060208401516101408060608501526124376101808501836122a3565b915060408601517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc085840301608086015261247283826122a3565b925050606086015161249c60a086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608086015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060a086015173ffffffffffffffffffffffffffffffffffffffff811660e08601525060c0860151610100818187015260e0880151915061012082818801528189015192506125108488018415159052565b8801518015156101608801529250612526915050565b50828103602084015261253981856122ed565b95945050505050565b60008060006060848603121561255757600080fd5b833567ffffffffffffffff81111561256e57600080fd5b61257a86828701612172565b93505061258960208501612089565b9150604084013590509250925092565b6020815260006125ac60208301846122a3565b9392505050565b6000602082840312156125c557600080fd5b6125ac82612089565b81818437506000910190815290565b8183823760009101908152919050565b6000602082840312156125ff57600080fd5b813567ffffffffffffffff811681146125ac57600080fd5b60006020828403121561262957600080fd5b813563ffffffff811681146125ac57600080fd5b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261267257600080fd5b83018035915067ffffffffffffffff82111561268d57600080fd5b602001915036819003821315610b2b57600080fd5b8183528181602085013750600060208284010152600060207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b73ffffffffffffffffffffffffffffffffffffffff8e16815273ffffffffffffffffffffffffffffffffffffffff8d16602082015273ffffffffffffffffffffffffffffffffffffffff8c16604082015273ffffffffffffffffffffffffffffffffffffffff8b1660608201528960808201528860a082015267ffffffffffffffff881660c082015273ffffffffffffffffffffffffffffffffffffffff871660e082015263ffffffff86166101008201526127b061012082018663ffffffff169052565b63ffffffff841661014082015261018061016082015260006127d7610180830184866126a2565b9f9e505050505050505050505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203612871577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b5060010190565b6000808585111561288857600080fd5b8386111561289557600080fd5b5050820193919092039150565b7fffffffffffffffff00000000000000000000000000000000000000000000000081358181169160088510156128e25780818660080360031b1b83161692505b505092915050565b7fffffffffffffffffffffffffffffffffffffffff00000000000000000000000081358181169160148510156128e25760149490940360031b84901b1690921692915050565b7fffffffffffffffffffffffffffffffff0000000000000000000000000000000081358181169160108510156128e25760109490940360031b84901b1690921692915050565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156128e25760049490940360031b84901b1690921692915050565b803560208310156129f3577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff602084900360031b1b165b92915050565b60008651612a0b818460208b0161227f565b865190830190612a1f818360208b0161227f565b8651910190612a32818360208a0161227f565b018385823760009301928352509095945050505050565b7fffffffff000000000000000000000000000000000000000000000000000000008e811682527fffffffffffffffff0000000000000000000000000000000000000000000000008e1660048301527fffffffffffffffffffffffffffffffffffffffff0000000000000000000000008d8116600c8401528c811660208401528b821660348401528a81166038840152604c83018a90528816606c830152868116608083015285811660848301528416608882015260006127d7608c830184866125ce565b600060208284031215612b1f57600080fd5b505191905056fea2646970667358221220515270613abafb79ae15bce1cfed86ed0ecdd6232cdc4a9413ba074e8727dfdd64736f6c63430008110033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_spokePool";
            readonly type: "address";
            readonly internalType: "contract IAcrossSpokePool";
        }, {
            readonly name: "_wrappedNative";
            readonly type: "address";
            readonly internalType: "address";
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
        readonly name: "decode_startBridgeTokensViaAcrossV3ERC20Packed";
        readonly inputs: readonly [{
            readonly name: "data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [{
            readonly name: "bridgeData";
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
            readonly name: "acrossData";
            readonly type: "tuple";
            readonly internalType: "struct AcrossFacetV3.AcrossV3Data";
            readonly components: readonly [{
                readonly name: "receiverAddress";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "refundAddress";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receivingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "outputAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "outputAmountPercent";
                readonly type: "uint64";
                readonly internalType: "uint64";
            }, {
                readonly name: "exclusiveRelayer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "quoteTimestamp";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "fillDeadline";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "exclusivityDeadline";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "message";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "decode_startBridgeTokensViaAcrossV3NativePacked";
        readonly inputs: readonly [{
            readonly name: "data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [{
            readonly name: "bridgeData";
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
            readonly name: "acrossData";
            readonly type: "tuple";
            readonly internalType: "struct AcrossFacetV3.AcrossV3Data";
            readonly components: readonly [{
                readonly name: "receiverAddress";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "refundAddress";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receivingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "outputAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "outputAmountPercent";
                readonly type: "uint64";
                readonly internalType: "uint64";
            }, {
                readonly name: "exclusiveRelayer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "quoteTimestamp";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "fillDeadline";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "exclusivityDeadline";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "message";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "encode_startBridgeTokensViaAcrossV3ERC20Packed";
        readonly inputs: readonly [{
            readonly name: "_parameters";
            readonly type: "tuple";
            readonly internalType: "struct AcrossFacetPackedV3.PackedParameters";
            readonly components: readonly [{
                readonly name: "transactionId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "receiver";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "depositor";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "destinationChainId";
                readonly type: "uint64";
                readonly internalType: "uint64";
            }, {
                readonly name: "receivingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "outputAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "exclusiveRelayer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "quoteTimestamp";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "fillDeadline";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "exclusivityDeadline";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "message";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }, {
            readonly name: "sendingAssetId";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "inputAmount";
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
        readonly name: "encode_startBridgeTokensViaAcrossV3NativePacked";
        readonly inputs: readonly [{
            readonly name: "_parameters";
            readonly type: "tuple";
            readonly internalType: "struct AcrossFacetPackedV3.PackedParameters";
            readonly components: readonly [{
                readonly name: "transactionId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "receiver";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "depositor";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "destinationChainId";
                readonly type: "uint64";
                readonly internalType: "uint64";
            }, {
                readonly name: "receivingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "outputAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "exclusiveRelayer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "quoteTimestamp";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "fillDeadline";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "exclusivityDeadline";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "message";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "executeCallAndWithdraw";
        readonly inputs: readonly [{
            readonly name: "_callTo";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_callData";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "_assetAddress";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_to";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
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
        readonly name: "spokePool";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IAcrossSpokePool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaAcrossV3ERC20Min";
        readonly inputs: readonly [{
            readonly name: "_parameters";
            readonly type: "tuple";
            readonly internalType: "struct AcrossFacetPackedV3.PackedParameters";
            readonly components: readonly [{
                readonly name: "transactionId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "receiver";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "depositor";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "destinationChainId";
                readonly type: "uint64";
                readonly internalType: "uint64";
            }, {
                readonly name: "receivingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "outputAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "exclusiveRelayer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "quoteTimestamp";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "fillDeadline";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "exclusivityDeadline";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "message";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }, {
            readonly name: "sendingAssetId";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "inputAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaAcrossV3ERC20Packed";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaAcrossV3NativeMin";
        readonly inputs: readonly [{
            readonly name: "_parameters";
            readonly type: "tuple";
            readonly internalType: "struct AcrossFacetPackedV3.PackedParameters";
            readonly components: readonly [{
                readonly name: "transactionId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "receiver";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "depositor";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "destinationChainId";
                readonly type: "uint64";
                readonly internalType: "uint64";
            }, {
                readonly name: "receivingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "outputAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "exclusiveRelayer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "quoteTimestamp";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "fillDeadline";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "exclusivityDeadline";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "message";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaAcrossV3NativePacked";
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
        readonly type: "function";
        readonly name: "wrappedNative";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
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
        readonly name: "CallExecutedAndFundsWithdrawn";
        readonly inputs: readonly [];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiAcrossTransfer";
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
        readonly name: "InvalidReceiver";
        readonly inputs: readonly [];
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
    }, {
        readonly type: "error";
        readonly name: "WithdrawFailed";
        readonly inputs: readonly [];
    }];
    static createInterface(): AcrossFacetPackedV3Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): AcrossFacetPackedV3;
}
export {};
