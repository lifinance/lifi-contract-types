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
    static readonly bytecode = "0x60c060405234801561000f575f5ffd5b50604051612d0a380380612d0a83398101604081905261002e9161006f565b5f80546001600160a01b0319166001600160a01b039283161790559182166080521660a0526100b9565b6001600160a01b038116811461006c575f5ffd5b50565b5f5f5f60608486031215610081575f5ffd5b835161008c81610058565b602085015190935061009d81610058565b60408501519092506100ae81610058565b809150509250925092565b60805160a051612bff61010b5f395f8181610323015281816104f6015261198601525f818161024b015281816104ae01528181610798015281816113c7015281816115e3015261192a0152612bff5ff3fe608060405260043610610109575f3560e01c8063afdac3d6116100a1578063dd08173411610071578063e30c397811610057578063e30c3978146102e6578063eb6d3a1114610312578063f2fde38b14610345575f5ffd5b8063dd081734146102bf578063df834e15146102de575f5ffd5b8063afdac3d61461023a578063cc41fe541461026d578063cd48728d1461028c578063d24c2325146102a0575f5ffd5b806354e97ec9116100dc57806354e97ec9146101745780637200b829146101aa578063808d859c146101be5780638da5cb5b146101ea575f5ffd5b80631458d7ad1461010d5780631dc3017e1461012e57806323452b9c146101415780634c47864214610155575b5f5ffd5b348015610118575f5ffd5b5061012c6101273660046120fa565b610364565b005b61012c61013c36600461218c565b610497565b34801561014c575f5ffd5b5061012c610649565b348015610160575f5ffd5b5061012c61016f3660046121c6565b610712565b34801561017f575f5ffd5b5061019361018e366004612237565b6107ea565b6040516101a19291906123e2565b60405180910390f35b3480156101b5575f5ffd5b5061012c610b44565b3480156101c9575f5ffd5b506101dd6101d8366004612508565b610c28565b6040516101a1919061255c565b3480156101f5575f5ffd5b505f546102159073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016101a1565b348015610245575f5ffd5b506102157f000000000000000000000000000000000000000000000000000000000000000081565b348015610278575f5ffd5b50610193610287366004612237565b61107e565b348015610297575f5ffd5b5061012c611354565b3480156102ab575f5ffd5b5061012c6102ba366004612508565b6115aa565b3480156102ca575f5ffd5b506101dd6102d936600461218c565b61175a565b61012c611913565b3480156102f1575f5ffd5b506001546102159073ffffffffffffffffffffffffffffffffffffffff1681565b34801561031d575f5ffd5b506102157f000000000000000000000000000000000000000000000000000000000000000081565b348015610350575f5ffd5b5061012c61035f366004612575565b611b2e565b5f5473ffffffffffffffffffffffffffffffffffffffff1633146103b4576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f8673ffffffffffffffffffffffffffffffffffffffff1686866040516103dc92919061259c565b5f604051808303815f865af19150503d805f8114610415576040519150601f19603f3d011682016040523d82523d5f602084013e61041a565b606091505b50509050801561045c5761042f848484611c8a565b6040517fdfbe65d77c5440a078a2a1d95803d06b4a5f85b26ba3ec87bc9b421781e8dec1905f90a161048e565b6040517f750b219c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50505050505050565b73ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016637b939232346104e46060850160408601612575565b6104f46040860160208701612575565b7f000000000000000000000000000000000000000000000000000000000000000061052560a0880160808901612575565b3460a089013561053b60808b0160608c016125ab565b61054b60e08c0160c08d01612575565b61055c6101008d0160e08e016125d2565b61056e6101208e016101008f016125d2565b8d61012001602081019061058291906125d2565b8e80610140019061059391906125f5565b6040518f63ffffffff1660e01b81526004016105bb9d9c9b9a9998979695949392919061269d565b5f604051808303818588803b1580156105d2575f5ffd5b505af11580156105e4573d5f5f3e3d5ffd5b50506040517fffffffffffffffff00000000000000000000000000000000000000000000000085351681527fe11352fef0e24c9902a94910b5ce929151ea227f4c68572aada8f2105c66c1339350602001915061063e9050565b60405180910390a150565b5f5473ffffffffffffffffffffffffffffffffffffffff163314610699576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff166106e8576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b5f5473ffffffffffffffffffffffffffffffffffffffff163314610762576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f5b818110156107e5576107dd8383838181106107815761078161279b565b90506020020160208101906107969190612575565b7f00000000000000000000000000000000000000000000000000000000000000007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611cba565b600101610764565b505050565b61087e6040518061014001604052805f815260200160608152602001606081526020015f73ffffffffffffffffffffffffffffffffffffffff1681526020015f73ffffffffffffffffffffffffffffffffffffffff1681526020015f73ffffffffffffffffffffffffffffffffffffffff1681526020015f81526020015f81526020015f151581526020015f151581525090565b60408051610140810182525f8082526020820181905291810182905260608082018390526080820183905260a0820183905260c0820183905260e0820183905261010082019290925261012081019190915260b0831015610966576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f696e76616c69642063616c6c6461746120286d7573742068617665206c656e6760448201527f7468203e3d20313736290000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b610974600c600485876127c8565b61097d916127ef565b7fffffffffffffffff0000000000000000000000000000000000000000000000001682526109af6020600c85876127c8565b6109b891612855565b60601c60a08301526109ce6034602085876127c8565b6109d791612855565b60601c60208201526109ed6048603485876127c8565b6109f691612855565b60601c6080830152610a0c6058604885876127c8565b610a15916128ba565b60801c60c0830152610a2b605c605885876127c8565b610a349161291f565b60e090811c90830152610a4b6070605c85876127c8565b610a5491612855565b60601c6040820152610a6a6090607085876127c8565b610a7391612984565b6060820152610a8660a4609085876127c8565b610a8f91612855565b60601c60a0820152610aa560a860a485876127c8565b610aae9161291f565b60e01c60c0820152610ac460ac60a885876127c8565b610acd9161291f565b60e090811c90820152610ae460b060ac85876127c8565b610aed9161291f565b60e01c610100820152610b038360b081876127c8565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284375f920191909152505050506101208201525b9250929050565b60015473ffffffffffffffffffffffffffffffffffffffff16338114610b96576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a35f805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b606063ffffffff610c3e608086018684016125ab565b67ffffffffffffffff161115610cd6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603860248201527f64657374696e6174696f6e436861696e49642076616c7565207061737365642060448201527f746f6f2062696720746f2066697420696e2075696e7433320000000000000000606482015260840161095d565b6fffffffffffffffffffffffffffffffff821115610d76576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603260248201527f696e707574416d6f756e742076616c75652070617373656420746f6f2062696760448201527f20746f2066697420696e2075696e743132380000000000000000000000000000606482015260840161095d565b5f7fcd48728d000000000000000000000000000000000000000000000000000000008535610daa6040880160208901612575565b60601b876040016020810190610dc09190612575565b604080517fffffffff0000000000000000000000000000000000000000000000000000000090951660208601527fffffffffffffffff00000000000000000000000000000000000000000000000090931660248501527fffffffffffffffffffffffffffffffffffffffff000000000000000000000000918216602c850152606090811b8216928401929092529086901b16605482015260680160405160208183030381529060405290505f8360801b866060016020810190610e8391906125ab565b60e01b610e9660a0890160808a01612575565b6040517fffffffffffffffffffffffffffffffff000000000000000000000000000000009390931660208401527fffffffff0000000000000000000000000000000000000000000000000000000091909116603083015260601b7fffffffffffffffffffffffffffffffffffffffff00000000000000000000000016603482015260a08701356048820152606801604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081840301815291905290505f610f6560e0880160c08901612575565b60601b610f79610100890160e08a016125d2565b60e01b610f8e6101208a016101008b016125d2565b60e01b610fa36101408b016101208c016125d2565b604080517fffffffffffffffffffffffffffffffffffffffff00000000000000000000000090951660208601527fffffffff000000000000000000000000000000000000000000000000000000009384166034860152918316603885015260e01b91909116603c83015201604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152919052905082828261104f6101408b018b6125f5565b6040516020016110639594939291906129d8565b60405160208183030381529060405293505050509392505050565b6111126040518061014001604052805f815260200160608152602001606081526020015f73ffffffffffffffffffffffffffffffffffffffff1681526020015f73ffffffffffffffffffffffffffffffffffffffff1681526020015f73ffffffffffffffffffffffffffffffffffffffff1681526020015f81526020015f81526020015f151581526020015f151581525090565b60408051610140810182525f8082526020820181905291810182905260608082018390526080820183905260a0820183905260c0820183905260e08201839052610100820192909252610120810191909152608c8310156111f5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f696e76616c69642063616c6c6461746120286d7573742068617665206c656e6760448201527f7468203e3d203134302900000000000000000000000000000000000000000000606482015260840161095d565b611203600c600485876127c8565b61120c916127ef565b7fffffffffffffffff00000000000000000000000000000000000000000000000016825261123e6020600c85876127c8565b61124791612855565b60601c60a083015261125d6038603485876127c8565b6112669161291f565b60e090811c9083015261127d6034602085876127c8565b61128691612855565b60601c602082015261129c604c603885876127c8565b6112a591612855565b60601c60408201526112bb606c604c85876127c8565b6112c491612984565b60608201526112d76080606c85876127c8565b6112e091612855565b60601c60a08201526112f66084608085876127c8565b6112ff9161291f565b60e01c60c08201526113156088608485876127c8565b61131e9161291f565b60e090811c90820152611335608c608885876127c8565b61133e9161291f565b60e01c610100820152610b0383608c81876127c8565b5f6113636048603436846127c8565b61136c91612855565b60601c90505f6113806058604836846127c8565b611389916128ba565b60801c90506113b073ffffffffffffffffffffffffffffffffffffffff8316333084611ce6565b73ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016637b9392326113fa60346020365f6127c8565b61140391612855565b60601c6114146020600c365f6127c8565b61141d91612855565b60601c8561142f6070605c365f6127c8565b61143891612855565b60601c8661144a60906070365f6127c8565b61145391612984565b611461605c6058365f6127c8565b61146a9161291f565b60e01c61147b60a46090365f6127c8565b61148491612855565b60601c61149560a860a4365f6127c8565b61149e9161291f565b60e01c6114af60ac60a8365f6127c8565b6114b89161291f565b60e01c6114c960b060ac365f6127c8565b6114d29161291f565b60e01c6114e23660b0815f6127c8565b6040518e63ffffffff1660e01b815260040161150a9d9c9b9a9998979695949392919061269d565b5f604051808303815f87803b158015611521575f5ffd5b505af1158015611533573d5f5f3e3d5ffd5b507fe11352fef0e24c9902a94910b5ce929151ea227f4c68572aada8f2105c66c13392506115699150600c90506004365f6127c8565b611572916127ef565b6040517fffffffffffffffff000000000000000000000000000000000000000000000000909116815260200160405180910390a15050565b6115cc73ffffffffffffffffffffffffffffffffffffffff8316333084611ce6565b73ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016637b9392326116186060860160408701612575565b6116286040870160208801612575565b8561163960a0890160808a01612575565b8660a08a013561164f60808c0160608d016125ab565b61165f60e08d0160c08e01612575565b6116706101008e0160e08f016125d2565b8d61010001602081019061168491906125d2565b8e61012001602081019061169891906125d2565b8f8061014001906116a991906125f5565b6040518e63ffffffff1660e01b81526004016116d19d9c9b9a9998979695949392919061269d565b5f604051808303815f87803b1580156116e8575f5ffd5b505af11580156116fa573d5f5f3e3d5ffd5b50506040517fffffffffffffffff00000000000000000000000000000000000000000000000086351681527fe11352fef0e24c9902a94910b5ce929151ea227f4c68572aada8f2105c66c1339250602001905060405180910390a1505050565b606063ffffffff611770608084018484016125ab565b67ffffffffffffffff161115611808576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603860248201527f64657374696e6174696f6e436861696e49642076616c7565207061737365642060448201527f746f6f2062696720746f2066697420696e2075696e7433320000000000000000606482015260840161095d565b7fdf834e1500000000000000000000000000000000000000000000000000000000823561183b6040850160208601612575565b60601b8460400160208101906118519190612575565b60601b85606001602081019061186791906125ab565b60e01b61187a60a0880160808901612575565b60601b60a088013561189260e08a0160c08b01612575565b60601b6118a66101008b0160e08c016125d2565b60e01b6118bb6101208c016101008d016125d2565b60e01b6118d06101408d016101208e016125d2565b60e01b6118e16101408e018e6125f5565b6040516020016118fd9d9c9b9a99989796959493929190612a0a565b6040516020818303038152906040529050919050565b73ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016637b9392323461195e60346020365f6127c8565b61196791612855565b60601c6119786020600c365f6127c8565b61198191612855565b60601c7f00000000000000000000000000000000000000000000000000000000000000006119b3604c6038365f6127c8565b6119bc91612855565b60601c346119ce606c604c365f6127c8565b6119d791612984565b6119e560386034365f6127c8565b6119ee9161291f565b60e01c6119ff6080606c365f6127c8565b611a0891612855565b60601c611a1960846080365f6127c8565b611a229161291f565b60e01c611a3360886084365f6127c8565b611a3c9161291f565b60e01c611a4d608c6088365f6127c8565b611a569161291f565b60e01c611a6636608c815f6127c8565b6040518f63ffffffff1660e01b8152600401611a8e9d9c9b9a9998979695949392919061269d565b5f604051808303818588803b158015611aa5575f5ffd5b505af1158015611ab7573d5f5f3e3d5ffd5b507fe11352fef0e24c9902a94910b5ce929151ea227f4c68572aada8f2105c66c1339350611aef9250600c915060049050365f6127c8565b611af8916127ef565b6040517fffffffffffffffff000000000000000000000000000000000000000000000000909116815260200160405180910390a1565b5f5473ffffffffffffffffffffffffffffffffffffffff163314611b7e576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8116611bcb576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff821603611c1a576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae1278905f90a350565b73ffffffffffffffffffffffffffffffffffffffff8316611caf576107e58282611da8565b6107e5838383611e19565b6107e58383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611e87565b5f6040517f23b872dd00000000000000000000000000000000000000000000000000000000815284600482015283602482015282604482015260205f6064835f8a5af13d15601f3d1160015f511416171691505080611da1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f5452414e534645525f46524f4d5f4641494c4544000000000000000000000000604482015260640161095d565b5050505050565b73ffffffffffffffffffffffffffffffffffffffff8216611df5576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611e1573ffffffffffffffffffffffffffffffffffffffff831682611fb4565b5050565b73ffffffffffffffffffffffffffffffffffffffff8216611e66576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6107e573ffffffffffffffffffffffffffffffffffffffff84168383611fcd565b73ffffffffffffffffffffffffffffffffffffffff841615611fae5773ffffffffffffffffffffffffffffffffffffffff8316611ef0576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015611f63573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611f879190612bb2565b1015611fae57611fae73ffffffffffffffffffffffffffffffffffffffff85168483612016565b50505050565b5f385f3884865af1611e155763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f5114171661200d576390b8ec185f526004601cfd5b5f603452505050565b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f5114171661200d575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f5114171661200d57633e3f8f735f526004601cfd5b803573ffffffffffffffffffffffffffffffffffffffff811681146120b7575f5ffd5b919050565b5f5f83601f8401126120cc575f5ffd5b50813567ffffffffffffffff8111156120e3575f5ffd5b602083019150836020828501011115610b3d575f5ffd5b5f5f5f5f5f5f60a0878903121561210f575f5ffd5b61211887612094565b9550602087013567ffffffffffffffff811115612133575f5ffd5b61213f89828a016120bc565b9096509450612152905060408801612094565b925061216060608801612094565b95989497509295919493608090920135925050565b5f6101608284031215612186575f5ffd5b50919050565b5f6020828403121561219c575f5ffd5b813567ffffffffffffffff8111156121b2575f5ffd5b6121be84828501612175565b949350505050565b5f5f602083850312156121d7575f5ffd5b823567ffffffffffffffff8111156121ed575f5ffd5b8301601f810185136121fd575f5ffd5b803567ffffffffffffffff811115612213575f5ffd5b8560208260051b8401011115612227575f5ffd5b6020919091019590945092505050565b5f5f60208385031215612248575f5ffd5b823567ffffffffffffffff81111561225e575f5ffd5b61226a858286016120bc565b90969095509350505050565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b805173ffffffffffffffffffffffffffffffffffffffff1682525f6020820151612304602085018273ffffffffffffffffffffffffffffffffffffffff169052565b50604082015161232c604085018273ffffffffffffffffffffffffffffffffffffffff169052565b50606082015160608401526080820151612352608085018267ffffffffffffffff169052565b5060a082015161237a60a085018273ffffffffffffffffffffffffffffffffffffffff169052565b5060c082015161239260c085018263ffffffff169052565b5060e08201516123aa60e085018263ffffffff169052565b506101008201516123c461010085018263ffffffff169052565b506101208201516101406101208501526121be610140850182612276565b60408152825160408201525f60208401516101406060840152612409610180840182612276565b905060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc08483030160808501526124448282612276565b915050606085015161246e60a085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060a085015173ffffffffffffffffffffffffffffffffffffffff811660e08501525060c085015161010084015260e08501516101208401526101008501516124de61014085018215159052565b50610120850151151561016084015282810360208401526124ff81856122c2565b95945050505050565b5f5f5f6060848603121561251a575f5ffd5b833567ffffffffffffffff811115612530575f5ffd5b61253c86828701612175565b93505061254b60208501612094565b929592945050506040919091013590565b602081525f61256e6020830184612276565b9392505050565b5f60208284031215612585575f5ffd5b61256e82612094565b81818437505f910190815290565b818382375f9101908152919050565b5f602082840312156125bb575f5ffd5b813567ffffffffffffffff8116811461256e575f5ffd5b5f602082840312156125e2575f5ffd5b813563ffffffff8116811461256e575f5ffd5b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112612628575f5ffd5b83018035915067ffffffffffffffff821115612642575f5ffd5b602001915036819003821315610b3d575f5ffd5b81835281816020850137505f602082840101525f60207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b73ffffffffffffffffffffffffffffffffffffffff8e16815273ffffffffffffffffffffffffffffffffffffffff8d16602082015273ffffffffffffffffffffffffffffffffffffffff8c16604082015273ffffffffffffffffffffffffffffffffffffffff8b1660608201528960808201528860a082015261272c60c082018967ffffffffffffffff169052565b73ffffffffffffffffffffffffffffffffffffffff871660e082015263ffffffff861661010082015263ffffffff851661012082015263ffffffff84166101408201526101806101608201525f61278861018083018486612656565b9f9e505050505050505050505050505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f5f858511156127d6575f5ffd5b838611156127e2575f5ffd5b5050820193919092039150565b80357fffffffffffffffff000000000000000000000000000000000000000000000000811690600884101561284e577fffffffffffffffff000000000000000000000000000000000000000000000000808560080360031b1b82161691505b5092915050565b80357fffffffffffffffffffffffffffffffffffffffff000000000000000000000000811690601484101561284e577fffffffffffffffffffffffffffffffffffffffff000000000000000000000000808560140360031b1b82161691505092915050565b80357fffffffffffffffffffffffffffffffff00000000000000000000000000000000811690601084101561284e577fffffffffffffffffffffffffffffffff00000000000000000000000000000000808560100360031b1b82161691505092915050565b80357fffffffff00000000000000000000000000000000000000000000000000000000811690600484101561284e577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505092915050565b803560208310156129bb577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff602084900360031b1b165b92915050565b5f81518060208401855e5f93019283525090919050565b5f6129f56129ef6129e9848a6129c1565b886129c1565b866129c1565b838582375f9301928352509095945050505050565b7fffffffff000000000000000000000000000000000000000000000000000000008e1681527fffffffffffffffff0000000000000000000000000000000000000000000000008d1660048201527fffffffffffffffffffffffffffffffffffffffff0000000000000000000000008c16600c8201527fffffffffffffffffffffffffffffffffffffffff0000000000000000000000008b1660208201527fffffffff000000000000000000000000000000000000000000000000000000008a1660348201527fffffffffffffffffffffffffffffffffffffffff0000000000000000000000008916603882015287604c820152612b2b606c8201887fffffffffffffffffffffffffffffffffffffffff000000000000000000000000169052565b7fffffffff00000000000000000000000000000000000000000000000000000000861660808201527fffffffff00000000000000000000000000000000000000000000000000000000851660848201527fffffffff00000000000000000000000000000000000000000000000000000000841660888201525f612788608c8301848661258e565b5f60208284031215612bc2575f5ffd5b505191905056fea26469706673582212201dfe72f2bb68d430b7b47e2a2627e272adfe7d14d7640bc38a9dbabc294f0c8664736f6c634300081d0033";
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
