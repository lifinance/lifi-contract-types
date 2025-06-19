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
    static readonly bytecode = "0x60c06040523480156200001157600080fd5b506040516200282538038062002825833981016040819052620000349162000069565b6001600160a01b039182166080521660a052620000a1565b80516001600160a01b03811681146200006457600080fd5b919050565b600080604083850312156200007d57600080fd5b62000088836200004c565b915062000098602084016200004c565b90509250929050565b60805160a051612744620000e1600039600081816086015281816103fd015281816107d30152610d9d01526000818160e40152610c9501526127446000f3fe60806040526004361061005a5760003560e01c8063981886a711610043578063981886a7146100d2578063ae32859014610106578063f21a21161461011957600080fd5b806325d374e81461005f57806381d82dd814610074575b600080fd5b61007261006d366004612172565b610159565b005b34801561008057600080fd5b506100a87f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b3480156100de57600080fd5b506100a87f000000000000000000000000000000000000000000000000000000000000000081565b610072610114366004612231565b610637565b34801561012557600080fd5b5061014961013436600461229e565b60006020819052908152604090205460ff1681565b60405190151581526020016100c9565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016101d4576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815581356000908152602081905260409020548590839060ff1615610227576040517ff861803000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60a082015173ffffffffffffffffffffffffffffffffffffffff167311f111f111f111f111f111f111f111f111f111f114801561026657506020810135155b1561029d576040517ff861803000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608082015160e08301516000916103aa918435914691309173ffffffffffffffffffffffffffffffffffffffff16906102d590610a22565b60a089015173ffffffffffffffffffffffffffffffffffffffff167311f111f111f111f111f111f111f111f111f111f11461032a5760a089015173ffffffffffffffffffffffffffffffffffffffff16610330565b87602001355b604080516020810197909752868101959095526060860193909352608085019190915260a084015260c083015284013560e082015261010001604051602081830303815290604052805190602001206020527b19457468657265756d205369676e6564204d6573736167653a0a3332600052603c60042090565b905060006103f9826103bf60608601866122b7565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610a5892505050565b90507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610480576040517ff861803000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b33600061048d3447612352565b90508a8061010001516104cc576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8b8061012001511561050a576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8c61052d8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610564576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036105a2576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036105df576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6105f48e600001518f60c001518f8f33610b02565b60c08f01526106038e8c610c4a565b504791505081811115610625576106256000846106208585612352565b611029565b50506000909555505050505050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016106b2576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181556106bf83612365565b8235600090815260208190526040902054839060ff161561070c576040517ff861803000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60a082015173ffffffffffffffffffffffffffffffffffffffff167311f111f111f111f111f111f111f111f111f111f114801561074b57506020810135155b15610782576040517ff861803000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608082015160e08301516000916107ba918435914691309173ffffffffffffffffffffffffffffffffffffffff16906102d590610a22565b905060006107cf826103bf60608601866122b7565b90507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610856576040517ff861803000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3360006108633447612352565b905061086e89612365565b60a081015173ffffffffffffffffffffffffffffffffffffffff166108bf576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036108fd576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361093a576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6109438a612365565b80610100015115610980576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6109898b612365565b806101200151156109c6576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6109e36109d960a08e0160808f01612371565b8d60c0013561105e565b6109f56109ef8d612365565b8c610c4a565b504791505081811115610a1257610a126000846106208585612352565b5050600090955550505050505050565b6000816512309ce5400103610a3b5750627dee6e919050565b81660416edef1601be03610a545750632f3fb341919050565b5090565b6040516001908360005260208301516040526040835103610aad57604083015160ff81901c601b016020527f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff16606052610ad3565b6041835103610ace57606083015160001a6020526040830151606052610ad3565b600091505b6020600160806000855afa5191503d610af457638baa579f6000526004601cfd5b600060605260405292915050565b600082808203610b3e576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008585610b4d600185612352565b818110610b5c57610b5c61238c565b9050602002810190610b6e91906123bb565b610b7f906080810190606001612371565b90506000610b8c82611113565b905073ffffffffffffffffffffffffffffffffffffffff8216610bb657610bb33482612352565b90505b6000610bc2888861115e565b9050610bce888861126a565b610bdb8a898989856112d7565b600082610be785611113565b610bf19190612352565b905089811015610c3c576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044015b60405180910390fd5b9a9950505050505050505050565b608082015173ffffffffffffffffffffffffffffffffffffffff16610d7e5760c08201516040805183356020820152600092839273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169201604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081840301815290829052610cef9161241d565b60006040518083038185875af1925050503d8060008114610d2c576040519150601f19603f3d011682016040523d82523d6000602084013e610d31565b606091505b509150915081610d7757610d4481611689565b6040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c339190612479565b5050610f2c565b60c082015160405173ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001660248201526044810191909152600090606401604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152918152602080830180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fa9059cbb000000000000000000000000000000000000000000000000000000001790529051610e5a918535910190815260200190565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081840301815290829052610e96929160200161248c565b6040516020818303038152906040529050600080846080015173ffffffffffffffffffffffffffffffffffffffff1683604051610ed3919061241d565b6000604051808303816000865af19150503d8060008114610f10576040519150601f19603f3d011682016040523d82523d6000602084013e610f15565b606091505b509150915081610f2857610d4481611689565b5050505b80356000908152602081905260409020805460017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0090911617905560a082015173ffffffffffffffffffffffffffffffffffffffff167fffffffffffffffffffffffffee0eee0eee0eee0eee0eee0eee0eee0eee0eee0f01610fee57610fb58260e00151610a22565b825160405160208481013582527f7be3e48a8a8b4d32138937e1809ac83481fffe48e49bb60e43ed1d3d50349e4c910160405180910390a35b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f18260405161101d91906124bb565b60405180910390a15050565b73ffffffffffffffffffffffffffffffffffffffff83166110535761104e8282611707565b505050565b61104e838383611774565b80600003611098576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166110f157803410156110ed576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6110ed73ffffffffffffffffffffffffffffffffffffffff83163330846117e2565b600073ffffffffffffffffffffffffffffffffffffffff8216156111565761115173ffffffffffffffffffffffffffffffffffffffff83163061183f565b611158565b475b92915050565b60608160008167ffffffffffffffff81111561117c5761117c611ef8565b6040519080825280602002602001820160405280156111a5578160200160208202803683370190505b5090506000805b8381101561125f578686828181106111c6576111c661238c565b90506020028101906111d891906123bb565b6111e9906080810190606001612371565b91506111f482611113565b8382815181106112065761120661238c565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216611257573483828151811061123f5761123f61238c565b602002602001018181516112539190612352565b9052505b6001016111ac565b509095945050505050565b60005b8181101561104e57368383838181106112885761128861238c565b905060200281019061129a91906123bb565b90506112ac60e0820160c083016125ce565b156112ce576112ce6112c46060830160408401612371565b826080013561105e565b5060010161126d565b8383838382600181146115a457600085856112f3600185612352565b8181106113025761130261238c565b905060200281019061131491906123bb565b611325906080810190606001612371565b9050600089815b818110156114d057368d8d838181106113475761134761238c565b905060200281019061135991906123bb565b905061138861136e6060830160408401612371565b73ffffffffffffffffffffffffffffffffffffffff161590565b806113eb57506113eb6113a16040830160208401612371565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b801561140257506114026113a16020830183612371565b8015611487575061148761141960a08301836122b7565b611428916004916000916125e9565b61143191612613565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b6114bd576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6114c78f82611874565b5060010161132c565b505060005b6114e0600185612352565b81101561159c5760008888838181106114fb576114fb61238c565b905060200281019061150d91906123bb565b61151e906080810190606001612371565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614611593578582815181106115655761156561238c565b602002602001015161157682611113565b6115809190612352565b9250821561159357611593818885611029565b506001016114d5565b50505061167d565b8760005b8181101561167a57368b8b838181106115c3576115c361238c565b90506020028101906115d591906123bb565b90506115ea61136e6060830160408401612371565b8061160357506116036113a16040830160208401612371565b801561161a575061161a6113a16020830183612371565b8015611631575061163161141960a08301836122b7565b611667576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6116718d82611874565b506001016115a8565b50505b50505050505050505050565b60606044825110156116ce57505060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c79000000602082015290565b60006116ea60048085516116e29190612352565b859190611aee565b905080806020019051810190611700919061265b565b9392505050565b73ffffffffffffffffffffffffffffffffffffffff8216611754576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6110ed73ffffffffffffffffffffffffffffffffffffffff831682611c08565b73ffffffffffffffffffffffffffffffffffffffff82166117c1576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61104e73ffffffffffffffffffffffffffffffffffffffff84168383611c24565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c52602060006064601c6000895af13d15600160005114171661183157637939f4246000526004601cfd5b600060605260405250505050565b6000816014526f70a0823100000000000000000000000060005260208060246010865afa601f3d111660205102905092915050565b6118896118846020830183612371565b611c73565b6118bf576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608081013560008190036118ff576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600061191461136e6060850160408601612371565b61191f576000611925565b82608001355b9050600061194161193c6080860160608701612371565b611113565b9050816000036119785761197861195e6060860160408701612371565b61196e6040870160208801612371565b8660800135611d09565b6000806119886020870187612371565b73ffffffffffffffffffffffffffffffffffffffff16846119ac60a08901896122b7565b6040516119ba9291906126d2565b60006040518083038185875af1925050503d80600081146119f7576040519150601f19603f3d011682016040523d82523d6000602084013e6119fc565b606091505b509150915081611a0f57611a0f81611d35565b6000611a2461193c6080890160608a01612371565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b3888611a5560208a018a612371565b611a6560608b0160408c01612371565b611a7560808c0160608d01612371565b8b60800135898711611a875786611a91565b611a918a88612352565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b606081611afc81601f6126e2565b1015611b34576040517f47aaf07a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611b3e82846126e2565b84511015611b78576040517f3b99b53d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b606082158015611b975760405191506000825260208201604052611bff565b6040519150601f8416801560200281840101858101878315602002848b0101015b81831015611bd0578051835260209283019201611bb8565b5050858452601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016604052505b50949350505050565b60003860003884865af16110ed5763b12d13eb6000526004601cfd5b81601452806034526fa9059cbb00000000000000000000000060005260206000604460106000875af13d156001600051141716611c69576390b8ec186000526004601cfd5b6000603452505050565b6040805160178082528183019092526000918291906020820181803683370190505090506017600060208301853c60208101517f10ff0000000000000000000000000000000000000000000000000000000000007fffffff0000000000000000000000000000000000000000000000000000000000821601611d0057506023015160601c3b151592915050565b5050503b151590565b61104e8383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611d3f565b8051602082018181fd5b73ffffffffffffffffffffffffffffffffffffffff841615611e685773ffffffffffffffffffffffffffffffffffffffff8316611da8576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015611e1d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611e4191906126f5565b1015611e6857611e6873ffffffffffffffffffffffffffffffffffffffff85168483611e6e565b50505050565b81601452806034526f095ea7b300000000000000000000000060005260206000604460106000875af13d156001600051141716611c695760006034526f095ea7b3000000000000000000000000600052600038604460106000875af1508060345260206000604460106000875af13d156001600051141716611c6957633e3f8f736000526004601cfd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff81118282101715611f4b57611f4b611ef8565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715611f9857611f98611ef8565b604052919050565b600067ffffffffffffffff821115611fba57611fba611ef8565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600082601f830112611ff757600080fd5b813561200a61200582611fa0565b611f51565b81815284602083860101111561201f57600080fd5b816020850160208301376000918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461206057600080fd5b919050565b8035801515811461206057600080fd5b6000610140828403121561208857600080fd5b612090611f27565b905081358152602082013567ffffffffffffffff808211156120b157600080fd5b6120bd85838601611fe6565b602084015260408401359150808211156120d657600080fd5b506120e384828501611fe6565b6040830152506120f56060830161203c565b60608201526121066080830161203c565b608082015261211760a0830161203c565b60a082015260c082013560c082015260e082013560e082015261010061213e818401612065565b90820152610120612150838201612065565b9082015292915050565b60006080828403121561216c57600080fd5b50919050565b6000806000806060858703121561218857600080fd5b843567ffffffffffffffff808211156121a057600080fd5b6121ac88838901612075565b955060208701359150808211156121c257600080fd5b818701915087601f8301126121d657600080fd5b8135818111156121e557600080fd5b8860208260051b85010111156121fa57600080fd5b60208301955080945050604087013591508082111561221857600080fd5b506122258782880161215a565b91505092959194509250565b6000806040838503121561224457600080fd5b823567ffffffffffffffff8082111561225c57600080fd5b90840190610140828703121561227157600080fd5b9092506020840135908082111561228757600080fd5b506122948582860161215a565b9150509250929050565b6000602082840312156122b057600080fd5b5035919050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126122ec57600080fd5b83018035915067ffffffffffffffff82111561230757600080fd5b60200191503681900382131561231c57600080fd5b9250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b8181038181111561115857611158612323565b60006111583683612075565b60006020828403121561238357600080fd5b6117008261203c565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff218336030181126123ef57600080fd5b9190910192915050565b60005b838110156124145781810151838201526020016123fc565b50506000910152565b600082516123ef8184602087016123f9565b600081518084526124478160208601602086016123f9565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b602081526000611700602083018461242f565b6000835161249e8184602088016123f9565b8351908301906124b28183602088016123f9565b01949350505050565b6020815281516020820152600060208301516101408060408501526124e461016085018361242f565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe085840301606086015261251f838261242f565b9250506060850151612549608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206125bc8187018315159052565b90950151151593019290925250919050565b6000602082840312156125e057600080fd5b61170082612065565b600080858511156125f957600080fd5b8386111561260657600080fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156126535780818660040360031b1b83161692505b505092915050565b60006020828403121561266d57600080fd5b815167ffffffffffffffff81111561268457600080fd5b8201601f8101841361269557600080fd5b80516126a361200582611fa0565b8181528560208385010111156126b857600080fd5b6126c98260208301602086016123f9565b95945050505050565b8183823760009101908152919050565b8082018082111561115857611158612323565b60006020828403121561270757600080fd5b505191905056fea2646970667358221220415f3d0ca2ae6dbbb2ae36ebabff305380d8de3aa4ae3e478230f7d0eb3e691a64736f6c63430008110033";
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
