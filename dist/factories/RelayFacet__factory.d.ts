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
    static readonly bytecode = "0x60c06040523480156200001157600080fd5b5060405162002852380380620028528339810160408190526200003491620000a6565b6001600160a01b03821615806200005257506001600160a01b038116155b1562000071576040516306b7c75960e31b815260040160405180910390fd5b6001600160a01b039182166080521660a052620000de565b80516001600160a01b0381168114620000a157600080fd5b919050565b60008060408385031215620000ba57600080fd5b620000c58362000089565b9150620000d56020840162000089565b90509250929050565b60805160a0516127346200011e600039600081816086015281816103fd015281816107d30152610d9d01526000818160e40152610c9501526127346000f3fe60806040526004361061005a5760003560e01c8063981886a711610043578063981886a7146100d2578063ae32859014610106578063f21a21161461011957600080fd5b806325d374e81461005f57806381d82dd814610074575b600080fd5b61007261006d36600461212a565b610159565b005b34801561008057600080fd5b506100a87f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b3480156100de57600080fd5b506100a87f000000000000000000000000000000000000000000000000000000000000000081565b6100726101143660046121e9565b610637565b34801561012557600080fd5b50610149610134366004612256565b60006020819052908152604090205460ff1681565b60405190151581526020016100c9565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016101d4576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815581356000908152602081905260409020548590839060ff1615610227576040517ff861803000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60a082015173ffffffffffffffffffffffffffffffffffffffff167311f111f111f111f111f111f111f111f111f111f114801561026657506020810135155b1561029d576040517ff861803000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608082015160e08301516000916103aa918435914691309173ffffffffffffffffffffffffffffffffffffffff16906102d590610a22565b60a089015173ffffffffffffffffffffffffffffffffffffffff167311f111f111f111f111f111f111f111f111f111f11461032a5760a089015173ffffffffffffffffffffffffffffffffffffffff16610330565b87602001355b604080516020810197909752868101959095526060860193909352608085019190915260a084015260c083015284013560e082015261010001604051602081830303815290604052805190602001206020527b19457468657265756d205369676e6564204d6573736167653a0a3332600052603c60042090565b905060006103f9826103bf606086018661226f565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610a5892505050565b90507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610480576040517ff861803000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b33600061048d344761230a565b90508a8061010001516104cc576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8b8061012001511561050a576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8c61052d8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610564576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036105a2576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036105df576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6105f48e600001518f60c001518f8f33610b02565b60c08f01526106038e8c610c4a565b50479150508181111561062557610625600084610620858561230a565b611029565b50506000909555505050505050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016106b2576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181556106bf8361231d565b8235600090815260208190526040902054839060ff161561070c576040517ff861803000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60a082015173ffffffffffffffffffffffffffffffffffffffff167311f111f111f111f111f111f111f111f111f111f114801561074b57506020810135155b15610782576040517ff861803000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608082015160e08301516000916107ba918435914691309173ffffffffffffffffffffffffffffffffffffffff16906102d590610a22565b905060006107cf826103bf606086018661226f565b90507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610856576040517ff861803000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b336000610863344761230a565b905061086e8961231d565b60a081015173ffffffffffffffffffffffffffffffffffffffff166108bf576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036108fd576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361093a576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6109438a61231d565b80610100015115610980576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6109898b61231d565b806101200151156109c6576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6109e36109d960a08e0160808f01612329565b8d60c0013561105e565b6109f56109ef8d61231d565b8c610c4a565b504791505081811115610a1257610a12600084610620858561230a565b5050600090955550505050505050565b6000816512309ce5400103610a3b5750627dee6e919050565b81660416edef1601be03610a545750632f3fb341919050565b5090565b6040516001908360005260208301516040526040835103610aad57604083015160ff81901c601b016020527f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff16606052610ad3565b6041835103610ace57606083015160001a6020526040830151606052610ad3565b600091505b6020600160806000855afa5191503d610af457638baa579f6000526004601cfd5b600060605260405292915050565b600082808203610b3e576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008585610b4d60018561230a565b818110610b5c57610b5c612344565b9050602002810190610b6e9190612373565b610b7f906080810190606001612329565b90506000610b8c82611113565b905073ffffffffffffffffffffffffffffffffffffffff8216610bb657610bb3348261230a565b90505b6000610bc2888861115e565b9050610bce8888611272565b610bdb8a898989856112df565b600082610be785611113565b610bf1919061230a565b905089811015610c3c576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044015b60405180910390fd5b9a9950505050505050505050565b608082015173ffffffffffffffffffffffffffffffffffffffff16610d7e5760c08201516040805183356020820152600092839273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169201604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081840301815290829052610cef916123d5565b60006040518083038185875af1925050503d8060008114610d2c576040519150601f19603f3d011682016040523d82523d6000602084013e610d31565b606091505b509150915081610d7757610d44816114ae565b6040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c339190612431565b5050610f2c565b60c082015160405173ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001660248201526044810191909152600090606401604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152918152602080830180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fa9059cbb000000000000000000000000000000000000000000000000000000001790529051610e5a918535910190815260200190565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081840301815290829052610e969291602001612444565b6040516020818303038152906040529050600080846080015173ffffffffffffffffffffffffffffffffffffffff1683604051610ed391906123d5565b6000604051808303816000865af19150503d8060008114610f10576040519150601f19603f3d011682016040523d82523d6000602084013e610f15565b606091505b509150915081610f2857610d44816114ae565b5050505b80356000908152602081905260409020805460017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0090911617905560a082015173ffffffffffffffffffffffffffffffffffffffff167fffffffffffffffffffffffffee0eee0eee0eee0eee0eee0eee0eee0eee0eee0f01610fee57610fb58260e00151610a22565b825160405160208481013582527f815cd8dc72093a13fe3577112c391b6279303956526382ab98772d0239dbf78c910160405180910390a35b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f18260405161101d9190612473565b60405180910390a15050565b73ffffffffffffffffffffffffffffffffffffffff83166110535761104e828261152c565b505050565b61104e838383611599565b80600003611098576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166110f157803410156110ed576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6110ed73ffffffffffffffffffffffffffffffffffffffff8316333084611607565b600073ffffffffffffffffffffffffffffffffffffffff8216156111565761115173ffffffffffffffffffffffffffffffffffffffff831630611664565b611158565b475b92915050565b60608160008167ffffffffffffffff81111561117c5761117c611eb0565b6040519080825280602002602001820160405280156111a5578160200160208202803683370190505b5090506000805b83811015611267578686828181106111c6576111c6612344565b90506020028101906111d89190612373565b6111e9906080810190606001612329565b91506111f482611113565b83828151811061120657611206612344565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216611257573483828151811061123f5761123f612344565b60200260200101818151611253919061230a565b9052505b61126081612586565b90506111ac565b509095945050505050565b60005b8181101561104e573683838381811061129057611290612344565b90506020028101906112a29190612373565b90506112b460e0820160c083016125be565b156112d6576112d66112cc6060830160408401612329565b826080013561105e565b50600101611275565b838383838260005b8181101561149357368a8a8381811061130257611302612344565b90506020028101906113149190612373565b90506113436113296060830160408401612329565b73ffffffffffffffffffffffffffffffffffffffff161590565b806113a657506113a661135c6040830160208401612329565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b80156113bd57506113bd61135c6020830183612329565b801561144257506114426113d460a083018361226f565b6113e3916004916000916125d9565b6113ec91612603565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b611478576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6114828c82611699565b5061148c81612586565b90506112e7565b50506114a3848484846000611916565b505050505050505050565b60606044825110156114f357505060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c79000000602082015290565b600061150f6004808551611507919061230a565b859190611b3c565b905080806020019051810190611525919061264b565b9392505050565b73ffffffffffffffffffffffffffffffffffffffff8216611579576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6110ed73ffffffffffffffffffffffffffffffffffffffff831682611c56565b73ffffffffffffffffffffffffffffffffffffffff82166115e6576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61104e73ffffffffffffffffffffffffffffffffffffffff84168383611c72565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c52602060006064601c6000895af13d15600160005114171661165657637939f4246000526004601cfd5b600060605260405250505050565b6000816014526f70a0823100000000000000000000000060005260208060246010865afa601f3d111660205102905092915050565b6116b16116a96020830183612329565b6017903b1190565b6116e7576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101356000819003611727576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600061173c6113296060850160408601612329565b61174757600061174d565b82608001355b905060006117696117646080860160608701612329565b611113565b9050816000036117a0576117a06117866060860160408701612329565b6117966040870160208801612329565b8660800135611cc1565b6000806117b06020870187612329565b73ffffffffffffffffffffffffffffffffffffffff16846117d460a089018961226f565b6040516117e29291906126c2565b60006040518083038185875af1925050503d806000811461181f576040519150601f19603f3d011682016040523d82523d6000602084013e611824565b606091505b5091509150816118375761183781611ced565b600061184c6117646080890160608a01612329565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388861187d60208a018a612329565b61188d60608b0160408c01612329565b61189d60808c0160608d01612329565b8b608001358987116118af57866118b9565b6118b98a8861230a565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b836000868261192660018261230a565b81811061193557611935612344565b90506020028101906119479190612373565b611958906080810190606001612329565b905060008060008060008060005b88811015611b2c5761197960018a61230a565b81108015611988575088600114155b15611a64578d8d8281811061199f5761199f612344565b90506020028101906119b19190612373565b6119c2906080810190606001612329565b95508773ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff1614611a64578a8181518110611a0957611a09612344565b6020026020010151611a1a87611113565b611a24919061230a565b965073ffffffffffffffffffffffffffffffffffffffff861615611a49576000611a4b565b895b935083871115611a6457611a64868d610620878b61230a565b8d8d82818110611a7657611a76612344565b9050602002810190611a889190612373565b611a99906060810190604001612329565b9450611aa485611113565b925073ffffffffffffffffffffffffffffffffffffffff851615611ac9576000611acb565b895b91508183118015611b0857508773ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b15611b1c57611b1c858d610620858761230a565b611b2581612586565b9050611966565b5050505050505050505050505050565b606081611b4a81601f6126d2565b1015611b82576040517f47aaf07a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611b8c82846126d2565b84511015611bc6576040517f3b99b53d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b606082158015611be55760405191506000825260208201604052611c4d565b6040519150601f8416801560200281840101858101878315602002848b0101015b81831015611c1e578051835260209283019201611c06565b5050858452601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016604052505b50949350505050565b60003860003884865af16110ed5763b12d13eb6000526004601cfd5b81601452806034526fa9059cbb00000000000000000000000060005260206000604460106000875af13d156001600051141716611cb7576390b8ec186000526004601cfd5b6000603452505050565b61104e8383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611cf7565b8051602082018181fd5b73ffffffffffffffffffffffffffffffffffffffff841615611e205773ffffffffffffffffffffffffffffffffffffffff8316611d60576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015611dd5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611df991906126e5565b1015611e2057611e2073ffffffffffffffffffffffffffffffffffffffff85168483611e26565b50505050565b81601452806034526f095ea7b300000000000000000000000060005260206000604460106000875af13d156001600051141716611cb75760006034526f095ea7b3000000000000000000000000600052600038604460106000875af1508060345260206000604460106000875af13d156001600051141716611cb757633e3f8f736000526004601cfd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff81118282101715611f0357611f03611eb0565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715611f5057611f50611eb0565b604052919050565b600067ffffffffffffffff821115611f7257611f72611eb0565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600082601f830112611faf57600080fd5b8135611fc2611fbd82611f58565b611f09565b818152846020838601011115611fd757600080fd5b816020850160208301376000918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461201857600080fd5b919050565b8035801515811461201857600080fd5b6000610140828403121561204057600080fd5b612048611edf565b905081358152602082013567ffffffffffffffff8082111561206957600080fd5b61207585838601611f9e565b6020840152604084013591508082111561208e57600080fd5b5061209b84828501611f9e565b6040830152506120ad60608301611ff4565b60608201526120be60808301611ff4565b60808201526120cf60a08301611ff4565b60a082015260c082013560c082015260e082013560e08201526101006120f681840161201d565b9082015261012061210883820161201d565b9082015292915050565b60006080828403121561212457600080fd5b50919050565b6000806000806060858703121561214057600080fd5b843567ffffffffffffffff8082111561215857600080fd5b6121648883890161202d565b9550602087013591508082111561217a57600080fd5b818701915087601f83011261218e57600080fd5b81358181111561219d57600080fd5b8860208260051b85010111156121b257600080fd5b6020830195508094505060408701359150808211156121d057600080fd5b506121dd87828801612112565b91505092959194509250565b600080604083850312156121fc57600080fd5b823567ffffffffffffffff8082111561221457600080fd5b90840190610140828703121561222957600080fd5b9092506020840135908082111561223f57600080fd5b5061224c85828601612112565b9150509250929050565b60006020828403121561226857600080fd5b5035919050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126122a457600080fd5b83018035915067ffffffffffffffff8211156122bf57600080fd5b6020019150368190038213156122d457600080fd5b9250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b81810381811115611158576111586122db565b6000611158368361202d565b60006020828403121561233b57600080fd5b61152582611ff4565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff218336030181126123a757600080fd5b9190910192915050565b60005b838110156123cc5781810151838201526020016123b4565b50506000910152565b600082516123a78184602087016123b1565b600081518084526123ff8160208601602086016123b1565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b60208152600061152560208301846123e7565b600083516124568184602088016123b1565b83519083019061246a8183602088016123b1565b01949350505050565b60208152815160208201526000602083015161014080604085015261249c6101608501836123e7565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08584030160608601526124d783826123e7565b9250506060850151612501608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206125748187018315159052565b90950151151593019290925250919050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036125b7576125b76122db565b5060010190565b6000602082840312156125d057600080fd5b6115258261201d565b600080858511156125e957600080fd5b838611156125f657600080fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156126435780818660040360031b1b83161692505b505092915050565b60006020828403121561265d57600080fd5b815167ffffffffffffffff81111561267457600080fd5b8201601f8101841361268557600080fd5b8051612693611fbd82611f58565b8181528560208385010111156126a857600080fd5b6126b98260208301602086016123b1565b95945050505050565b8183823760009101908152919050565b80820180821115611158576111586122db565b6000602082840312156126f757600080fd5b505191905056fea2646970667358221220d9b015e00e4d9a64856394e183cc5f90bfb201fe007133d6cff2052421588fb164736f6c63430008110033";
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
